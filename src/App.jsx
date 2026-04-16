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
      <h1>Welcome to the MaaCart !</h1>
      {data && (
        data.map((item)=>(
          <div key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
          </div>
        ))
        )}
    </div>
  );
}