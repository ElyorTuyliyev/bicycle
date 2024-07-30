import { Link } from "react-router-dom";
import LinkTitleStyle from "./linkTitle.style";

function LinkTitle({ title, path }) {
  return (
    <LinkTitleStyle>
      <Link className="links" to={path}>
        {title}
      </Link>
    </LinkTitleStyle>
  );
}

export default LinkTitle;
