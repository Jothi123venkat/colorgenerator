import React from 'react'

const Square = ({colorvalue}) => {
  return (
    <section
      className='square'
      style={{backgroundColor:colorvalue}}
    >
        
        <p> {colorvalue ? colorvalue : "EMPTY VALUE"}</p>

    </section>
  )
}

export default Square