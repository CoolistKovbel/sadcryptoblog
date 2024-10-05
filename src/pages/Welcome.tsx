import HeroGala from "../components/HeroGala";

const WelcomePage = () => {
  

  // const UpdateFeature = async () => {

  // }


  let feature = {
    id: 0,
    title: "From the sad dark nothing to a sadder something",
    imageBanner: "http://placeholder.com/300",
    author: "lyub",
    created: "10-10-24",
    views: 12,
    likes: 3,
    dislikes: 1,
    PingMeowPostRawr: `With all things that have happen so far the markets seem to be
            flourishing with nothing but a sad wave that comes and goes. Where
            does all the happeniness go, can you feel it? With BTC playing near
            the all time high, eth trying to reach its peak, and the rest of the
            markets slowly growing. Would be sad for a catastrophic event to
            accur the who wipe out the whole human race leaving us to wait
            another 100 billion years for evolution to take place again.  `,
  };

  return (
    <main className="bg-gradient-to-tl from-yellow-700 from-30% via-black via-70% to-blue-100 to-75% w-full min-h-screen overflow-auto flex flex-col items-center justify-between">
      {/* hero gala */}

      <HeroGala />

      {/* latest article */}

      <div className="w-full h-[800px] bg-[#444] mt-[30rem] flex flex-col gap-5 justify-between p-10">
       
        <header className="h-[20%]">
          <div className="flex items-center justify-around">
            <h2 className="text-2xl capitalize">{feature.title}</h2>
            <img alt="image of latest article" src={feature.imageBanner} />
          </div>

          <div className="bg-[#223] drop-shadow-lg rounded bold text-xl p-10">
            <h3 className="">Author: {feature.author}</h3>
            <h3 className="">Created: {feature.created}</h3>
          </div>
        </header>

        <div className="p-10 text-gray-300 bg-[#444] h-[50%] flex flex-col items-center justify-center">
          <p className="leading-7 text-shadow-lg text-lg drop-shadow-lg">
           {feature.PingMeowPostRawr}
          </p>

          <div className="flex items-center justify-between drop-shadow-lg gap-5 w-full my-4 ">
            <div className="w-[18%] rounded drop-shadow-lg flex items-center justify-center gap-5 text-yellow-500 bg-[#000] p-4">
              <span>Views: {feature.views}</span>
              <span>Likes: {feature.likes}</span>
              <span>Dislikes: {feature.dislikes}</span>
            </div>

            <a
              href={`/blog/${feature.id}`}
              className="bg-[firebrick] p-3 rounded drop-shadow w-[140px] font-bold text-center"
            >
              Read More
            </a>
          </div>
        </div>

      </div>
    </main>
  );
};

export default WelcomePage;
