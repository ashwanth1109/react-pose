import React, { useState, useEffect } from "react";
import posed from "react-pose";
import styled from "styled-components";

const boxProps = {
  hidden: {
    opacity: 0.8,
    scaleY: 2,
    transition: {
      opacity: {
        ease: "easeOut",
        duration: 500
      },
      default: {
        type: "spring",
        duration: 500
      }
    }
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      opacity: {
        ease: "easeOut",
        duration: 500
      },
      default: {
        type: "spring",
        duration: 500
      }
    }
  }
};

const StyledBox = styled(posed.div(boxProps))`
  width: 200px;
  height: 200px;
  background-color: #ed5336;
`;

const s = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
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
    <div style={s.container}>
      <StyledBox pose={isVisible ? "visible" : "hidden"} />
    </div>
  );
};

export default Index;
