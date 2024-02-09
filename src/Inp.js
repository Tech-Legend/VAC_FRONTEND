import React, { useState } from 'react'

const Inp = () => {
    const [data,setData] = useState('')
  return (
    <div>
      <input type='text' onChange={(event)=>{
        setData(event.target.value)
      }}/>
      {data}
    </div>
  )
}

export default Inp
