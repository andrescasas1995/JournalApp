import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url(https://blog.foto24.com/wp-content/uploads/2019/02/6-fotografia-de-Alejandro-Rodriguez-683x1024.jpg)'
                }}
            />
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    esto es un monton de tecto que estoy agregando ara poder hacer las pruebas
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <span>28</span>
            </div>
        </div>
    )
}
