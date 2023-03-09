import React from 'react'

function Spinner() {
    return (
        <div>
            <div className="text-center float-right">
                <div className="spinner-border text-center" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        </div>
    )
}

export default Spinner
