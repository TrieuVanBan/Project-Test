import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  let userLoginStore = localStorage.getItem("login");
  let arr = JSON.parse(userLoginStore || "");
  let array = [arr];

  return (
    <div>
      <h3>Thông tin tài khoản</h3>
      {array.map((item: any, index: number) => (
        <ul key={index}>
          <li>{item.id}</li>
          <li>{item.name}</li>
          <li>{item.phone}</li>
          <li>{item.email}</li>
        </ul>
      ))} 
    </div>
  );
};

export default HomePage;
