import React, { useState, useEffect } from 'react'
import axios from "axios";



export default function PreGuider() {

    const [guiderList, setGuiderList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshGuiderList();
    }, [])

   const guiderAPI = (url ='https://localhost:5001/api/Guiders/')=>{
        return{
            fetchAll:() =>axios.get(url),

        }
    }

    function refreshGuiderList() {
        guiderAPI().fetchAll()
            .then(res => {
                setGuiderList(res.data)
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
                <h5>{data.guiderName}</h5>
                <span>{data.place}</span> <br />
                <span>{data.telephoneNumber}</span> <br />
                <span>{data.price}</span> <br />

            </div>
        </div>
    )

    return (
        <div className="row">
        <div className="col-md-12">
            <div className="jumbotron jumbotron-fluid py-4">
                <div className="container text-center">
                    <h1 className="display-4">Guider List</h1>
                </div>
            </div>
        </div>

        <div>
            <table>
                <tbody>
                    {
                        //tr > 3 td
                        [...Array(Math.ceil(guiderList.length / 6))].map((e, i) =>
                            <tr key={i}>
                                <td>{imageCard(guiderList[4 * i])}</td>
                                <td>{guiderList[4 * i + 1] ? imageCard(guiderList[4 * i + 1]) : null}</td>
                                <td>{guiderList[4 * i + 2] ? imageCard(guiderList[4 * i + 2]) : null}</td>
                                <td>{guiderList[4 * i + 3] ? imageCard(guiderList[4 * i + 3]) : null}</td>
                                <td>{guiderList[4 * i + 4] ? imageCard(guiderList[4 * i + 4]) : null}</td>
                                <td>{guiderList[4 * i + 5] ? imageCard(guiderList[4 * i + 5]) : null}</td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
)
}