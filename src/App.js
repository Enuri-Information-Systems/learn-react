import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>PDF test app</h1>
      {/* <button>open the pdf</button> */}
      <div>
        <a href="https://chat-app-pathum.web.app/pdf/test.pdf" target="_blank" rel="noopener noreferrer">
          chat app
        </a>
      </div>
      <div>
        <a href="/pdf/test.pdf" target="_blank" rel="noopener noreferrer">
          sample link
        </a>
      </div>
      <div>
        <a
          href="http://www.africau.edu/images/default/sample.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          hardcoded pdf
        </a>
      </div>
      <div>
        <a
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          hardcoded two
        </a>
      </div>
     
      
    </div>
  );
}

export default App;
