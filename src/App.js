import { useEffect, useState } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Html5QrcodeScanner } from "html5-qrcode";

function App() {
  const [scanResult, setScanResult] = useState(null)


  useEffect(() => {
      const scanner = new Html5QrcodeScanner('reader', {
        qrbox: {
          width: 250,
          height:250
        },
        fps: 5,
      })
    
      scanner.render(success, error);
    
    function success (result) {
      scanner.clear()
      setScanResult(result)
    }
    
    
    function error (err) {
      console.warn(err)
    }
  }, [])

  return (
  
   // <div className="App">
      <div className="content">
        { scanResult
        ? <div>Success: {scanResult}</div>
        : <div id="reader"></div>
        }
      </div>
  //  </div>

  );
}

export default App;
