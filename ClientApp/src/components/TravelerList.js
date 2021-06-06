import React, { useState, useEffect } from 'react'
import Traveler from './Traveler'
import axios from "axios";



export default function TravelerList() {

    const [travelerList, setTravelerList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshTravelerList();
    }, [])
    
    const travelerAPI = (url ='https://localhost:5001/api/Travelers')=>{
        return{
            fetchAll:() =>axios.get(url),
            create:newRecord =>axios.post(url,newRecord),
            update:(id,updatedRecord)=>axios.put(url+id,updatedRecord),
            delete:id=>axios.delete(url+id)
        }
    }

    function refreshTravelerList() {
        travelerAPI().fetchAll()
            .then(res => {
                setTravelerList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('travelerId') == "0")
            travelerAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshTravelerList();
                })
                .catch(err => console.log(err))
        else
            travelerAPI().update(formData.get('travelerId'), formData)
                .then(res => {
                    onSuccess();
                    refreshTravelerList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            travelerAPI().delete(id)
                .then(res => refreshTravelerList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card" onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top rounded-circle" />
            <div className="card-body">
                <h5>{data.travellerName}</h5>
                <span>{data.place}</span> <br />
                <span>{data.telephoneNumber}</span> <br />
                <span>{data.travellingDate}</span> <br />
                <button className="btn btn-primary btn-block" onClick={e => onDelete(e, parseInt(data.travelerId))}>
                    <i className="far fa-trash-alt">Delete</i>
                </button>
            </div>
        </div>
    )
    return (
        
        <div className="row">   
        <div className="col-md-12">
        <h2 className="display-4">.</h2>
            <div className="jumbotron jumbotron-fluid py-4">
                <div className="container text-center">
                    <h1 className="display-4">Traveler List</h1>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <Traveler
                addOrEdit={addOrEdit}
                recordForEdit={recordForEdit}
            />
        </div>
        <div className="col-md-8">
            <table>
                <tbody>
                    {
                        //tr > 3 td
                        [...Array(Math.ceil(travelerList.length / 4))].map((e, i) =>
                            <tr key={i}>
                                <td>{imageCard(travelerList[4 * i])}</td>
                                <td>{travelerList[4 * i + 1] ? imageCard(travelerList[4 * i + 1]) : null}</td>
                                <td>{travelerList[4 * i + 2] ? imageCard(travelerList[4 * i + 2]) : null}</td>
                                <td>{travelerList[4 * i + 3] ? imageCard(travelerList[4 * i + 3]) : null}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
)
    
}