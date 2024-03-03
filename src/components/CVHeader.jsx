import Location from "../assets/location.svg?react";
import Mail from "../assets/mail.svg?react";
import Call from "../assets/call.svg?react";
import "../styles/CVHeader.css";

export default function CVHeader({ info }) {
  const headerItems = Object.entries(info)
    .filter(([key]) => key !== "name")
    .map(([key, value]) => (
      <CVHeaderItem key={key} type={key} text={value} />
    ));
  return (
    <div className="CVHeader">
      <h1>{info.name}</h1>
      <section className="CVHeaderItems">{headerItems}</section>
    </div>
  );
}

function CVHeaderItem({ type, text }) {
  let svgType;
  switch (type) {
    case "location":
      svgType = <Location />;
      break;
    case "email":
      svgType = <Mail />;
      break;
    case "phone":
      svgType = <Call />;
      break;
    default:
      svgType = null;
      break;
  }
  return (
    <div>
      {text === '' ? null : svgType}
      <p>{text}</p>
    </div>
  );
}
