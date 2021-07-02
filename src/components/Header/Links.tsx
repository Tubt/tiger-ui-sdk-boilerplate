import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const Links: React.FC = () => {
    return (
        <>
            <NavLink
                to="/welcome"
                className={cx(styles.Link, "s-welcome-link")}
                activeClassName={styles.LinkActive}
            >
                Welcome
            </NavLink>
            <NavLink to={"/"} className={styles.Link} activeClassName={styles.LinkActive}>
                Basic
            </NavLink>
            <NavLink to={"/pivot"} className={styles.Link} activeClassName={styles.LinkActive} >
                Pivot Table
            </NavLink>
            <NavLink to={"/filters"} className={styles.Link} activeClassName={styles.LinkActive} >
                Filter
            </NavLink>
            <NavLink to={"/pop-and-am"} className={styles.Link} activeClassName={styles.LinkActive} >
                PoP and AM
            </NavLink>
            <NavLink to={"/insightview-and-dashboardview"} className={styles.Link} activeClassName={styles.LinkActive} >
                InsightView
            </NavLink>
            <NavLink to={"/advances"} className={styles.Link} activeClassName={styles.LinkActive} >
                Advances
            </NavLink>
        </>
    );
};

export default Links;
