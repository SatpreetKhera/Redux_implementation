import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/Users';
function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [newUsername, setnewUsername] = useState("");
  return (
    <div className="App">
      {" "}
      <div className='addUser'>
        <input type="text" placeholder='Name...' onChange={(event) => { setname(event.target.value) }} />
        <input type="text" placeholder='UserName...' onChange={(event) => { setusername(event.target.value) }} />
        <button onClick={() => { dispatch(addUser({ id: userList[userList.length - 1].id + 1, name: name, username: username })) }}>Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return <div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <input type="text" placeholder='New Username' onChange={(event) => {
              setnewUsername(event.target.value);
            }} />
            <button onClick={() => { dispatch(updateUsername({ id: user.id, username: newUsername })) }}>Update User</button>
            <button onClick={() => { dispatch(deleteUser({ id: user.id })) }}>Delete</button>
          </div>

        })}
      </div>
    </div>
  );
}

export default App;
