import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  
  let userLoginStore = localStorage.getItem("login"); 
  let arr = JSON.parse(userLoginStore || '')
  const array = Object.values(arr);
  console.log(array);

  return (
    <div>
      <h3>Thông tin tài khoản</h3>
      <ul>
        {array.map((item:any, index:number)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage