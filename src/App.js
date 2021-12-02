import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { useState } from 'react';
import { BookLoaderComponent } from './components/Loader/BookLoader';

function App() {
  const [loading, setLoading] = useState(true);
  window.addEventListener("load", (event) => {
    setTimeout(() => { setLoading(false) }, 2500)
  })
  return (
    <div>
      {
        loading ? <div className="d-flex justify-content-center align-items-center min-vh-100">
          <BookLoaderComponent
            background={"transparent"}
            desktopSize={"150px"}

          />
        </div> :
          <div className="App">
            <Home />
          </div>

      }

    </div>
  );
}

export default App;
