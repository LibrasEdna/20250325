"use client";
import { useState, useEffect } from "react";
import Main3 from "./components/Main_v3";
export default function Home() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3030/");
      const res = await response.json();
      console.log(res);

      if (res.message) {
        setData(res.message);
        setLoading(false);
      }
    } catch (err) {
      console.log(err, err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full">      
      <Main3 />
      <div>This is the home page</div>
      <div>{loading ? "I am loading" : data}</div>
    </div>
  );
}
