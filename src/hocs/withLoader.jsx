import React, { useEffect, useState } from "react";
import ROUTES_PATHS from "../routes/paths";
import { Navigate } from "react-router-dom";

export const withSidebar = (Component) => {
  return () => {
    return (
      <section>
        <aside></aside>
        <header></header>
        {Component}
      </section>
    );
  };
};

const withLoader = (Component) => {
  return () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return <div>{loading ? <p>...Loading</p> : <Component />}</div>;
  };
};

export default withLoader;
