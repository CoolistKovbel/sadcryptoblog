
const MainFooter = () => {
  return (
    <footer className="flex items-center justify-between bg-[#334] p-5">
      <div className="w-[30%] p-4">
        <header>
          <h2 className="text-3xl mb-3">CryptoMemeRawr</h2>
          <p className="text-gray-500">
            Your place to get your latest crypto news or share your reactions
            for what you see
          </p>
        </header>
        <div className="flex items-center justify-around w-full p-5 mx-auto">
          <a
            href="#"
            className="bg-[#444] hover:bg-[#222] p-4 rounded drop-shadow-lg"
          >
            twitter
          </a>
          <a
            href="#"
            className="bg-[#444] hover:bg-[#222] p-4 rounded drop-shadow-lg"
          >
            youtube
          </a>
          <a
            href="#"
            className="bg-[#444] hover:bg-[#222] p-4 rounded drop-shadow-lg"
          >
            pintrist
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 bg-[#000] p-2 rounded drop-shadow-lg">
        <h3 className="text-xl font-bold">Link:</h3>
        <a
          href="#"
          className="bg-[#444] hover:bg-[#222] p-4 rounded drop-shadow-lg w-full text-center"
        >
          About
        </a>
        <a
          href="#"
          className="bg-[#444] hover:bg-[#222] p-4 rounded drop-shadow-lg w-full text-center"
        >
          Shop
        </a>
        <a
          href="/auth"
          className="bg-[#444] hover:bg-[#222] p-4 rounded drop-shadow-lg w-full text-center"
        >
          Athenticate
        </a>
      </div>
    </footer>
  );
};

export default MainFooter;
