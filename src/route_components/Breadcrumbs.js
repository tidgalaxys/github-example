import React from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

const PureBreadcrumbs = ({ breadcrumbs }) => (
  <div className="breadcrumbs">&nbsp;&nbsp;
    {breadcrumbs.map(({ breadcrumb, match }, index) => (
      <div className="bc" key={match.url}>
        <Link  className="text-success" style={{textDecorationLine: 'none'}} to={match.url || ""}>{breadcrumb}</Link>&nbsp;&nbsp;
        {index < breadcrumbs.length - 1 && ">"}&nbsp;&nbsp;
      </div>
    ))}
  </div>
);

export default withBreadcrumbs()(PureBreadcrumbs);
