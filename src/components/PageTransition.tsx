
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const location = useLocation();

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage("fadeOut");
    }
  }, [children, displayChildren, setDisplayChildren]);

  const onAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setDisplayChildren(children);
      setTransitionStage("fadeIn");
    }
  };

  useEffect(() => {
    setTransitionStage("fadeIn");
  }, [location]);

  return (
    <div
      className={`min-h-screen pt-24 pb-16 ${
        transitionStage === "fadeIn" ? "animate-fade-in" : "animate-fade-out"
      }`}
      onAnimationEnd={onAnimationEnd}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
