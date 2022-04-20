import Link from "next/link";
import { useState } from "react";

import { FaBars } from "react-icons/fa";

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

  const [isDrawerEnabled, setIsDrawerEnabled] = useState(true);

  return (
    <div className="app-bar-background-color app-bar-parent">
      <div className="app-bar-title">
        <Link href={"/"}>
          <a className="app-bar-items">Calculator</a>
        </Link>
      </div>
      {isDrawerEnabled ? (
        <div>
          <FaBars className="app-bar-item-not-selected drawer-icon" />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default AppBar;
