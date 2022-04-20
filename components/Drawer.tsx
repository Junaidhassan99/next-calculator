import { FaTimes } from "react-icons/fa";
import NavItems from "./NavItems";

const Drawer: React.FC<{
  drawerToggleHandler: () => void;
}> = ({ children, drawerToggleHandler }) => {
  return (
    <div className={"drawer-menu app-bar-background-color"}>
      <div onClick={drawerToggleHandler}>
        <FaTimes className="app-bar-item-not-selected cancel-drawer-icon" />
      </div>
      <NavItems
        classContainer="drawer-actions-container"
        classItem="drawer-action-item"
        onItemClick={drawerToggleHandler}
      />
    </div>
  );
};

export default Drawer;
