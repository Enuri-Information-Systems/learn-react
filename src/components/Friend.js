import React,{useEffect,useState} from 'react'

export default function Friend() {
    const [name,setName] = useState()
    useEffect(() => {
        const friends = ['Ross','Monica','Joey','Chandler'];
        const item = friends[Math.floor(Math.random()*friends.length)];
        console.log("Friends calling...",item);
       setName(item)

    }, [])
    return (
        <div>
               <h1>The friend {name}</h1>
        </div>
    )
}
