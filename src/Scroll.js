import React from 'react'

const Scroll = ({children}) => {
    return (
        <div style={{overflowY: 'scroll', borderTop: '1px solid #444', height: '800px'}}>
           {children} 
        </div>
    )
}

export default Scroll
