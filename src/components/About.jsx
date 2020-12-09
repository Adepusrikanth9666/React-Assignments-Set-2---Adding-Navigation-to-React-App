import React from 'react';
import LocationDisplay from './LocationDisplay';
// import  useLocation from "react-router-dom";
class About extends React.Component{
  render(){
    return(
      <>
      <LocationDisplay />
      <h1>You are on the about page.</h1>
      </>
      
    )
  }
}
export default About;
// export default function About(){
//   return <h1>You are on the about page.</h1>
// }