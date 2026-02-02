export function AboutCard({  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="
      rounded-xl
      border
      border-gray-200
      p-6
      bg-white
      shadow-sm
      hover:shadow-md
      hover:scale-110
      transition-all
      duration-500
     ">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {title}
      </h3>

      <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}