import Link from "next/link";
import React from "react";

export default function Index(props) {
  console.log(props);
  return (
    <div>
      {
          props.products.map(product =>(
              <Link href={`/products/${product.id}`}>
          <h2 key={product.id}>
            {product.id}-{product.title}
          </h2>
        </Link>
          ))
      }
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products?limit=7");
  const data = await res.json();
  console.log(__dirname);

  return {
    props: {
      products: data,
    },
  };
}

// 1. only runs in server side
// 2. Security :: token mitone inja bashe
// 3. Run Node.js Code
// 4. only in pages folder
// 5. return object (props property)
// 6. ?
