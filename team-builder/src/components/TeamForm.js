import React, { useState } from 'react';
import '../App.css'

function TeamForm(props) {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        role: ''
    })

    const changeHandler = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('In the form submit handler');
        props.addMember({
            ...formState,
            id: Date.now()
        });
    };

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor='fullName'>Full Name: </label>
                <input
                    type='text'
                    name='name'
                    value={formState.name}
                    onChange={changeHandler}
                    placeholder='Enter full name here'
                />
                <label htmlFor='email'>Email: </label>
                <textarea
                    type='text'
                    name='email'
                    value={formState.email}
                    onChange={changeHandler}
                    placeholder='Enter email here'
                />
                <label htmlFor='role'>Role: </label>
                <textarea
                    type='text'
                    name='role'
                    value={formState.role}
                    onChange={changeHandler}
                    placeholder='Enter role here'
                />
                <button type='submit'>Add Member</button>
            </form>
        </div>
    )
}

export default TeamForm;