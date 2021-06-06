import React, { useState, useEffect } from 'react'
import FeedBack from './FeedBack'
import axios from "axios";



export default function FeedBackList() {

    const [feedBackList, setFeedBackList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshFeedBackList();
    }, [])
    
    const feedBackAPI = (url ='https://localhost:5001/api/FeedBacks/')=>{
        return{
            fetchAll:() =>axios.get(url),
            create:newRecord =>axios.post(url,newRecord),
            update:(id,updatedRecord)=>axios.put(url+id,updatedRecord),
            delete:id=>axios.delete(url+id)
        }
    }

    function refreshFeedBackList() {
        feedBackAPI().fetchAll()
            .then(res => {
                setFeedBackList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('userId') == "0")
        feedBackAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshFeedBackList();
                })
                .catch(err => console.log(err))
        else
        feedBackAPI().update(formData.get('userId'), formData)
                .then(res => {
                    onSuccess();
                    refreshFeedBackList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    // const onDelete = (e, id) => {
    //     e.stopPropagation();
    //     if (window.confirm('Are you sure to delete this record?'))
    //         guiderAPI().delete(id)
    //             .then(res => refreshGuiderList())
    //             .catch(err => console.log(err))
    // }

    const imageCard = data => (
        <div className="card" onClick={() => { showRecordDetails(data) }}>
            <div className="card-body">
                <h5>{data.email}</h5>
                <span>{data.feedback}</span> <br />
            </div>
        </div>
    )
    return (
        <>
        <div className="row">
        <div className="col-md-12">
        <h6 className="display-4">.</h6>
            {/* <div className="jumbotron jumbotron-fluid py-4">
                <div className="container text-center">
                    <h1 className="display-4">FeedBack List</h1>
                </div>
            </div> */}
        </div>
        </div>
        <div>
            <FeedBack
                addOrEdit={addOrEdit}
                recordForEdit={recordForEdit}
            />
        </div>
        <div className="row">
            <table>
                <tbody>
                    {
                        //tr > 3 td
                        [...Array(Math.ceil(feedBackList.length / 1))].map((e, i) =>
                            <tr key={i}>
                                <td>{imageCard(feedBackList[1* i])}</td>
                                {/* <td>{feedBackList[4 * i + 1] ? imageCard(feedBackList[4 * i + 1]) : null}</td>
                                <td>{feedBackList[4 * i + 2] ? imageCard(feedBackList[4 * i + 2]) : null}</td>
                                <td>{feedBackList[4 * i + 3] ? imageCard(feedBackList[4 * i + 3]) : null}</td> */}
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    
</>
)
    
}
