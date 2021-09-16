import React from "react";
import "./App.css";
import Customer from "./Customer";

const customer = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "19950109",
    gender: "남자",
    job: "대학생",
  },
  
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "강감찬",
    birthday: "19950109",
    gender: "남자",
    job: "귀주대첩",
  },
  
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "광개토대왕",
    birthday: "19950109",
    gender: "남자",
    job: "고구려전성시대의 왕",
  },
  
];
class App extends React.Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}/>

            )
          })
        }
      </div>
    );
  }
}
export default App;
