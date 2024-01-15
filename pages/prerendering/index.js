import React from 'react'

export default function Index(props) {
    console.log(props)
  return (
    <>
    <h1>{props.title}</h1>
    <h2>{props.bode}</h2>
    </>
  )
}

export async function getStaticProps () {
    console.log("from get static props")
    return {
        props : {
            title : "تایتل تستی" ,
            body : "بادی تستی"
        }
    }
}
