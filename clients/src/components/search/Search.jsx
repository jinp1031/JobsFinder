import { useEffect, useRef, useState } from "react";
import "./search.css";
import axios from "axios";
import List from "../list/List";

export default function Search(){
  const title = useRef();
  const where = useRef();
  const [jobs, setJobs] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.get(`/all`,
      {params: {
        category:title.current.value,
        location: where.current.value}});
      setJobs(res.data.results);

    }catch(err){
      console.log(err)
    }
  }

  // useEffect(()=>{
  //   const getAll = async () => {
  //     const res = await axios.get("/all");
  //     setJobs(res.data.results);
  //   }
  //   getAll();
  // },[jobs])

console.log(jobs)

  return (
    <header className="searchHeader">
      <div className="container">
        <h1>You are hired!</h1>
        <h2>Find your job today</h2>
        <form className="searchForm" onSubmit={submitHandler}>
          <input
          type="text"
          className="form-control"
          placeholder="Job Title"
          ref={title}
          ></input>
          <input
          type="text"
          className="form-control"
          placeholder="Location"
          ref={where}
          ></input>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
      {jobs.map(job => (
        <List
        key={job.adref}
        job={job}/>
      ) )}
    </header>
  )
}