import { Link, useLocation } from "react-router-dom";

export default function Breadcrubms() {
  const location = useLocation();

  // /help/contact --> help | contact

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "") //crumb is a URL
    .map((crumb) => {
      currentLink += `${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}
