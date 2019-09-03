import React, { useReducer } from 'react'
import TextBox from '../../components/TextBox'

function createAppointmentFormReducer(state, action){
    switch(action.type) {
        case 'textbox':
            return <TextBox />
        case 'textarea': 
            return <textarea />
        case 'radio':
            return <input type="radio"/>
        case 'checkbox':
            return <input type="checkbox"/>
        default: 
            throw new Error('Reducer error')
    }
}

// const [state, dispatch] = useReducer(

// )

