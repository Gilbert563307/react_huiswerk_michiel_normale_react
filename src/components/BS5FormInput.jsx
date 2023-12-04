import React from 'react'

export default function BS5FormInput({ name, type, placeholder }) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {name}
            </label>
            <input
                type={type}
                className="form-control"
                id={name}
                placeholder={placeholder}
            />
        </div>
    )
}
