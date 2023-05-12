import React from 'react'
import { CircularProgress } from '@mui/material';

function Loading() {
    return (
        <div style={{ fontWeight: "bold", width: "30%", margin: "auto", color: 'white', backgroundColor: "rgba(0,0,0,0.95)", borderRadius: 5, padding: 10 }}>
            <div style={{ width: "50%", margin: 'auto' }}>
                <p>Loading for Data</p>
                <CircularProgress sx={{ ml: 5 }} />
            </div>
        </div>
    )
}

export default Loading