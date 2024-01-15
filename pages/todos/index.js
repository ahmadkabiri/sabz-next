import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <ul>
        {todos.length ? todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/posts/${todo.id}`}>
              <h3>{todo.title}</h3>
            </Link>
            <p>Complete :{todo.completed}</p>
          </li>
        )) : 
        (<h1>not found</h1>)
        
        }
      </ul>
    </div>
  );
}
