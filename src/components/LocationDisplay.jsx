import React from'react';
import  useLocation from "react-router-dom";
function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    console.log(location);
  }, [location]);
}
export default function LocationDisplay(){
  usePageViews();
 return <h1>You are home.</h1>
}