import { useLocation, Link } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="breadcrumb" className="breadcrumbs">
      <Link to="/">Home</Link>
      {crumbs.map((crumb, idx) => {
        const path = "/" + crumbs.slice(0, idx + 1).join("/");
        return (
          <span key={path}>
            {" / "}
            <Link to={path}>{crumb.charAt(0).toUpperCase() + crumb.slice(1)}</Link>
          </span>
        );
      })}
    </nav>
  );
}