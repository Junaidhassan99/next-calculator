import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

import { FaBars } from "react-icons/fa";
import Drawer from "./Drawer";

interface ActionType {
  title: string;
  path: string;
}

const actions: ActionType[] = [
  {
    title: "Scientific",
    path: "/scientific",
  },
  {
    title: "BMI",
    path: "/bmi",
  },
  {
    title: "Programmer",
    path: "/programmer",
  },
  {
    title: "Converter",
    path: "/converter",
  },
];

const AppBar: React.FC<{}> = ({ children }) => {
  const [currentlySelected, setCurrentlySelected] = useState("/scientific");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function drawerToggleHandler() {
    setIsDrawerOpen((prevState) => !prevState);
  }

  return (
    <Fragment>
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
          <nav>
            <div className="app-bar-actions-container">
              {actions.map((item) => {
                return (
                  <div key={item.path} className="app-bar-action-item">
                    <Link href={item.path}>
                      <a
                        onClick={() => {
                          setCurrentlySelected(item.path);
                        }}
                        className={`app-bar-items ${
                          item.path === currentlySelected
                            ? "app-bar-item-selected"
                            : "app-bar-item-not-selected"
                        }`}
                      >
                        {item.title}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default AppBar;
