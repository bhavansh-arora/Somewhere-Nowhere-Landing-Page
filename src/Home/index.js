import React from 'react'
import './styles.css'
function Home(props) {
    return (
        <>
        <button onClick={()=>props.callEvent()} className="home-page-buttons">Click here for Event Level</button>
        <button onClick={()=>props.callGroup()} className="home-page-buttons">Click here for Group Level</button>
        </>
      
    )
}

export default Home
