import config from "../index.json";

const Hero = () => {
  const hero = config.hero;

  return (
    <section className="h-screen bg-white overflow-x-hidden">
      <div className="px-8 lg:px-32 flex flex-col justify-center align-between">
        <h1 className="text-6xl lg:text-8xl mt-64 font-bold tracking-wide">
          Hi, my name is  
          <span className="ml-3 font-bold whitespace-nowrap bg-black bg-clip-text text-orange-800">
            {hero.name}
          </span>
        </h1>
        <h1 className="text-4xl font-bold tracking-wide mt-4">{hero.subtitle}</h1>
        <a href="#About" className="text-1xl font-bold p-0.5 mt-6 w-32 border-2 border-black">
          <div className="bg-white align-middle">
            <span className="block text-center py-0.5 px-2 font-semibold bg-black bg-clip-text text-transparent text-orange-700">
              Know more
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;