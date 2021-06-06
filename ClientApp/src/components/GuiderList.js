import React, { useState, useEffect } from 'react'
import Guider from './Guider'
import axios from "axios";



export default function GuiderList() {

    const [guiderList, setGuiderList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshGuiderList();
    }, [])
    
    const guiderAPI = (url ='https://localhost:5001/api/Guiders/')=>{
        return{
            fetchAll:() =>axios.get(url),
            create:newRecord =>axios.post(url,newRecord),
            update:(id,updatedRecord)=>axios.put(url+id,updatedRecord),
            delete:id=>axios.delete(url+id)
        }
    }

    function refreshGuiderList() {
        guiderAPI().fetchAll()
            .then(res => {
                setGuiderList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('guiderId') == "0")
            guiderAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshGuiderList();
                })
                .catch(err => console.log(err))
        else
            guiderAPI().update(formData.get('guiderId'), formData)
                .then(res => {
                    onSuccess();
                    refreshGuiderList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            guiderAPI().delete(id)
                .then(res => refreshGuiderList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card" onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top rounded-circle" />
            <div className="card-body">
                <h5>{data.guiderName}</h5>
                <span>{data.place}</span> <br />
                <span>{data.telephoneNumber}</span> <br />
                <span>{data.price}</span> <br />
                <button className="btn btn-primary btn-block" onClick={e => onDelete(e, parseInt(data.guiderId))}>
                    <i className="far fa-trash-alt" >Delete</i>
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
                    <h1 className="display-4">Guider List</h1>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <Guider
                addOrEdit={addOrEdit}
                recordForEdit={recordForEdit}
            />
        </div>
        <div className="col-md-8">
            <table>
                <tbody>
                    {
                        //tr > 3 td
                        [...Array(Math.ceil(guiderList.length / 4))].map((e, i) =>
                            <tr key={i}>
                                <td>{imageCard(guiderList[4 * i])}</td>
                                <td>{guiderList[4 * i + 1] ? imageCard(guiderList[4 * i + 1]) : null}</td>
                                <td>{guiderList[4 * i + 2] ? imageCard(guiderList[4 * i + 2]) : null}</td>
                                <td>{guiderList[4 * i + 3] ? imageCard(guiderList[4 * i + 3]) : null}</td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
)
    
}
