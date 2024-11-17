const Banner = () => {
  return (
    <section className="flex justify-center items-center bg-[#FFF6E5] py-20 min-h-[700px] font-sans">
      <div className="flex flex-col lg:flex-row items-center max-w-[1200px] w-full gap-16">
        <div className="flex-1 pr-5">
          <h1 className="mt-12 text-4xl lg:text-5xl font-bold text-[#2A1A1F] mb-10 leading-tight">
            The 24/7 catering solution for employees
          </h1>

          <ul className="mt-8 mb-10 space-y-6 text-[#2A1A1F] list-none">
            <li className="flex items-start">✓ Fresh & delicious food - available around the clock</li>
            <li className="flex items-start">✓ Customized product range thanks to AI forecasting</li>
            <li className="flex items-start">✓ Tasting package & 3-month trial period</li>
            <li className="flex items-start">✓ A diverse menu offering both Asian and European flavors</li>
          </ul>

          <button
            className="px-6 py-3 bg-[#F16E21] text-white rounded-full text-lg font-bold mt-12 hover:bg-orange-600 transition"
            onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}
          >
            <a href="#footer">Arrange an initial meeting</a>
          </button>
        </div>

        <div className="flex-1 max-w-[900px] mt-8 lg:mt-0 lg:ml-10 translate-x-6">
          <img
            src="./3.jpg"
            alt="Smart fridge with food"
            className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;




