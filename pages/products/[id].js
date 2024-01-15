import { useRouter } from "next/router";
import React from "react";

export default function Product({ product }) {
    console.log(product)
    const router = useRouter()

    if (router.isFallback){
        return <h1>FallBack page : Please wait</h1>
    }



  return <div>product title : {product?.title}</div>;
}

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products?limit=7");
  const data = await res.json();

  const paths = data.slice(0,3).map((product) => {
    return {
      params: { id: String(product.id) },
    };
  }) || [];
  console.log(data.slice(0,3))

  return {
    // paths: [
    //   { params: { id: "1" } },
    //   { params: { id: "2" } },
    //   { params: { id: "3" } },
    //   { params: { id: "4" } },
    //   { params: { id: "5" } },
    //   { params: { id: "6" } },
    // ],
    paths,
    fallback: true, // true , false , "blocking"
  };
}

export async function getStaticProps(context) {
  const productID = context.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${productID}`);
console.log('static props1111111111111111111111111111111111111111111111111111')
  const data = await res.json();

  if(!data) {
    return {
        // notFound : true
        redirect : {destination : '/'}
    }
  }

  return {
    props: {
      product: data,
    },
    // notFound : true
    revalidate : 10 // 10 seconds
  };
}
