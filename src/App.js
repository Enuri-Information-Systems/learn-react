import { useState } from 'react';
import './App.css';
import RichTextEditor from 'react-rte';
function App() {
  const [value,setValue]= useState(RichTextEditor.createEmptyValue());

  const onChange = (value) => {
    console.log("value",value.toString('html'))
    setValue(value);
   
  };
  return (
    <div className="App">
     
       <RichTextEditor
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
