import React from 'react'

export default function BS5TextArea({title, name, rows = 3}) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {title}
            </label>
            <textarea
                className="form-control"
                id={name}
                rows={rows}
            ></textarea>
        </div>
    )
}
