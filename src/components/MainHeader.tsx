import React, { useState } from "react";

const MainHeader = () => {
  const isLogged = false;

  const [handleToggle, setHandleToggle] = useState(false);

  return (
    <header className="p-4">
      <div className="flex items-center justify-between">
        <h2>CryptoMemeRawr</h2>
        <nav className="w-[20%] flex items-center gap-4 p-2 bg-[#444] drop-shadow-lg rounded bg-opacity-10 rounded">
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
