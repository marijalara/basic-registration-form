import React, { useEffect, useState } from "react";

const Input=() => {
    const [text, setText]=useState({
        firstName: "",
        lastName: "",
        email: ""
    })
    const [errors, setErrors]=useState({})
    const [isSubmit, setIsSubmit]=useState(false)
    useEffect(() => {
        console.log(errors)
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(errors);
        }
    },[errors])

    const onFormSubmit=(e) => {
        e.preventDefault()
        setErrors(validate(text))
        setIsSubmit(true)
    }
    const onInputChange=(e) => {
        const {name,value}=e.target
        setText({
            ...text,[name]: value
        })        
    }
    const validate=() => {
        const errors={}
        if(!text.firstName) {
            errors.firstName="You must enter a first name"
        } 
        if(!text.lastName) {
            errors.lastName="You must enter a last name"
        } 
        if(!text.email) {
            errors.email="You must enter a email"
        }
        return errors
    }

    return(
        <div className="container">
            {isSubmit ? <div className="resister">Success! Thank you for resistering!</div> : null}
            <form className="form" onSubmit={onFormSubmit}>
                <input value={text.firstName} onChange={onInputChange} name="firstName" type="text" placeholder="First Name" />
                <input value={text.lastName} onChange={onInputChange} name="lastName" type="text" placeholder="Last Name" />
                <input value={text.email} onChange={onInputChange} name="email" type="text" placeholder="Email" />
            <br />
                <button className="btn">Register</button>
        </form>
        </div>
    )
}

export default Input