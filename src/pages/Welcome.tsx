const WelcomePage = () => {
  return (
    <main className="bg-gradient-to-tl from-yellow-700 from-30% via-black via-70% to-blue-100 to-75% w-full min-h-screen">
      {/* hero gala */}

      <div className="p-10 flex flex-col gap-5">
        {/* Hero Sale Pitch */}
        <div className="w-[80%] h-[480px] p-7 mx-auto flex items-center justify-center flex-col gap-10 bg-[#444] rounded drop-shadow-lg ">
          <header className="flex items-center justify-around w-full">
            <div>
              <h2 className="text-5xl mb-5">
                From nothing to something get your adventure started by reading
                from our latest e-boook
              </h2>
              <p className="text-lg text-gray-500 text-shadow-lg">
                Get started with your crypto journey and dont loose more than
                you put in.
              </p>
              <p className="mt-4">
                <span className="text-3xl  underline font-bold">
                  Featuring:{" "}
                </span>
                <ul className="flex flex-col gap-5 mt-5 p-5">
                  <li>Defi 🪙</li>
                  <li>lending / borrow ⚖️</li>
                  <li>market cap 💸</li>
                </ul>
              </p>
            </div>

            <div className="w-[20%] text-8xl bg-[#000] p-4 text-center bg-opacity-10 drop-shadow-lg rounded">
              📓
            </div>
          </header>

          <div className="self-end text-2xl flex items-center gap-5">
            <span className="bg-[#444] p-2">49.99</span>
            <button className="bg-[firebrick] font-bold p-2 rounded drop-shadow-lg ">
              Buy Now
            </button>
          </div>
        </div>

        {/* Hero regust Pitch */}
        <div className="w-[80%] h-[480px] p-7 mx-auto flex items-center justify-center flex-col gap-10 bg-[#444] rounded drop-shadow-lg ">
          <header className="flex flex-col gap-5 items-center">
            <div>
              <h2 className="text-5xl">
                Want to read something new, different, and educational
              </h2>
              <p className="text-md text-gray-500 p-4">
                Login and register to get all the readable content you desire.
              </p>
            </div>

            <div className="w-[30%] flex items-center justify-between">
              <a
                href="/login"
                className="bg-[#333] rounded hover:bg-[#888] font-bold p-4"
              >
                login
              </a>
              <a
                href="/register"
                className="bg-[#333] rounded hover:bg-[#888] font-bold p-4"
              >
                register
              </a>
            </div>
          </header>
        </div>
      </div>
    </main>
  );
};

export default WelcomePage;
