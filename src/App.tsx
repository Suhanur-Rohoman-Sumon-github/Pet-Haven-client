import React from "react";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-red-500 underline ">this is my app bro</h1>
        <Button className="bg-green-500">click me</Button>
      </div>
    </div>
  );
};

export default App;
