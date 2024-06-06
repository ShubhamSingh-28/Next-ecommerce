import Link from "next/link";


export default function ProductCard({ items }) {
  //console.log(items);
  if (!items || items.length === 0) {
    return (<div><div className="flex flex-col gap-4 w-52">
    <div className="skeleton h-32 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div></div>
    )
  }

  console.log(items);

  return (
    <div className=" w-full flex items-center justify-center bg-gray-200 dark:bg-gray-800">
 
  <Link href={`products/${items[0]._id}`} className="max-w-sm w-full  bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
    <div>
      <img className="object-cover h-64 w-full" src={items[0].images[0].url} alt="Converse sneakers" />
    </div>

    <div className="flex flex-col gap-1 mt-4 px-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">{items[0].name}</h2>
      <span className="font-normal text-gray-600 dark:text-gray-300">{items[0].brands}</span>
      <span className="font-semibold text-gray-800 dark:text-gray-50">${items[0].price}</span>
    </div>

    
  </Link>
</div>

  );
}