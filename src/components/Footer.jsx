import React from "react";
const today = new Date();
const year = 2022; //today.getYear(); 
console.log(today.getYear());
function Footer() {
    return (<div><footer><h1>Copyright  &copy; {year}</h1></footer></div>)
}

export default Footer;