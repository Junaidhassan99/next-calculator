import { FaTimes } from "react-icons/fa";

const Drawer: React.FC<{
  drawerToggleHandler: () => void;
}> = ({ children, drawerToggleHandler }) => {
  return (
    <div className={"drawer-menu app-bar-background-color"}>
      <div onClick={drawerToggleHandler}>
        <FaTimes className="app-bar-item-not-selected cancel-drawer-icon" />
      </div>
    </div>
  );
};

export default Drawer;
