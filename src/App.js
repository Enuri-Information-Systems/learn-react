import { useEffect, useState } from 'react';
import './App.css';
import RichTextEditor from 'react-rte';
function App() {
  const [value,setValue]= useState(RichTextEditor.createEmptyValue());

  const onChange = (value) => {
    console.log("value",value.toString('html'))
    setValue(value);
   
  };
useEffect(()=>{
  setValue(RichTextEditor.createValueFromString(description,'html'))
},[])
  
  const description = `<b>daruwa</b>`
  return (
    <div className="App">
     
       <RichTextEditor
        value={value}
        onChange={onChange}
        className="editor"
      />

      gttt
    </div>
  );
}

export default App;
