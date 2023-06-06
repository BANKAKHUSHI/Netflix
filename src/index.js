import React from 'react';
import ReactDOM from 'react-dom';


import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";

/*function ncard(val){
      return(
            <Card imgsrc={val.imgsrc}
                 title={val.title}
                  sname={val.sname}
                 link={val.link}
             />

      );
}*/


ReactDOM.render(
  <>
  <h3 className="heading_style">List of Five webseries</h3>
       { Sdata.map((val,index) =>{
            
            return(
                  <Card
                  key={val.id} 
                  imgsrc={val.imgsrc}
                 title={val.title}
                  sname={val.sname}
                 link={val.link}
             />


            );
       })}
</>

 ,document.getElementById("root")
);




  





