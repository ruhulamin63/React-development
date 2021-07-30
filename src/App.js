import { useState } from 'react';
import UserList from './components/UserList';
import {users} from './usersData';
import Test from './components/Test'

function App() {
  
  const [myuser, setUsers] = useState(users);

  const deleteCallback = (id)=>{
    const data = myuser.filter((user)=>user.id !== id);
    setUsers(data);
  }

  return (
    <div >
        <UserList list={myuser} callback={deleteCallback}/>

        <Test />
    </div>
  );
}

export default App;
