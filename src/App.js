import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "./components/Button";
import CountMinus from "./components/CountMinus";
import CountPlus from "./components/CountPlus";
import { addUserActionCreator } from "./store/usersReducer";
import { removeUserActionCreator } from "./store/usersReducer";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cash.count);
  const users = useSelector((state) => state.users.regularUsers);
  
  const usersList = users.map((user, idx) => {
    return (
      <div onClick={() => {removeUser(user)}} className="user" data-id={user.id} key={idx}>{user.name} {user.lastname}</div>
    )
    // <div key={idx}>
    //   {`${user.name} ${user.lastname}`}
    // </div>)
  })

  function removeUser(u) {
    // const id = e.target.dataset.id
    dispatch(removeUserActionCreator(u.id) )
  }
  // function addUser() {
  //   dispatch({type: "ADD_USER", payload: [...users, {name: 'Petia', lastname: 'YYY'}]})
  // }
  function addUser(name, lastname) {
    const newId = users.length + 1;
    const newUsers = [...users, {name: name, lastname: lastname, id: newId}];
    dispatch(addUserActionCreator(newUsers))

    // dispatch({type: "ADD_USER", payload: [...users, {name: name, lastname: lastname, id: newId}]})
  }


  return (
    <div className="App">
      <h1> COUNT : {count}</h1>
      <hr />
      <div className="count">
        <CountMinus />
        <CountPlus />
      </div>
      <div>
        <Button />
      </div>
      <hr />
      <h1>USERS</h1>
      <button onClick={() => {addUser(prompt(), prompt())}}> ADD USER </button>

      <div>
        List of USERS:

      {
        users.length ?
        usersList :
        <div>There Are No Users</div>
      }

      </div>
    </div>
  );
}

export default App;
