import React, { useState } from 'react'
// import { useHistory } from "react-router-dom";



const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    // const history=useHistory;

    async function loginuser(e) {
      e.preventDefault();
     const response = await fetch('http://localhost:5000/api/login',
     { method:'POST',
     header:{'Content-Type':'application/json'},
     body:JSON.stringify({email,password})})

     const data=await response.json()
    
    //  if(data) {
    //  history.push("/drama");}
     
     }
    
     


return (
    <div>
        <div className='container'>

<div className='row justify-content-md-center'>
<div className='col-4'>

  <h1>Login here</h1><hr/>

 <form onSubmit={loginuser}>
  

    <div className="mb-3">

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
    
    <button type="submit" className="btn btn-primary">Login</button>
  </form>

 </div>

</div>
</div>
    </div>
  )
}

export default Login