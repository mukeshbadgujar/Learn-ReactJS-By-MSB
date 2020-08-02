import React from 'react';
import  Card  from "./Cards";
import Sdata  from "./Sdata";
import Netflix from './Netflix';
import Amazon from './Amazon';
/*function ncard(val) {
  return (
    <Card
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
  );


  <Card
              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
        />
}*/
const favSer = "netflix";

const Favs=() =>{
  if (favSer === "netflix"){
    return <Netflix/>
  }else{
    return <Amazon/>
  }
}
const App = () =>(
    <React.StrictMode>
      <Favs/>


    </React.StrictMode>
);

export default App;