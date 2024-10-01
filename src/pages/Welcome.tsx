import HeroGala from "../components/heroGala";

const WelcomePage = () => {
  return (
    <main className="bg-gradient-to-tl from-yellow-700 from-30% via-black via-70% to-blue-100 to-75% w-full min-h-screen">
      {/* hero gala */}

      <HeroGala />

      {/* latest article */}
      <div className="w-full h-[500px] bg-[#444] p-4 mt-[30rem]">
        <header>
          <h2>From the sad dark nothing to a sadder something</h2>
          <h3>Author: Lyub</h3>
          <h3>created: 10-10-24</h3>
        </header>

        <div>
          <p>
            With all things that have happen so far the markets seem to be
            flourishing with nothing but a sad wave that comes and goes. Where
            does all the happeniness go, can you feel it? With BTC playing near
            the all time high, eth trying to reach its peak, and the rest of the
            markets slowly growing. Would be sad for a catastrophic event to
            accur the who wipe out the whole human race leaving us to wait
            another 100 billion years for evolution to take place again.
          </p>

          <div>
            <div>
              <span>views: 10</span>
              <span>likes: 11</span>
              <span>dislikes: 10</span>
            </div>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WelcomePage;
