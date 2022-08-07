import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <div>
            <ul className="text-sm flex">
            {breadcrumbs.map(({ breadcrumb, match }, index) => (
                <li className="flex pl-2" key={match.url}>
                    <Link to={match.url || "/"}>{breadcrumb}</Link>
                    {index < breadcrumbs.length - 1 && `  /  `  }
                </li>
            ))}
            </ul>
        </div>
    );
};

export default Breadcrumbs;
