import React from 'react'
import { useRef, useState, useEffect } from 'react';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({site: "",username: "",password:""})
    const [passwordArray, setpasswordArray] = useState([])
    useEffect(() => {
      let password = localStorage.getItem("password")
      if(password){
        setpasswordArray(JSON.parse(password))
      }
    }, [])
    
    const showPassword = () =>{
        passwordRef.current.type = "text"
        if (input.type = "password") {
            passwordRef.current.type = "text";
        }else {
            passwordRef.current.type = "password"
        }
    }
    const savePassword = () =>{
      setpasswordArray([...passwordArray, form])
      localStorage.setItem("password",JSON.stringify([...passwordArray, form]))
      console.log(passwordArray)
    }

    const handleChange =(e) =>{
      setform({...form,[e.target.name]: e.target.value})
    }

 return (
    <>
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
      <div className=" bg-slate-200 mycontainer">
        <h1 className='text-4xl text font-bold text-center'>
            <span className='text-green-800'>&lt;</span>
            Pass
            <span className='text-green-800'>OP/ &gt;</span>
            </h1>
        <p className='text-green-700 text-lg text-center'>Your own Password Manager</p>
      <div className=' flex flex-col p-4 text-black gap-3 items-center'>
        <input value={form.site} onChange={handleChange} placeholder="Enter website URL" className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="" />
        <div className='flex w-full justify-between gap-2'>
        <input value={form.username} onChange={handleChange} placeholder="Enter username" className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" />
        <div className="relative">
            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder="Password"className=' password  rounded-full border border-green-500 w-full p-4 py-1'  type="password" name="password"  />
            <span ref={ref}className='absolute right-[5px] top-[6px] text-sm cursor-pointer' onClick={showPassword}>show</span>
            </div>
        
        </div>
        <button onClick={savePassword} className='text-black flex justify-center items-center bg-green-600 rounded-full px-2 py-2 w-fit hover:bg-green-500 border border-green-950'>
            <lord-icon
            src="https://cdn.lordicon.com/sbnjyzil.json"
            trigger="hover">
         </lord-icon>Add Pssword</button>
        </div>
        <div className='password'>
          <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Password to show</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
  <thead className=' bg-green-800 text-white'>
    <tr>
      <th className='py-2'>Site</th>
      <th className='py-2'>Username</th>
      <th className='py-2'>Password</th>
    </tr>
  </thead>
  <tbody className='bg-green-100'>
    {passwordArray.map((item, index) =>{
      return<tr key={index}>
      <td className='py-2text-center w-32'><a href={item.site} target="_blank">{item.site}</a></td>
      <td className=' py-2 text-center w-32' >{item.username}</td>
      <td className='py-2 text-center w-32'>{item.password}</td>
    </tr>
    })}
  </tbody>
</table>}
        </div>
      </div>
    </>
  )
}

export default Manager
