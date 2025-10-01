// components/CategoriesSection.js
export default function Categories() {
 const categories = [
    { name: "Fishes", bg: "bg-gradient-to-r from-blue-400 to-blue-600" },
    { name: "Meats", bg: "bg-gradient-to-r from-red-400 to-red-600" },
    { name: "Honey & Nuts", bg: "bg-gradient-to-r from-green-400 to-green-600" },
    { name: "Kitchen", bg: "bg-gradient-to-r from-orange-400 to-orange-600" },
    { name: "Gadgets", bg: "bg-gradient-to-r from-gray-500 to-gray-700" },
    { name: "Fashion", bg: "bg-gradient-to-r from-pink-400 to-pink-600" },
  ];

  return (
    <section className="py-12! bg-gray-100">
      <div className="container">
        <div className="mx-auto!">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8! border-b-4 border-blue-500 inline-block pb-2!">
          Shop by Category
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`${cat.bg} h-40 rounded-xl flex items-center justify-center text-white text-xl font-semibold shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer`}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
