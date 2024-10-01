import React, { useState } from "react";

const MainHeader = () => {
  const isLogged = false;

  const [handleToggle, setHandleToggle] = useState(false);

  return (
    <header className="p-4">
      <div className="flex items-center justify-between w-[50%] mx-auto">
        <h2>CryptoMemeRawr</h2>

        <nav className="w-[20%] flex items-center gap-4 p-2 bg-[#444] drop-shadow-lg rounded bg-opacity-10 rounded relative z-[100]">
          <button
            className="block md:hidden"
            onClick={() => setHandleToggle((prev) => !prev)}
          >
            *️⃣
          </button>

          {handleToggle && (
            <div className="absolute top-10 -right-30 w-[300px] h-[250px] overflow-auto flex flex-col gap-4 bg-[#444] z-[100] p-2">
              <a href="#" className="p-2 bg-[#000] hover:bg-[#555]">
                Home
              </a>
              <a href="#" className="p-2 bg-[#000] hover:bg-[#555]">
                About
              </a>
              <a href="#" className="p-2 bg-[#000] hover:bg-[#555]">
                Contact
              </a>
              <a href="#" className="p-2 bg-[#000] hover:bg-[#555]">
                Blogs
              </a>
            </div>
          )}

          <div className="hidden md:block">
            <a href="#" className="p-2 bg-[#000] hover:bg-[#555]">
              Home
            </a>
            <a href="#" className="p-2 bg-[#000] hover:bg-[#555]">
              About
            </a>
            <a href="#" className="p-2 bg-[#000] hover:bg-[#555]">
              Contact
            </a>
            <a href="#" className="p-2 bg-[#000] hover:bg-[#555]">
              Blogs
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a href="/login" className="p-2 bg-[#111] hover:bg-[#555]">
              Login
            </a>
            <a href="/register" className="p-2 bg-[#111] hover:bg-[#555]">
              Register
            </a>
          </div>
        </nav>
      </div>

      {isLogged && (
        <header className="flex items-center justify-between relative">
          <div className="flex items-center gap-4">
            <h2 className="text-md font-bold underline">lyub12</h2>
            <img src="https://www.placehold.co/32" alt="profile opuc" />
          </div>

          <div onClick={() => setHandleToggle((prev) => !prev)}>↓</div>

          {handleToggle && (
            <nav className="w-[12%] flex items-center flex-col gap-4 p-2 bg-[#444] drop-shadow-lg rounded absolute top-10 right-0">
              <a href="#" className="p-2 bg-[#000] hover:bg-[#555]">
                profile
              </a>
              <a href="#" className="p-2 bg-[#000] hover:bg-[#555]">
                saved
              </a>
              <a href="#" className="p-2 bg-[#000] hover:bg-[#555]">
                messages
              </a>
              <a href="#" className="p-2 bg-[#000] hover:bg-[#555]">
                settings
              </a>
            </nav>
          )}
        </header>
      )}
    </header>
  );
};

export default MainHeader;
