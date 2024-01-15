import React from "react";

export default function User({user}) {
    console.log(user)
  return (
    <div>
       <h1>{user.title}</h1> 
      <p>{user.body}</p> 
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();
  if(!Object.keys(data).length) {
    return {
        // notFound : true ,
        redirect : {destination : '/'}
    }
  }
  return {
    props: {
      user: data,
    },
  };
}
