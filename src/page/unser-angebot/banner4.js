import React from "react";

const products = [
  { name: "Aubegine nach Yuxiang art", img: "./95.png", tag: "vegan" },
  { name: "Zartes Rindfleisch mit Peperoni", img: "./81.png", tag: "main" },
  {
    name: "Zartes Rindfleisch mit Gemüse und schwarzem Pfeffer",
    img: "./90.png",
    tag: "main",
  },
  { name: "Gefüllte Taschen mit Schweinefleisch", img: "./84.png", tag: "vegetarian" },
  { name: "Rindrippen-Eintopf mit Kartoffeln", img: "./91.png", tag: "main" },
  { name: "Spaghetti Bolognese", img: "./86.png", tag: "vegetarian" },
  { name: "Chili Con Carne", img: "./87.png", tag: "main" },
  { name: "Schweinebauch mit Paprika gebraten", img: "./88.png", tag: "main" },
  { name: "Zartes Lammfleisch mit Kreuzkümmel gebraten", img: "./89.png", tag: "snack" },
];

const ProductList = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-sans text-center text-black-500 mb-6 ">
        We love food.
        <br />
        Discover a small selection of our diverse product range.
      </h1>
      <div className="flex">
        {/* Filter Sidebar */}
        <aside className="w-1/4 pr-8">
          <h2 className="text-lg font-sans text-orange-400 mb-4">
            Filter by:
          </h2>

          <div className="mb-6">
            <h3 className="text-sm font-sans text-gray-700 mb-2">
              INGREDIENTS
            </h3>
            <button className="block border-2 w-[150px] hover:bg-orange-400 hover:text-gray-50 h-[40px] border-orange-400 mb-2 text-gray-500 rounded-full filter-button">
              🌱 Vegan
            </button>
            <button className="block border-2 w-[150px] h-[40px] border-orange-400 mb-2 text-gray-500 rounded-full filter-button">
              🍖 Meat Dish
            </button>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">KIND</h3>
            <button className="block border-2 w-[150px] hover:bg-orange-400 hover:text-gray-50 h-[40px] border-orange-400 mb-2 text-gray-500 rounded-full filter-button">
              Chinese food
            </button>
            <button className="block border-2 w-[150px] h-[40px] border-orange-400 mb-2 text-gray-500 rounded-full filter-button">
              European food
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-3/4">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={product.img}
                alt={product.name}
                className="rounded-lg object-cover w-full h-48"
              />
              <div className="p-4">
                <p className="text-lg font-medium text-center text-purple-900">
                  {product.name}
                </p>
              </div>
              {product.tag && (
                <span className="product-tag">
                  {product.tag === "vegan" ? "🌱" : "🍖"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
