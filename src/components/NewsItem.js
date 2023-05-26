import React from "react";
const NewsItem=(props)=> {
 
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:"flex",justifyContent:"flex-end",position:"absolute"}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imageUrl ? "https://c.ndtvimg.com/2022-12/3ac6v1m_mars_625x300_17_December_22.jpg"
            : imageUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "190px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btm-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}
export default NewsItem;
