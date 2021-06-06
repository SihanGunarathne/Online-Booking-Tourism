import React, { useState, useEffect } from 'react'
import Hotel from './Hotel'
import axios from "axios";


export default function HotelList() {

    const [hotelList, setHotelList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshHotelList();
    }, [])
    
    const hotelAPI = (url ='https://localhost:5001/api/Hotels')=>{
        return{
            fetchAll:() =>axios.get(url),

        }
    }
    function refreshHotelList() {
        hotelAPI().fetchAll()
            .then(res => {
                setHotelList(res.data)
            })
            .catch(err => console.log(err))
    }
    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const imageCard = data => (
        <div className="card" onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top rounded-circle" />
            <div className="card-body">
                <h5>{data.hotelName}</h5>
                <span>{data.place}</span> <br />
                <span>{data.acNoneac}</span> <br />
                <span>{data.price}</span> <br />
                
            </div>
        </div>
    )
    return (
        <div className="row">
        <div className="col-md-12">
            <div className="jumbotron jumbotron-fluid py-4">
                <div className="container text-center">
                    <h1 className="display-4">Hotel List</h1>
                </div>
            </div>
        </div>
       
        <div>
            <table>
                <tbody>
                    {
                        //tr > 3 td
                        [...Array(Math.ceil(hotelList.length / 6))].map((e, i) =>
                            <tr key={i}>
                                <td>{imageCard(hotelList[6 * i])}</td>
                                <td>{hotelList[6 * i + 1] ? imageCard(hotelList[6 * i + 1]) : null}</td>
                                <td>{hotelList[6 * i + 2] ? imageCard(hotelList[6 * i + 2]) : null}</td>
                                <td>{hotelList[6 * i + 3] ? imageCard(hotelList[6 * i + 3]) : null}</td>
                                <td>{hotelList[6 * i + 4] ? imageCard(hotelList[6 * i + 4]) : null}</td>
                                <td>{hotelList[6 * i + 5] ? imageCard(hotelList[6 * i + 5]) : null}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
)
    
}
