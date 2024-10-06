import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen w-full">
      <header className="bg-[#444] p-4 text-5xl font-bold">
        <h2>home Page</h2>
      </header>

      <div>
        <h2>Welcime to hell</h2>
        <p>
          The only place where you will never find the peace you seek and all
          your moments disturb. Dont try, nobody will hear you.
        </p>
        <a href="/auth">Sign in</a>
      </div>
    </section>
  );
};

export default Home;
