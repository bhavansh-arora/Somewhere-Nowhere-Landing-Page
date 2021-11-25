import React,{useState} from 'react'
import './styles.css'
function Group(props) {
    const [GroupName,setGroupName] = useState("")
    const [PromoterName,setPromoterName] = useState("")
    const [error,setError] = useState(false)
    function handleChangeGroupName(e)  {     
    setGroupName(e.target.value);
  };
  function handleChangePromoterName(e)  {     
    setPromoterName(e.target.value);
  };
  const LinkGenerator = () => {
    if(GroupName.length==0||PromoterName.length==0){
      setError(true)
    }
    else {
      setError(false)
      props.callLink(GroupName,PromoterName)
    }
  }
    return (
        <>
        <input maxLength = "20" value={GroupName} onChange={handleChangeGroupName} placeholder="Please enter Group Name" className="group-page-inputs" />
        <input maxLength = "20" value={PromoterName} onChange={handleChangePromoterName} placeholder="Please enter Promoter Name" className="group-page-inputs" />
        {(error)?<p className="error">Please enter all the fields.</p>:null}
        <button onClick={()=> LinkGenerator()} className="next-button">Next</button>
        </>
      
    )
}

export default Group
