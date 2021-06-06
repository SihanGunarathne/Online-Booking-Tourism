import React, {useState,useEffect} from 'react'



const initialFieldvalues ={
    feedbackId:0,
    email:'',
    feedback:''
}

export default function FeedBack(props) {

    
    const { addOrEdit, recordForEdit } = props

    const [values,setValues]=useState(initialFieldvalues)
    const [errors,setErrors]=useState({})
  
    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, [recordForEdit])

  
    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
    })
   } 

//    const showPreview = e =>{
//       if(e.target.files && e.target.files[0]){
//             let imageFile = e.target.files[0];
//             const reader = new FileReader();
//             reader.onload = x=>{
//              setValues({
//                     ...values,
//                     feedbackFile,
//                     imageSrc: x.target.result
//                 })
//             }
//             reader.readAsDataURL( feedbackFile)
//         }

   
//     else{
//      setValues({
//          ...values,
//          feedbackFile: null,
//          imageSrc: defaultImageSrc
//        })
//      }
//  }
const validate =()=>{
    let temp={}
    temp.email = values.email ==""?false:true;
    setErrors(temp)
    return Object.values(temp).every(x => x==true)

}

const resetForm = ()=>{
    setValues(initialFieldvalues)
    document.getElementById('image-uploader').value =null;
     setErrors({})

}

const handleFormSubmit = e =>{
    e.preventDefault()
    if(validate){
          const formData = new FormData()
          formData.append('userId',values.userId)
          formData.append('email',values.email)
          formData.append('feedback',values.feedback)
        //   formData.append('feedbackName',values.feedbackName)
        //   formData.append('feedbackFile',values.feedbackFile)
          addOrEdit(formData, resetForm)

    }
}

const applyErrorClass = field =>((field in errors && errors[field]==false)?' invalid-field':'')
  
    return (
 <>
        <div className="container text-center">
            <p className="lead">feedback Form</p>
            
        </div>
         
       <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
            <div className="card">
                  <div className="card-body">
                     {/* <div className="form-group">   
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email"
                            onChange={e=>this.email=e.target.value}/>
                        </div>   */}

                         <div className="form-group">
                                <input className={"form-control"+applyErrorClass('email')} placeholder="Email" name="email"
                                     value={values.email}
                                     onChange ={handleInputChange} />
                         </div>  
                         <div className="form-group">
                                <input className={"form-control"+applyErrorClass('feedback')} placeholder="Feedback" name="feedback"
                                     value={values.feedback} 
                                     onChange ={handleInputChange}/>
                         </div> 
                         
                         <div className="form-group text-center">
                              <button type="submit" className="btn btn-primary btn-block">submit</button>    
                         </div>             
                    </div>    
             </div>

       </form>
</>

    )
}

// import axios from 'axios';
// import React, {Component} from 'react';
// import '../MainPage/HeroSection.css';

// export default class FeedBack extends Component{

//     state = {};

//     handleSubmit=e=>{
//         e.preventDefault();
//         const data={
            
//             userId:this.userId,
//             email:this.email,
//             feedback:this.feedback,
            
            
           
//         };
//         axios.post('api/FeedBacks',data).then(
//             res=>{
//                 console.log(res)
//             }
//         ).catch(
//             err=>{
//                 this.setState({
//                     message: err.response.data.message
//                 })
//             }
//         )
//     };

//     render(){

//         let error = '';

//         if(this.state.message){
//             error = (
//                 <div className="alert alert-danger" role="alert">
//                     {this.state.message}
//                 </div>
//             )

//         }

//         return(


//             <form onSubmit={this.handleSubmit}>

//                 {error}

//                 <h3>FeedBack Form</h3>


//                 <div className="form-group">
//                     <label>Email</label>
//                     <input type="email" className="form-control" placeholder="Email"
//                         onChange={e=>this.email=e.target.value}/>
//                 </div>
//                 <div className="form-group">
//                     <label>Feedback</label>
//                     <input type="text" className="form-control" placeholder="Feedback"
//                         onChange={e=>this.feedback=e.target.value}/>
//                 </div>

            

//                 <button className="btn btn-primary btn-block">Submit</button>
//             </form>
           
    
//         )
//     }
// }