import React,{useState} from 'react'
import copy from "copy-to-clipboard";  
import './styles.css'
const base_url = "http://tixr.com/pr/"
function Link(props) {
    const [copied,setCopied] = useState(false)
     const copyToClipboard = () => {
       {(props.page)?copy(base_url+props.PromoterName+'/'+props.EventGroupName):copy(base_url+props.PromoterName+'/g/'+props.EventGroupName)};  
       setCopied(true)     
    }
    return (
        <>
        <p className="link">{(props.page)?base_url+props.PromoterName+'/'+props.EventGroupName:base_url+props.PromoterName+'/g/'+props.EventGroupName}</p>
        <button onClick={() =>  copyToClipboard()} className="copy-button">{(!copied)?"Copy Link":"Link Copied"}</button>
        </>
      
    )
}

export default Link
