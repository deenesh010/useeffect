import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const inc = () => {
    setState(state + 1);
  };

  const [state, setState] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
    }
    getData();
  }, [state]);

  return (
    <div className="App">
      <button className="btn" onClick={inc}>
        {state}
      </button>
      {data.map((element, index) => {
        return (
          <div key={index} className="data">
            <h2>
              {index + 1}){element.firstName}
            </h2>
            <h2>{element.lastName}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
