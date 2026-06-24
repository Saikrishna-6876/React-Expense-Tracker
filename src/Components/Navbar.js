import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';
import { useState } from 'react';

function Navbar(){
    const location = useLocation();
    const [quote, setQuote] = useState(null);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const navigate = useNavigate();

    const fetchQuote = async () => {
  try {
    const response = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random");
    const data = await response.json();
    console.log(data.quote);
    setQuote(data.quote);
    setIsModelOpen(true);
  } catch (error) {
    console.log(error);
  }
};

function handleReset(){
    localStorage.clear();
    navigate("/")
}

    return(
        <nav className="navbar">
            <h1 className="logo">Expense Tracker</h1>
            <ul className = "nav-links">
                <li className={location.pathname === "/"? "active":""}>
                    <Link to = {'/'}>📊Dashboard</Link>
                </li>
                 <li className={location.pathname === "/Transactions"? "active":""}>
                    <Link to = {'/Transactions'}>📄Transactions</Link>
                </li>
                <li>
                    <div className='quote-btn' onClick={fetchQuote}>💡Get quote</div>
                </li>
                 <li>
                    <div className='reset-btn' onClick={()=>handleReset()}>🔄Reset</div>
                </li>
            </ul>
            {
                isModelOpen && (
                    <div className='model-overlay'>
                        <div className='model-content'>
                            <p>{quote}</p>
                            <button className='cls-btn' onClick={()=>setIsModelOpen(false)}>Close</button>
                        </div>
                    </div>
                )
            }
        </nav>
        
    )
}

export default Navbar;