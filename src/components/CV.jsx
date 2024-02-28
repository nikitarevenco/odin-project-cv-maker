import { useRef, useEffect } from "react";
import CVBody from "./CVBody";
import CVHeader from "./CVHeader";
import "../styles/CV.css";

export default function CV({ info, sections }) {
  const reference = useRef(0);

  const resizeObserver = useRef(
    new ResizeObserver((entries) => {
      const cvWidth = entries[0].contentRect.width;
      document.body.style.setProperty(
        "--cv-width",
        `${JSON.stringify(cvWidth)}px`,
      );
    }),
  );

  useEffect(() => {
    resizeObserver.current.observe(reference.current);
    const cvWidth = reference.current.offsetWidth;
    document.body.style.setProperty(
      "--cv-width",
      `${JSON.stringify(cvWidth)}px`,
    );
  }, []);

  return (
    <section className="CV" ref={reference}>
      <CVHeader info={info} />
      <CVBody sections={sections} />
    </section>
  );
}
