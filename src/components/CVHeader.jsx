import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";
import { ReactComponent as Call } from "../assets/call.svg";

export default function CVHeader({ information }) {
  const headerItems = Object.entries(information)
    .filter((entry) => entry[0] !== "name")
    .map((entry) => {
      <CVHeaderItem type={entry[0]} text={entry[1]}></CVHeaderItem>;
    });
  return (
    <div>
      <h1>{information.name}</h1>
      {headerItems}
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
  }
  return (
    <div>
      {svgType}
      <p>{text}</p>
    </div>
  );
}
