import Header from "../../components/memories/21/Header";
import First from "../../components/memories/21/First";
import useHandleWheelScroll from "../../hooks/useHandleWheelScroll";
import Second from "../../components/memories/21/Second";
import Third from "../../components/memories/21/Third";
import useHandleTouchScroll from "../../hooks/useHandleTouchScroll";
import Fourth from "../../components/memories/21/Fourth";
import Fifth from "../../components/memories/21/Fifth";
import Sixth from "../../components/memories/21/Sixth";
import React from "react";


const ClassTwentyOne = () => {

  const {handleTouch} = useHandleTouchScroll()
  const {handleWheel} = useHandleWheelScroll()

  return (
    <div className={"touch-none"} onTouchMove={handleTouch} onWheel={handleWheel}>
      <Header />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
    </div>
  );
}

export default ClassTwentyOne;