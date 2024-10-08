const Home = () => {
  return (
    <section className="min-h-screen w-full">
      
      <div className="flex items-center justify-between w-[45%] mx-auto">
        <header className="w-[50%] p-4 bg-[#444]">
          <h2>Into crypto, defi, and the power of the blockchain</h2>
          <p>
            This is the place to be to get a ensiteful reads to get better view
            in the crypto network
          </p>
          <a href="/auth">Authenicate yourself</a>
        </header>

        <div className="text-6xl font-bold">🦖</div>
      </div>

      {/* Basic post */}
      <article>
        <h2>Featured Post</h2>

        <div>{/* post */}</div>

        <div>{/* Recent post */}</div>
      </article>

      <div>
        <h2>Shamles plug</h2>
        <div>{/* Wall of other applications */}</div>
      </div>

      {/* Crypto dash + */}
      <div>
        <header className="flex items-center justify-between">
          <span>10:00</span>
          <span>5</span>
          <button>claim</button>
        </header>

        <div>{/* leader boards 1-10 */}</div>
      </div>
    </section>
  );
};

export default Home;
