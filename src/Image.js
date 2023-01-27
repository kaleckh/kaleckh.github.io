import React, { useEffect, useState } from "react";
import "./App.css";
import { useInView } from "react-intersection-observer";

export default function Image(props) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.7,
  });
  const [cssClass, setCssClass] = useState("card");
  useEffect(() => {
    if (inView) {
      setCssClass("card show");
    }
  }, [inView]);

  return (
    <div>
      <img className={cssClass} ref={ref} src={props.source} alt="" />
    </div>
  );
}
