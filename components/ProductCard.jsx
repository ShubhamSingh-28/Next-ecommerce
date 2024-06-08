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

  

  return (
    <div className=" w-full flex rounded-2xl items-center justify-center ">
 
  <Link href={`/products/${items[0]._id}`} className="max-w-sm w-full   rounded-2xl shadow-lg overflow-hidden ">
    <div>
      <img className="object-cover  h-64 w-full" src={items[0].images[0].url} alt="Converse sneakers" />
    </div>
    <div className=" flex justify-between">
    <div className="flex flex-col gap-1 mt-4 px-4">
      <h2 className="text-lg font-semibold ">{items[0].name}</h2>
      <span className="font-normal ">{items[0].brands}</span>
      <span className="font-semibold ">${items[0].price}</span>
    </div>
      <div className=" mt-4 px-4 text-lg">{items[0].category}</div>
    </div>
   

    
  </Link>
</div>

  );
}