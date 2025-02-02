import NavigationRails from "../../component/navigation-rail";

const Home = () => {
  return (
    <div className="bg-slate-950 w-full min-h-screen text-white">
      <NavigationRails />
      <main className="ml-[120px] p-2">
        <div className="w-full grid lg:grid-cols-2 gap-4 text-left">
          <div className="rounded-3xl p-10 bg-slate-900 space-y-8 flex flex-col items-start justify-center">
            <h1 className="text-8xl font-bold">Craft CSS </h1>
            <p className="text-lg">
              Join the ultimate multiplayer challenge for web designers and
              developers! Recreate target images using CSS, and the more concise
              your code, the higher your score. Dive into the fun of coding!{" "}
            </p>
            <button className="bg-violet-900 px-10 py-6 rounded-full text-xl">
              {" "}
              Get started
            </button>
          </div>
          <div>
            <video loop autoPlay className="rounded-3xl">
              <source src="/hero_vdo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
