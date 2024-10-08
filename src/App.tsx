import { Outlet } from "react-router-dom";
import MainHeader from "./components/main-header";
import MainFooter from "./components/main-footer";



function App() {



  return (
    <section className="w-full min-h-screen flex flex-col justify-between">
      <MainHeader />

      <div className="flex items-center justify-between">
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>

      <MainFooter />
    </section>
  );
}

export default App;
