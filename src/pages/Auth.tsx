import { LoginUser } from "../lib/action";

const Auth = () => {
  const handleLoginReqest = async (e: any) => {
    e.preventDefault();

    try {
      console.log("handle login request");
      const username = e.target[0].value;
      const password = e.target[1].value;

      const gg = await LoginUser({
        username,
        password,
      });

      if (gg.status === "success") {
        console.log("noise");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <main className="w-full min-h-screen p-10">
      <div className="bg-[#272727] p-4 rounded drop-shadow-lg flex items-center justify-center flex-col gap-5"></div>

      <div>
        <h2 className="text-5xl font-bold ">Login Form</h2>
        <form>
          <label htmlFor="username">
            <input type="text" placeholder="username" />
          </label>
          <label htmlFor="password">
            <input type="password" placeholder="password" />
          </label>
          <button>Login</button>
        </form>
      </div>

      <div>
        <h2 className="text-5xl font-bold ">Register Form</h2>
        <form>
          <label htmlFor="username">
            <input type="text" placeholder="username" />
          </label>
          <label htmlFor="email">
            <input type="email" placeholder="email" />
          </label>
          <label htmlFor="password">
            <input type="password" placeholder="password" />
          </label>
          <label htmlFor="metaAddress">
            <input type="text" placeholder="metaAddress" />
          </label>

          <label htmlFor="agreement">
            <input type="checkbox" name="agreement" id="agreement" />
          </label>

          <button>register</button>
        </form>
      </div>

      <div>
        <form
          onSubmit={handleLoginReqest}
          className="w-[40%] p-4 bg-[#444] h-[400px] flex flex-col gap-4 items-center justify-center rounded"
        >
          <input
            type="username"
            placeholder="enter username"
            className="p-2 bg-[#444] text-emerald-500 rounded drop-shadow-lg"
          />
          <input
            type="password"
            placeholder="enter password"
            className="p-2 bg-[#444] text-emerald-500 rounded drop-shadow-lg"
          />
          <button className="bg-[#333] rounded font-bold rounded drop-shadow-lg hover:bg-[firebrick] p-4">
            Enter
          </button>
        </form>
        form
        <p>
          🦂 If you don't an account be sure to{" "}
          <a href="/register" className="underline font-bold">
            register here
          </a>
        </p>
      </div>

      
    </main>
  );
};

export default Auth;
