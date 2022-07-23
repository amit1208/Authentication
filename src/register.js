import React, { useState } from 'react'


const Register = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

// async function combinedsubmit(e){

  const combinedsubmit = async(e) =>{

    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/register', {
    method:'POST', 
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    console.log(data);

  }
  return (
    
    
    <div className='container'>

    <div className='row justify-content-md-center'>
    <div className='col-4'>

      <h1>Register here</h1><hr/>


      <form onSubmit={combinedsubmit}>
        <div className="mb-3">

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" placeholder='enter name' className="form-control" 
          value={name} onChange={(e)=>setname(e.target.value)}
           id="name"/>
        </div>


          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control col-md-4" id="email" 
          value={email} placeholder='enter Email' onChange={(e)=>setemail(e.target.value)}
           aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">Password</label>
          <input type="password" className="form-control"
          value={password} onChange={(e)=>setpassword(e.target.value)}
          id="password"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

     </div>

    </div>
    </div>
  )
}

export default Register