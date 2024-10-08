import { Outlet } from "react-router-dom";
import MainHeader from "./components/main-header";
import MainFooter from "./components/main-footer";
import { useStore } from "./store/store";


type UserSession = { }


function App() {

  const UserSession: UserSession = []

  // Set user session
  
  const {setLocalStorage} =  useStore()
  const getSession  = async ( ) => {
    await setLocalStorage()
  }



  return (
    <section className="w-full min-h-screen flex flex-col justify-between">
      <MainHeader UserSession={UserSession} />

      <button onClick={getSession}>get session</button>

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
