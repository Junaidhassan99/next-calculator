import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";

import { FaBars } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toogleIsDrawerOn } from "../store/route-slice";
import Drawer from "./Drawer";
import NavItems from "./NavItems";

const AppBar: React.FC<{}> = ({ children }) => {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const IsDrawerOnSelector = useAppSelector((state) => state.route.isDrawerOn);
  const routeDispatch = useAppDispatch();

  function drawerToggleHandler() {
    // setIsDrawerOpen((prevState) => !prevState);
    routeDispatch(toogleIsDrawerOn());
  }

  return (
    <div className="app-bar-text-font">
      {IsDrawerOnSelector && (
        <Drawer drawerToggleHandler={drawerToggleHandler} />
      )}
      <div className="app-bar-background-color app-bar-parent">
        <div className="app-bar-title">
          <Link href={"/"}>
            <a className="app-bar-items">Calculator</a>
          </Link>
        </div>

        <div onClick={drawerToggleHandler} className="display-drawer">
          <FaBars className="app-bar-item-not-selected drawer-icon" />
        </div>

        <div className="display-nav">
          <NavItems classContainer="app-bar-actions-container" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(AppBar);
