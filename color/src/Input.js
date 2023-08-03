import React from 'react'

const Input = ({colorvalue,setcolorvalue}) => {
  return (
    <div>

        <form>
       <input type="text"
         autoFocus
         className='input'
         placeholder='ENTER THE COLOR'
         colorvalue={colorvalue}
         onChange={(e)=>{
             setcolorvalue(e.target.value)

         }}
         
       

       
       />

        </form>
    </div>
  )
}

export default Input