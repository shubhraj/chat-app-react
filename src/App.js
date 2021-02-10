import {useState, useEffect} from "react";
import database from "./firebase";
import firebase from "firebase";

import './App.css';

function App() {
  
 const [input, setInput] = useState("");  
 const [list, setList] = useState([]);
 const [username, setUsername] = useState('Guest');

useEffect(() => {
  const name = window.prompt("enter user name");
  setUsername(name);
}, []);

 useEffect(() => {
    //similar to componentDidMount
    database
      .collection('messages')
      .orderBy('timestamp','asc')
      .onSnapshot((snapShot) => {
         setList(snapShot.docs.map((doc) => ({
           name: username,
           id: doc.id,
           data: doc.data()
         }))) 
    });
 }, []);

 const sendMessage = (event) => {
   event.preventDefault();

   const chatMessage = {
     name: username,
     message: input,
     timestamp: firebase.firestore.FieldValue.serverTimestamp()
   }

   database.collection('messages').add(chatMessage);
   //setList([...list, input]);
   setInput('');
 };

 

return(
  <div className="app">
    <h1>Hello Chat APP!</h1>
    {
      list.map(({id, data: {message, timestamp, name} }) => (
      <h3 key={id} className='chatMessage'>
       {name} : {message}
        </h3>
    ))}

    <form>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={sendMessage} type="submit">Send Message</button>
    </form>
  </div>

 );

}

export default App;
