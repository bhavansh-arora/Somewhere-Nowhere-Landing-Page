import { useState } from 'react';
import './App.css';
import logo from './swnw.png';
import Home from './Home'
import Event from './Event'
import Group from './Group'
import Link from './Link'

function App() {
  const [screen,Setscreen] = useState("Home")
  const [fielda,SetFielda] = useState("")
  const [fieldb,SetFieldb] = useState("")
  const [event,setEvent] = useState()
 const callEvent = () => {
   Setscreen("Event")
   setEvent(true)}
 const callGroup = () => {
   Setscreen("Group")
   setEvent(false)}
 const callLink = (fielda,fieldb) => {
   Setscreen("Link")
   SetFielda(fielda)
   SetFieldb(fieldb)}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {(screen==="Home")?<Home callEvent={callEvent} callGroup={callGroup} /> : null}
        {(screen==="Event")?<Event callLink={callLink} /> : null}
        {(screen==="Group")?<Group callLink={callLink} /> : null}
        {(screen==="Link")?<Link page={event} EventGroupName={fielda} PromoterName={fieldb} /> : null}
    </header>
    </div>
  );
}

export default App;
