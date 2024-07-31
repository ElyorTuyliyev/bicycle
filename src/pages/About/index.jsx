import { useLocation, useParams } from "react-router-dom";

function About() {
  const location = useLocation();
  const params = useParams();

  console.log(params);
  return (
    <div>
      <h1>Product Info</h1>
      <h2>Product id: </h2>
    </div>
  );
}

export default About;
