import React from'react';
// import  useLocation from "react-router-dom";
import { useLocation } from 'react-router-dom'

function HeaderView() {
  const location = useLocation();
  console.log(location.pathname);
  return <h1 data-testid="location-display">{location.pathname}</h1>
}
export default function LocationDisplay(){
  return HeaderView();
//  return <h1 data-testid="location-display">hello</h1>
}