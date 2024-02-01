import React from 'react'
import PropTypes from 'prop-types'

const RegisterApp = ({ value }) => {
    return (
        <div>
            <h1>CounterApp</h1>
            <h2> {value} </h2>
        </div>
    )
}

RegisterApp.propTypes = {
    value: PropTypes.number

}

export default RegisterApp
