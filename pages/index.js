import React, { useState, useEffect } from "react";
import posed from "react-pose";

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

const s = {
  box: {
    width: "200px",
    height: "200px",
    backgroundColor: "#ed5336"
  }
};

const Index = () => {
  const [isVisible, setVisibility] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibility(isVisible => !isVisible);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <Box style={s.box} pose={isVisible ? "visible" : "hidden"} />
    </div>
  );
};

export default Index;
