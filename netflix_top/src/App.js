import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";
import SlotMachine from "./SlotMachine";
import CounterIncUseState from "./CounterIncUseState";
import InputName from "./InputName";
import MultipleFormInput from "./MultipleFormInput";
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

/*const Favs=() =>{
  if (favSer === "netflix"){
    return <Netflix/>
  }else{
    return <Amazon/>
  }
}*/

const App = () => (
  <React.StrictMode>
    {/*<Favs/>*/} {favSer === "netflix" ? <Netflix /> : <Amazon />}
    <div>
      <h1 className="text-center">
        🎰 Welcome To
        <span style={{ fontWeight: "bolder" }}> Slot machine Game</span>
        🎰
      </h1>
      <SlotMachine x="😃" y="😃" z="😃" />
      <SlotMachine x="😆" y="😃" z="😃" />
      <SlotMachine x="😃" y="😃" z="😃" />
    </div>
    <div>
      <CounterIncUseState />
    </div>
    <div>
      <InputName />
    </div>
    <div>
      <MultipleFormInput />
    </div>
  </React.StrictMode>
);

export default App;
