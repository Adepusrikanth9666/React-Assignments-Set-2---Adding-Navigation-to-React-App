import React from'react';
// import  useLocation from "react-router-dom";
import { useLocation } from 'react-router-dom'

function HeaderView() {
  const location = useLocation();
  console.log(location.pathname);
  return <div data-testid="location-display">{location.pathname}</div>
}
export default function LocationDisplay(){
  return HeaderView();
//  return <h1 data-testid="location-display">hello</h1>
}