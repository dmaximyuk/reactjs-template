import "./App.sass";

import { type FC } from "react";

import { Outlet } from "react-router-dom";

export const App: FC = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
};
