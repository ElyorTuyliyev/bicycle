import { Link } from "react-router-dom";
import LinkTitleStyle from "./linkTitle.style";

function LinkTitle({ title }) {
  return (
    <LinkTitleStyle>
      <Link className="links" to="/home">
        {title}
      </Link>
    </LinkTitleStyle>
  );
}

export default LinkTitle;
