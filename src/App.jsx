import { useState,useEffect } from "react";
import './App.css';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
                             .then(res=>res.json())
                             .then(data=>setData(data))
                             .catch(err=>console.error(err)); 
    };
    fetchData();
  }, []);
  console.log(data);
  return (
  <div className="App">
    <h1>Welcome to the MaaCart!</h1>
    {!data ? (
      <p className="loading">Loading products…</p>
    ) : (
      <div className="product-grid">           {/* ← add this wrapper */}
        {data.map((item) => (
          <div key={item.id} className="product-card">   {/* ← add class */}
            <img src={item.image} alt={item.title} />
            <div className="card-body">        {/* ← wrap text in this */}
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
)
}