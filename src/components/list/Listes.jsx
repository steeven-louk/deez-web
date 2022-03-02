import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./styles/styles.scss";

const Listes = ({ data }) => {
  return (
    <section className="liste_section row row-cols-1 row-cols-md-4 g-4">
      {data &&
        data.map((item) => (
          <div className="col" key={data.id}>
            <div className="card">
              <div className="card_image">
                <img
                  src={item.album.cover_medium}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card_icon">
                  <FontAwesomeIcon icon="fa-solid fa-play" className='icon' />
                  <FontAwesomeIcon icon="fa-solid fa-eye" className="icon eye" />
                  <FontAwesomeIcon icon="fa-solid fa-heart" className='icon eye'/>

                </div>
              </div>
              <div className="card-body flex-column d-flex">
                <div className="title-container card-title fw-bold text-capitalize d-flex justify-content-between">
                  <h5>{item.title}</h5>
                  <a href="/">album</a>
                </div>
                <span className="card-text">{item.artist.name}</span>
                <span className="card-text">{item.album.title}</span>
                <span className="card-text duration">{item.duration}</span>
              </div>
            </div>
          </div>
        ))}
    </section> 
  );
};

export default Listes;
