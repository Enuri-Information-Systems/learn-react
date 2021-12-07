import React,{useEffect,useState} from 'react'

export default function Ratios() {
    const [name,setName] = useState()
    useEffect(() => {
       const friends = ['Ross','Monica','Joey','Chandler'];
       const item = friends[Math.floor(Math.random()*friends.length)];
       setName(item)

    }, [])
    return (
        <div>
               <h1>Ratios {name}</h1>
        </div>
    )
}
