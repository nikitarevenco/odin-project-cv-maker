import { useState, useRef, useEffect } from "react";
import CVBody from "./CVBody";
import CVHeader from "./CVHeader";
import "../styles/CV.css";

export default function CV({ info, sections }) {
  const [cvWidth, setCvWidth] = useState();
  document.body.style.setProperty("--cv-width", JSON.stringify(cvWidth));
  const reference = useRef(0);

  const resizeObserver = useRef(
    new ResizeObserver((entries) => {
      setCvWidth(entries[0].contentRect.width);
    }),
  );

  useEffect(() => {
    resizeObserver.current.observe(reference.current);
    setCvWidth(reference.current.offsetWidth);
  }, []);

  return (
    <section className="CV" ref={reference}>
      <CVHeader info={info} />
      <CVBody sections={sections} />
    </section>
  );
}
