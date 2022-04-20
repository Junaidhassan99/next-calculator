import Link from "next/link";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setRoute } from "../store/route-slice";

const NavItems: React.FC<{
  classContainer: string;
  classItem?: string;
  onItemClick?: () => void;
}> = ({ children, classContainer, classItem, onItemClick }) => {
  const getRouteData = useAppSelector((state) => state.route);
  const routeDispatch = useAppDispatch();

  return (
    <nav>
      <div className={classContainer}>
        {getRouteData.actions.map((item) => {
          return (
            <div key={item.path} className={`app-bar-action-item ${classItem}`}>
              <Link href={item.path}>
                <a
                  onClick={() => {
                    routeDispatch(setRoute(item.path));

                    if (onItemClick != null) {
                      onItemClick();
                    }
                  }}
                  className={`app-bar-items ${
                    item.path === getRouteData.currentlySelectedRoute
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
  );
};

export default NavItems;
