import React from 'react'
import Link from 'next/link'

export default function Index({posts}) {
  return (
    <div>
        <ul>
            {
                posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/users/${post.id}`}>

                        <h3>{post.title}</h3>
                        </Link>
                        <p>{post.body}</p>

                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export async function getServerSideProps (context) {
    const {params,req:request,res :response,query} = context
    console.log('context========================================>',context)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(`SSR -> getServerSideProps`) ;
    console.log('Request Info ================-> ', request)
    console.log(`Response =============> `, response)
    console.log('ssr--=-=-=-=-=-',query)
    return {
        props : {
            posts : data
        }
    }
}