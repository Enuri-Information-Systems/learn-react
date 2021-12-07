import React, { useEffect, useState } from "react";

export default function PDFHistory() {
  const [name, setName] = useState();
  useEffect(() => {
    const friends = ["Homer", "Marge", "Lisa", "Bart"];
    const item = friends[Math.floor(Math.random() * friends.length)];
    setName(item);
  }, []);
  return (
    <div>
      <h1>PDF History {name}</h1>
    </div>
  );
}
