import React,{useState} from 'react'
import './styles.css'
function Event(props) {
    const [EventID,setEventID] = useState("")
    const [PromoterName,setPromoterName] = useState("")
    const [error,setError] = useState(false)
    function handleChangeEventID(e)  {     
    setEventID(e.target.value);
  };
  function handleChangePromoterName(e)  {     
    setPromoterName(e.target.value);
  };
  const LinkGenerator = () => {
    if(EventID.length==0||PromoterName.length==0){
      setError(true)
    }
    else {
      setError(false)
      props.callLink(EventID,PromoterName)
    }
  }
    return (
        <>
        <input maxLength = "5" value={EventID} onChange={handleChangeEventID} placeholder="Please enter Event ID" className="event-page-inputs" />
        <input maxLength = "20" value={PromoterName} onChange={handleChangePromoterName} placeholder="Please enter Promoter Name" className="event-page-inputs" />
        {(error)?<p className="error">Please enter all the fields.</p>:null}
        <button onClick={()=> LinkGenerator()} className="next-button">Next</button>
        </>
      
    )
}

export default Event
