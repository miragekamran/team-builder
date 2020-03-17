import React, { useState } from 'react';
import '../App.css'

function TeamForm(props) {

    const [formState, setFormState] = useState({
        title: '',
        role: '',
        email: ''
    })

    return (
        <div>
            <form style={{}}>
                <label htmlFor='fullName'>Full Name: </label>
                <input
                    type='text'
                    name='fullName'
                    value={formState.title}

                    placeholder='Enter full name here'
                />
                <label htmlFor='email'>Email: </label>
                <input
                    type='text'
                    name='email'
                    value={formState.title}

                    placeholder='Enter email here'
                />
                <label htmlFor='role'>Role: </label>
                <input
                    type='text'
                    name='role'
                    value={formState.title}

                    placeholder='Enter role here'
                />
                <button type='submit'>Add Member</button>
            </form>
        </div>
    )
}

export default TeamForm;