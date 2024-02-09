import React from 'react'
import Counter from './Counter'

function User(props) {
    const {name,pic}=props
  let fullname=name
  console.log(props)
  return (
    <div>
          <h1>Hello {fullname} 😁</h1>
      <img src={pic} style={{'borderRadius':50}}/>
      <Counter/>
    </div>
  )
}

export default User
