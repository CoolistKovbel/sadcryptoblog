import { useState } from "react";

interface MainHeaderProps {
  UserSession: any;
}


const MainHeader = ({UserSession}: MainHeaderProps) => {

  const [toggler, setToggler] = useState<boolean>(false);
  const isLoggeed = true;

  return (
    <header className="flex items-center justify-between p-4 border-b-[4px]">

      <div className="transition ease-in-out delay-150 relative w-[250px]">
        <a href="/home">

        <h2 className="text-3xl font-bold absolute -top-5 right-0 z-[100]">
          CryptoRAwrr
        </h2>
        
        <h2 className="text-3xl font-bold translate-x-6 text-[firebrick] absolute -top-5 right-0">CryptoRAwrr</h2>
        <h2 className="text-3xl font-bold translate-y-3 text-[navy] absolute -top-5 right-0">CryptoRAwrr</h2>
        <h2 className="text-3xl font-bold -translate-x-6 text-emerald-400 absolute -top-5 right-0">CryptoRAwrr</h2>

        </a>
      </div>

      <nav className="flex items-center gap-5 p-4">

        <a
          href="/about"
          className="bg-[firebrick] p-2 font-bold text-yellow-500 hover:bg-[#F4FAFC] rounded drop-shadow-lg"
        >
          About
        </a>
        <a
          href="/blog"
          className="bg-[firebrick] p-2 font-bold text-yellow-500 hover:bg-[#F4FAFC] rounded drop-shadow-lg"
        >
          Blog
        </a>
        <a
          href="/shop"
          className="bg-[firebrick] p-2 font-bold text-yellow-500 hover:bg-[#F4FAFC] rounded drop-shadow-lg"
        >
          Shop
        </a>

        {isLoggeed ? (
          <div className="relative flex items-center gap-3">
            <div className="flex items-center w-[150px] bg-[#444] p-3 rounded drop-shadow-lg">
              <h2>Lyub</h2>
              <img src="http://placehold.co/32" />
            </div>

            <div>
              <button
                onClick={() => setToggler((prev) => !prev)}
                className="p-3 bg-[#444] rounded drop-shadow-lg"
              >
                ↓
              </button>

              {toggler && (
                <nav className="absolute top-[60px] right-4 w-[180px] flex items-center flex-col p-3 gap-4 bg-[#555] rounded drop-shadow-lg z-[100]">
                  <a
                    href="#"
                    className="bg-[#444] hover:bg-[#222] p-4 rounded drop-shadow-lg w-full"
                  >
                    profile
                  </a>
                  <a
                    href="#"
                    className="bg-[#444] hover:bg-[#222] p-4 rounded drop-shadow-lg w-full"
                  >
                    inbox
                  </a>
                  <a
                    href="#"
                    className="bg-[#444] hover:bg-[#222] p-4 rounded drop-shadow-lg w-full"
                  >
                    transactions
                  </a>
                  <a
                    href="#"
                    className="bg-[#444] hover:bg-[#222] p-4 rounded drop-shadow-lg w-full"
                  >
                    logout
                  </a>
                </nav>
              )}
            </div>
          </div>
        ) : (
          <a
            href="/auth"
            className="bg-[firebrick] p-2 font-bold text-yellow-500 hover:bg-[#000]"
          >
            Auth
          </a>
        )}
      </nav>
    </header>
  );
};

export default MainHeader;
