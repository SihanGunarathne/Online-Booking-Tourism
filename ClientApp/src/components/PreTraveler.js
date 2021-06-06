import React, { useState, useEffect } from 'react'
import Traveler from './Traveler'
import axios from "axios";



export default function PreTraveler() {

    const [travelerList, setTravelerList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshTravelerList();
    }, [])
    
    const travelerAPI = (url ='https://localhost:5001/api/Travelers')=>{
        return{
            fetchAll:() =>axios.get(url),

        }
    }

    function refreshTravelerList() {
        travelerAPI().fetchAll()
            .then(res => {
                setTravelerList(res.data)
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
                <h5>{data.travellerName}</h5>
                <span>{data.place}</span> <br />
                <span>{data.telephoneNumber}</span> <br />
                <span>{data.travellingDate}</span> <br />
                
            </div>
        </div>
    )
    return (
        <div className="row">
        <div className="col-md-12">
            <div className="jumbotron jumbotron-fluid py-4">
                <div className="container text-center">
                    <h1 className="display-4">Traveler List</h1>
                </div>
            </div>
        </div>

        <div>
            <table>
                <tbody>
                    {
                        //tr > 3 td
                        [...Array(Math.ceil(travelerList.length / 6))].map((e, i) =>
                            <tr key={i}>
                                <td>{imageCard(travelerList[6 * i])}</td>
                                <td>{travelerList[6 * i + 1] ? imageCard(travelerList[6 * i + 1]) : null}</td>
                                <td>{travelerList[6 * i + 2] ? imageCard(travelerList[6 * i + 2]) : null}</td>
                                <td>{travelerList[6 * i + 3] ? imageCard(travelerList[6 * i + 3]) : null}</td>
                                <td>{travelerList[6 * i + 3] ? imageCard(travelerList[6 * i + 3]) : null}</td>
                                <td>{travelerList[6 * i + 3] ? imageCard(travelerList[6 * i + 3]) : null}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
)
    
}