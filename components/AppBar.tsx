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
  return (
    <nav>
      <div>Calculator</div>
    </nav>
  );
};

export default AppBar;
