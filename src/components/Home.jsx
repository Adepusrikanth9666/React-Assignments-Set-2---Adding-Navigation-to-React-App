import React from 'react';
import LocationDisplay from './LocationDisplay';
import  useLocation from "react-router-dom";
class Home extends React.Component{
  render(){
    return(
      <>
      <LocationDisplay />
        <h1>You are home.</h1>
        </>
    )
  }
}
export default Home;
// export default function Home(){
//   return <h1>You are home.</h1>
// }