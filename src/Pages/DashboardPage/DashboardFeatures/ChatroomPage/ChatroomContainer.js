import React, {useState, useEffect} from 'react'
import io from 'socket.io-client';
import queryString from 'query-string';
import ScrollToBottom from 'react-scroll-to-bottom';
import ChatInput from "./ChatInput/ChatInput"
// import HelpIcon from '@material-ui/icons/Help';
import Message from './Message/Message'
import {getCurrentWorkspace} from '../../../../services/getCurrentWorkspace'
import classes from './Chat.module.css';
//eslint-disable-next-line
let Buffer = require("buffer/").Buffer;
let socket;

function ChatroomContainer({location}) {
  // const ENDPOINT = 'http://localhost:4000';
  const ENDPOINT = process.env.REACT_APP_API_SERVER;
  const [my_userid, setUserid] = useState('');
  const [my_room, setRoom] = useState('');
  //eslint-disable-next-line
  const [my_socketid, setSocketId] =useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [roomUsers, setRoomUsers] = useState('');
  const [trigger, setTrigger] = useState(true);


  useEffect(()=> {
    const data = queryString.parse(location.search);
    const {userid, room} = data;
     socket = io(ENDPOINT, {
      path: '/chatroom'
    });

    socket.on('onConnect', data=> {
      setSocketId(data.socket_id)
     
    })

    setTrigger(!trigger)

    setUserid(userid);
    
    setRoom(room);

    
    socket.emit('join', {userid, room})

    return () => {
      socket.on('disconnect', ()=> {})
      // socket.on('disconnect', ()=> {console.log(socket.id)})
      // console.log('...unmounting')
      socket.emit('removeUser', {})
      socket.off();
      socket.disconnect();
  }

  //eslint-disable-next-line
  }, [ENDPOINT, location.search]);


  

  useEffect(()=> {
    socket.on('usersInRoom', (data)=> {
    // console.log('usersInRoom received' )
    let result = [];
     data.usersInRoom.map((user)=> {
      let name=user.name;
      let capname = name.charAt(0).toUpperCase() + name.slice(1)
      result.push(capname)
      return result
    })
    setRoomUsers( result.join(' '));

    // console.log('userInRoom', result.join(' '))
  })
  

  }, [roomUsers])

  

  //Get history 
  useEffect(()=> {
    if (my_room) {
      socket.emit('chatHistory', my_room);
    }
   
  }, [my_room, trigger])
    
  


  useEffect(()=> {
    socket.on('returnHistory', (data)=> {
      
      const updatedmessages = data.rows.map(msg => {
        console.log(msg.imgurl)
        return {
          message: msg.chatmessage_content,
          timestamp: (new Date(msg.created_at)).toLocaleString(),
          userName: msg.first_name,
          userImage: msg.imgurl
        }
      })
      // console.log('on return History', updatedmessages)
      let readydata = [...messages];
      
      updatedmessages.map( item => {
        return readydata.push(item)
      });
      
      setMessages(readydata)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=> {
    socket.on('eachMessage', (_)=>{
      socket.emit('chatHistory', my_room);
    })
  }, [my_room, trigger])


  //get message
  useEffect(()=> {
    
    socket.on('message', (message)=> {
      
      setMessages([...messages, message])
    })

    
  }, [messages])


  

  const sendMessage = (e) => {
    e.preventDefault();
    setTrigger(!trigger)
    
    if (message) {
      socket.emit('sendMessage', {message:message, userId: my_userid, roomId: my_room}, ()=> setMessage(''))
      setTrigger(!trigger)
    }

  }

  const workspaceName = getCurrentWorkspace();
  

  return (
    <div className={classes.Chat}>
      <div className={classes.Chat__header}>
        <div className={classes.Chat__headerLeft}>
          <h4 className={classes.Chat__channelName}>
            <strong># {workspaceName} chatroom</strong>
            <span className={classes.User__in__room} > {roomUsers}</span>
          </h4>
        </div>
        {/* <div className="chat__headerRight">
          {/* <HelpIcon />  */}
        {/* </div> */}
      </div>
      <ScrollToBottom className={classes.Chat__messages} >
        {messages.map(({userName, message, userImage, timestamp}, i)=> {
          return(
            <Message 
              key={i}
              message={message}
              userImage={userImage}
              timestamp={timestamp}
              userName={userName} />
          ) 
        })}
      </ScrollToBottom>
      <ChatInput 
        setMessage={setMessage}
        sendMessage={sendMessage}
        message={message} 
        name={my_userid} />
    </div>
  )
}

export default ChatroomContainer;
