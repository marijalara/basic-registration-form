import React, { useState, useEffect } from 'react';

interface Text {
    firstName: string
    lastName: string
    email: string
}
interface Errors {
    firstName?: string
    lastName?: string
    email?: string
}

const Input: React.FC = () => {
    const [text, setText]=useState<Text>({
        firstName: '',
        lastName: '',
        email: ''
    })
    const [errors, setErrors]=useState<Errors>({})
    const [isSubmit, setIsSubmit]=useState<boolean>(false)

    useEffect(() => {
        console.log(errors)
        if(Object.keys(errors).length===0 && isSubmit) {
        }
    },[errors, isSubmit])

    const onFormSubmit=(e: React.FormEvent<HTMLFormElement>) : void=> {
        e.preventDefault()
        const newErrors=validate()
        setErrors(newErrors)
        setIsSubmit(true)
    }
    const validate=(): Errors => {
        const newErrors: Errors={}
        if(!text.firstName) {
            newErrors.firstName="You must enter a first name"
        }
        if(!text.lastName) {
            newErrors.lastName="You must enter a last name"
        }
        if(!text.email) {
            newErrors.email="You must enter a email"
        }
        return newErrors
    }
    const onInputChange=(e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value}=e.target
        setText({
            ...text,[name]: value
        })
    }
    return (
        <div className='container'>
            {Object.keys(errors).length===0 && isSubmit ? <div className='register'>Success! Thank you for registering!</div> : null}
            <form className='form' onSubmit={onFormSubmit}>
                <input 
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    value={text.firstName}
                    onChange={onInputChange}
                />
                <p>{errors.firstName}</p>
                <input 
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    value={text.lastName}
                    onChange={onInputChange}
                />
                <p>{errors.lastName}</p>
                <input 
                    name='email'
                    type='text'
                    placeholder='Email'
                    value={text.email}
                    onChange={onInputChange}
                />
                <p>{errors.email}</p>
                <br />
                <button className='btn'>Register</button>
            </form>
        </div>
    )
}
export default Input