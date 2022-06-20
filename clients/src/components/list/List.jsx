import "./list.css";

export default function List({job}){
  return (
    <main>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{job.title}</h4>
            <h5> {job.location.display_name}</h5>
            <p className="card-text">{job.description}</p>
            <a href={job.redirect_url} className="btn btn-primary" > View job </a>
          </div>
        </div>
      </div>
    </main>
  )
}