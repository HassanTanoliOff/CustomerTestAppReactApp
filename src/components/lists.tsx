import products from "../listofitems.ts";

export function Greet({ name, role }: { name: string; role: string }) {
  return (
    <div>
      <span>
        Hello {name} ,Role:{role}
      </span>
    </div>
  );
}

export default function ListItems() {
  return (
    <div>
      <ol>
        {products.map((product) => (
          <li key={product.id} className="text-xl font-bold underline text-orange-400 mb-4">
            {product.name} , {product.price}
          </li>
        ))}
      </ol>
    </div>
  );
}
