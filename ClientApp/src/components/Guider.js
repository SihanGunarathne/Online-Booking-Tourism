import React, {useState,useEffect} from 'react'

const defaultImageSrc ='/img/image_placeholder.png'

const initialFieldvalues ={
    guiderId:0,
    guiderName:'',
    place:'',
    telephoneNumber:'',
    price:'',
    imageName:'',
    imageSrc:defaultImageSrc,
    imageFile:null
}

export default function Guider(props) {

    
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

   const showPreview = e =>{
       if(e.target.files && e.target.files[0]){
           let imageFile = e.target.files[0];
           const reader = new FileReader();
           reader.onload = x=>{
            setValues({
                   ...values,
                   imageFile,
                   imageSrc: x.target.result
               })
           }
           reader.readAsDataURL(imageFile)
       }

   
   else{
    setValues({
        ...values,
        imageFile: null,
        imageSrc: defaultImageSrc
      })
    }
}
const validate =()=>{
    let temp={}
    temp.guiderName = values.guiderName ==""?false:true;
    temp.imageSrc =values.imageSrc ==defaultImageSrc?false:true;
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
          formData.append('guiderId',values.guiderId)
          formData.append('guiderName',values.guiderName)
          formData.append('place',values.place)
          formData.append('telephoneNumber',values.telephoneNumber)
          formData.append('price',values.price)
          formData.append('imageName',values.imageName)
          formData.append('imageFile',values.imageFile)
          addOrEdit(formData, resetForm)

    }
}

const applyErrorClass = field =>((field in errors && errors[field]==false)?' invalid-field':'')
  
    return (
 <>
        <div className="container text-center">
            <p className="lead">A Guider</p>
            
        </div>
         
       <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
            <div className="card">
                <img src={values.imageSrc} className="card-img-top" />
                  <div className="card-body">
                      <div className="form-group">
                          <input type="file" accept="image/*" className={"form-control-file"+applyErrorClass('imageSrc')} 
                            onChange={showPreview} id="image-uploader" />
                      </div>

                         <div className="form-group">
                                <input className={"form-control"+applyErrorClass('guiderName')} placeholder="Guider Name" name="guiderName"
                                     value={values.guiderName}
                                     onChange ={handleInputChange} />
                         </div>  
                         <div className="form-group">
                                <input className={"form-control"+applyErrorClass('place')} placeholder="Place" name="place"
                                     value={values.place} 
                                     onChange ={handleInputChange}/>
                         </div> 
                         <div className="form-group">
                                <input className={"form-control"+applyErrorClass('telephoneNumber')} placeholder="TelephoneNumber" name="telephoneNumber"
                                     value={values.telephoneNumber} 
                                     onChange ={handleInputChange}/>
                         </div>
                         <div className="form-group">
                                <input className={"form-control"+applyErrorClass('price')} placeholder="Price for a day" name="price"
                                     value={values.price} 
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
