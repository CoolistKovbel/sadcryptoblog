import { useState } from "react";

const MainHeader = () => {
  const [stupidDropDown, setStupidDropDown] = useState(false);

  // communicate with server to get client information
  const isLogged = false;
  const isPro = false;

  return (
    <header className="flex flex-col w-full p-4">
      <div className="w-full flex items-center justify-between mb-4">
        <h2 className="text-2xl">CryptoMemeRawr</h2>

        <nav className="flex items-center justify-center gap-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>

      {isLogged && (
        <div className="w-full flex items-center justify-between relative bg-[#444] p-4 rounded drop-shadow-lg">
          <div className="flex items-center justify-center gap-4">
            {/* Prfile */}
            <img src="https://www.placehold.co/32" />
            <span>lyub12</span>
          </div>

          <button
            onClick={() => setStupidDropDown((prev: any) => !prev)}
            className="bg-[#222] hover:bg-[#111] p-1 rounded"
          >
            🦋
          </button>

          {stupidDropDown && (
            <nav className="flex items-center justify-center flex-col gap-4 absolute top-12 right-0 bg-[#222] p-2">
              <div className="relative">
                <span className="aboslute top-0 right-0  bg-[#111] p-1 rounded text-sm">
                  1
                </span>
                <a>Inbox</a>
              </div>
              <a>Profile</a>
              {isPro && <a>create blog</a>}
              <a>logout</a>
            </nav>
          )}
        </div>
      )}
    </header>
  );
};

export default MainHeader;
