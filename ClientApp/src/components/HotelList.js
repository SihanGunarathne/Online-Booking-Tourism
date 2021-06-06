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
            create:newRecord =>axios.post(url,newRecord),
            update:(id,updatedRecord)=>axios.put(url+id,updatedRecord),
            delete:id=>axios.delete(url+id)
        }
    }
    function refreshHotelList() {
        hotelAPI().fetchAll()
            .then(res => {
                setHotelList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('hotelId') == "0")
            hotelAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshHotelList();
                })
                .catch(err => console.log(err))
        else
            hotelAPI().update(formData.get('hotelId'), formData)
                .then(res => {
                    onSuccess();
                    refreshHotelList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            hotelAPI().delete(id)
                .then(res => refreshHotelList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card" onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top rounded-circle" />
            <div className="card-body">
                <h5>{data.hotelName}</h5>
                <span>{data.place}</span> <br />
                <span>{data.acNoneac}</span> <br />
                <span>{data.price}</span> <br />
                <button className="btn btn-primary btn-block" onClick={e => onDelete(e, parseInt(data.hotelId))}>
                    <i className="far fa-trash-alt">Delete</i>
                </button>
            </div>
        </div>
    )
    return (
    <div className="row">
       
        <div className="col-md-12">
        <h6 className="display-4">.</h6>
            <div className="jumbotron jumbotron-fluid py-4">
                <div className="container text-center">
                    <h1 className="display-4">Hotel List</h1>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <Hotel
                addOrEdit={addOrEdit}
                recordForEdit={recordForEdit}
            />
        </div>
        <div className="col-md-8">
            <table>
                <tbody>
                    {
                        //tr > 3 td
                        [...Array(Math.ceil(hotelList.length / 4))].map((e, i) =>
                            <tr key={i}>
                                <td>{imageCard(hotelList[4 * i])}</td>
                                <td>{hotelList[4 * i + 1] ? imageCard(hotelList[4 * i + 1]) : null}</td>
                                <td>{hotelList[4 * i + 2] ? imageCard(hotelList[4 * i + 2]) : null}</td>
                                <td>{hotelList[4 * i + 3] ? imageCard(hotelList[4 * i + 3]) : null}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
)
    
}
