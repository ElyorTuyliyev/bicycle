import { Link } from "react-router-dom";
import LinkTitleStyle from "./linkTitle.style";

function LinkTitle({ title }) {
  return (
    <LinkTitleStyle>
      <Link className="links">{title}</Link>
    </LinkTitleStyle>
  );
}

export default LinkTitle;
