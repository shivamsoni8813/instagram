import React, { useState } from 'react'
import DataContext from './DataContext'

function ContextState(props) {
    let [modal, setmodal] = useState("false")

    let clickModal = ()=>{
        setmodal("true")
    }
    
    return (
        <>
        <DataContext.Provider value={{modal,setmodal,clickModal }}>
            {props.children}
        </DataContext.Provider>
        </>
  )
}

export default ContextState
