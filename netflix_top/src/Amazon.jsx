import React from 'react';
import  Card  from "./Cards";
import Sdata  from "./Sdata";

const Amazon = () =>{
    return(
        <Card
              key={Sdata[0].id}
              imgsrc={Sdata[0].imgsrc}
              title={Sdata[0].title}
              sname={Sdata[0].sname}
              link={Sdata[0].link}
        />
    );
};

export default Amazon;