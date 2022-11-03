import React from "react"
function App() {

  const [list, setList] = React.useState([])
  const [data, setData] = React.useState({})

  const handleSubmit = (e) =>{
    e.preventDefault()
    setList([...list, data])
  }

  const handleChange = (e) =>{

    const name = e.target.name
    const value = e.target.value

    setData({...data,[name]:value})
  }


  return (
    <div className="App text-center">
    <div className="container-fluid bg-dark mb-5">
        <div className="header text-center">
            <h3 className="text-light p-3 lead fs-3">Todo List</h3>
        </div>

        <div className="py-5">
            <div className="text-center">
                 <form className="" action="" onSubmit={handleSubmit}>
                 <input className="px-2 py-2" name="title" type="text" onChange={handleChange} placeholder="Title"/>
                <input className="px-2 mx-1 py-2" type="text" name="dis" onChange={handleChange} placeholder="Discription"/>
                <button className="mx-2 btn btn-primary" >Add a task</button>
                 </form>
            </div>
        </div>
    </div>
{  // Dynamic data
  list.map(data=>(
    <div className=" text-center border row p-4">
    <div className="bg-light col-10">
        <div className="p-1">
            <h5 className="">{data.title}</h5>
            <p className="lead">{data.dis}</p>
        </div>
    </div>
    <div className="col-2 mt-3">
            <button className="btn btn-danger" onClick={()=>{list.splice(0,1)
            }}>Delete</button>
    </div> 
</div>
  ))
}
    </div>
  );
}

export default App;