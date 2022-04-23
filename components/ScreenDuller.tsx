import { useAppSelector } from "../store/hooks";

const ScreenDuller = () => {
  const IsDrawerOnSelector = useAppSelector((state) => state.route.isDrawerOn);

  return (
    <div
      className={`screen-duller ${
        !IsDrawerOnSelector && "screen-duller-remove"
      }`}
    ></div>
  );
};

export default ScreenDuller;
