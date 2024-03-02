import { useCallback, useState, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(5)
  const [charAllowed, setCharAllowed]= useState(false)
  const[numberAllowed,setNumberAllowed] = useState(false)
  const[passward,setpassward]= useState('')

   const genratepassward= useCallback( ()=>{

   let pass=""
   let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   
    if(numberAllowed) str += "0123456789"
    if(charAllowed)  str += "!@#$%^&*()_+"
   
    for(let i = 0; i < length; i++){

      const char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)  

    }
      setpassward(pass)
   } ,[length, charAllowed, numberAllowed])
   
   useEffect(()=>{
   
    genratepassward()

   },[length, numberAllowed,charAllowed])
    
   
   const copyPasswardToClipboard=()=>{

    window.navigator.clipboard.writeText(passward);
    passwardref.current.select()
   }

    const passwardref=useRef(null) 
    
  return (
    
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800  text-orange-500' >
       
       <h1 className='text-white text-center my-3'>passward generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
             type='text'
             value={passward}
             placeholder='passward'
             readOnly
             className='outline-none w-full py-1 px-3'
             ref={passwardref}
            ></input>
            <button 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
             onClick={copyPasswardToClipboard}
            >copy</button>
        </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
          <input type="range"
           name=""
           id=""
           className='cursor-pointer'
           min={6}
           max={20}
           value={length}
           onChange={(e)=> setLength(e.target.value)}   />
                  <label htmlFor='length'>length:{length}</label>

             </div>

            <div className='flex items-center gap-x-1'>
          <input type="checkbox"
           name=""
           id=""
           defaultChecked={numberAllowed}
            onChange={()=> {
              
              setNumberAllowed((prev)=>!prev)

            }} />
            <label htmlFor="number">Numbers</label>
             </div>

            <div className='flex items-center gap-x-1'>
          <input type="checkbox"
           name=""
           id=""
           defaultChecked={charAllowed}
            onChange={()=> {
              
              setCharAllowed((prev)=>!prev)

            }} />
            <label htmlFor="charecters">Charecters</label>
              </div>
          </div> 
     </div>
      
    
  )
}

export default App
