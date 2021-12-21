import React,{useEffect,useState} from 'react'

export default function Mario() {
    const [name, setName] = useState();
    useEffect(() => {
        const friends = ["Mario", "Luigi", "Princess"];
        const item = friends[Math.floor(Math.random() * friends.length)];
        console.log("Mario calling...",item);
      setName(item);
    }, []);
    return (
        <div>
            <h1>Mario {name}</h1>
        </div>
    )
}
