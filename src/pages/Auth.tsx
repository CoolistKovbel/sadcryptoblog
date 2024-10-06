const AuthPage = () => {



  return (
    <section className="w-full min-h-screen flex flex-col justify-around">

      <div className="w-full flex items-center justify-around p-4">

        <div className="w-[40%] p-4 bg-[#445] rounded drop-shadow-lg">
          <h2 className="text-2xl font-bold under uppercase">login</h2>

          <form className="flex flex-col items-center gap-5">
            <label htmlFor="username" className="w-[70%] mx-auto flex items-center justify-between">
              <span className="text-xl underline text-gray-200">username: </span>

              <input type="text" id="username" name="username"
              className="bg-[#444] p-2 text-emerald-500 rounded drop-shadow-lg" />
            </label>

            <label htmlFor="userPassword" className="w-[70%] mx-auto flex items-center justify-between">
              <span className="text-xl underline text-gray-200">password: </span>

              <input type="password" id="userPassword" name="userPassword"
              className="bg-[#444] p-2 text-emerald-500 rounded drop-shadow-lg" />
            </label>

            <button className="bg-[#444] rounded drop-shadow-lg p-3 font-bold uppercase hover:bg-[firebrick]">login</button>
          </form>
        </div>

        <div className="w-[40%] p-4 bg-[#445] rounded drop-shadow-lg">
          <h2 className="text-2xl font-bold under uppercase">register</h2>

          <form className="flex flex-col items-center gap-5">
            <label htmlFor="username" className="w-[70%] mx-auto flex items-center justify-between">
              <span className="text-xl underline text-gray-200">username: </span>
              <input type="text" id="username" name="username"
              className="bg-[#444] p-2 text-emerald-500 rounded drop-shadow-lg" />
            </label>

            <label htmlFor="userEmail" className="w-[70%] mx-auto flex items-center justify-between">
              <span className="text-xl underline text-gray-200">email: </span>
              <input type="email" id="userEmail" name="userEmail"
              className="bg-[#444] p-2 text-emerald-500 rounded drop-shadow-lg" />
            </label>

            <label htmlFor="userAddress" className="w-[70%] mx-auto flex items-center justify-between">
              <span className="text-xl underline text-gray-200">0xAddress: </span>
              <input type="text" id="userAddress" name="userAddress"
              className="bg-[#444] p-2 text-emerald-500 rounded drop-shadow-lg" />
            </label>

            <label htmlFor="userPassword" className="w-[70%] mx-auto flex items-center justify-between">
              <span className="text-xl underline text-gray-200">Password: </span>
              <input type="password" id="userPassword" name="userPassword"
              className="bg-[#444] p-2 text-emerald-500 rounded drop-shadow-lg" />
            </label>

            <label htmlFor="userMetaCheckbox" className="w-[70%] mx-auto flex items-center justify-between">
              <span className="text-xl underline text-gray-200">Connect meta address with account: </span>
              <input
                type="checkbox"
                id="userMetaCheckbox"
                name="userMetaCheckbox"
                className="bg-[#444] p-2 text-emerald-500 rounded drop-shadow-lg"
              />
            </label>

            <button className="bg-[#444] rounded drop-shadow-lg p-3 font-bold uppercase hover:bg-[firebrick]">register</button>
          </form>
        </div>

      </div>

      <div className="w-[80%] text-center mx-auto p-5 flex flex-col gap-5 items-center justify-center">
        <div>
          <h2>
            Need a fujcking account. Download my fucking application for fucking
            free.
          </h2>
          <p>MAKE sure you fucking have a web browser.</p>
          <div className="flex items-center justify-between gap-5">
            <a href="#">Kill yourself. now.</a>
            <a href="#">or download and do it yourself</a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AuthPage;
