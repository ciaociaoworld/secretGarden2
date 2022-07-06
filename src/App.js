import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import EssayContent from './components/EssayContent';


function App() {
    return (
      <>
        <div className='container'>
            <header className="header">
              <div>
                <Link to='/about'></Link>
              </div>
            </header>

            <main>
              <Routes>
                <Route 
                path='/' 
                element={<EssayContent />}></Route>
              </Routes>
            </main>
        </div>
      </>
    )
}

export default App;
