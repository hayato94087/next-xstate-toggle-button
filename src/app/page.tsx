import { ToggleButton } from "@/components/toggle-button";
import { type FC } from "react";

const Home: FC = () => {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <ToggleButton />
        </div>
      </div>
    </main>
  );
};

export default Home;