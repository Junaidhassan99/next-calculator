import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

import { FaBars } from "react-icons/fa";
import Drawer from "./Drawer";
import NavItems from "./NavItems";

const AppBar: React.FC<{}> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function drawerToggleHandler() {
    setIsDrawerOpen((prevState) => !prevState);
  }

  return (
    <div className="app-bar-text-font">
      {isDrawerOpen && <Drawer drawerToggleHandler={drawerToggleHandler} />}
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

export default AppBar;
