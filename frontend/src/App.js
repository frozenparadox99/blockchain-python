import React, {useState} from "react"

function App() {

  const [userQuery,setUserQuery]  = useState('')

  const updateUserQuery = (event) =>{
    console.log(userQuery)
    setUserQuery(event.target.value)
  }

  const searchQuery = ()=>{
    window.open(`https://google.com/search?q=${userQuery}`)
  }

  return (
    <div className="App" >
      <input value={userQuery} onChange={updateUserQuery} />
      <button onClick={searchQuery} >Search</button>
    </div>
  );
}

export default App;
