

const Blog = () => {
  return (
    <section className="min-h-screen w-full">
      <header className="bg-[#444] p-4 text-5xl font-bold">
        <h2>Blog Page</h2>
      </header>
      <div className="flex flex-col justify-between h-full gap-5 p-4">
        {/* Category */}
        <div className="flex items-center justify-around w-[80%] h-[150px] mx-auto p-4 bg-[#111]">
          <a href="#" className="bg-[firebrick] font-bold text-black hover:underline p-4 rounded drop-shadow-lg">defi</a>
          <a href="#" className="bg-[firebrick] font-bold text-black hover:underline p-4 rounded drop-shadow-lg">blockchain</a>
          <a href="#" className="bg-[firebrick] font-bold text-black hover:underline p-4 rounded drop-shadow-lg">game</a>
          <a href="#" className="bg-[firebrick] font-bold text-black hover:underline p-4 rounded drop-shadow-lg">protocol</a>
        </div>

        <div className="flex items-center justify-between gap-5 w-[90%] mx-auto p-4 h-[720px] bg-[#566] rounded drop-shadow-lg">

          <aside className="flex flex-col gap-5 w-[25%]">
            <a
              href="#"
              className="bg-[firebrick] font-bold text-black hover:underline p-4 rounded drop-shadow-lg"
            >
              death
            </a>
            <a
              href="#"
              className="bg-[firebrick] font-bold text-black hover:underline p-4 rounded drop-shadow-lg"
            >
              death
            </a>
            <a
              href="#"
              className="bg-[firebrick] font-bold text-black hover:underline p-4 rounded drop-shadow-lg"
            >
              death
            </a>
            <a
              href="#"
              className="bg-[firebrick] font-bold text-black hover:underline p-4 rounded drop-shadow-lg"
            >
              death
            </a>
            <a
              href="#"
              className="bg-[firebrick] font-bold text-black hover:underline p-4 rounded drop-shadow-lg"
            >
              death
            </a>
            <a
              href="#"
              className="bg-[firebrick] font-bold text-black hover:underline p-4 rounded drop-shadow-lg"
            >
              death
            </a>
          </aside>

          <div className="p-4 h-full flex items-start justify-between flex-col bg-[#624]  rounded drop-shadow-lg">
            <header className="flex items-center justify-between">

              <div>
                <h2 className="text-2xl">death</h2>
                <p>10-6-24</p>
                <p>death</p>
              </div>

              <img src="https://via.placeholder.com/300" alt="blog image" className="w-[300px] h-[300px]" />
              
            </header>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
              facere! Laboriosam mollitia quis corrupti sint fuga similique
              dignissimos nihil cupiditate obcaecati. Facilis ducimus beatae
              quaerat impedit culpa laudantium ipsum ipsa alias voluptatum
              corrupti omnis, autem quae totam inventore, neque consequatur
              officiis? Quo delectus, officiis architecto veniam cum praesentium
              quae odit debitis esse placeat. Qui hic magni repellendus dolorem
              nostrum eos.
            </p>

            <div>
              <a href="#">Read more</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;
