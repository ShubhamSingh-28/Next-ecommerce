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

  //console.log(items);

  return (
    <div>
       <Link href={`/products/${items?.[0]._id}`}>
        <div  className="w-80 bg-white shadow rounded-xl">
          <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${items?.[0].images?.[0].url})`}}>

          </div>
          <div className="p-4 flex flex-col items-center">
            <p className="text-gray-400 font-light text-xs text-center">{items?.[0].brands}</p>
            <h1 className="text-gray-800 text-center mt-1">{items?.[0].name}</h1>
            <p className="text-center text-gray-800 mt-1">rs{items?.[0].price}</p>
           
           
              
          </div>
        </div>
            </Link>

    </div>
  );
}