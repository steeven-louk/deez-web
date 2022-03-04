//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fetchJsonp from 'fetch-jsonp';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './styles/styles.scss';

function Track() {
  
  const [getTrack, setTrack] = useState([]);
  //const [isPlaying, setIsPlaying] = useState(false)

  const { id } = useParams();
  const trackUrl = `https://api.deezer.com/track/${id}&output=jsonp`;

   
  useEffect(() => {
    fetchTrack();
  }, []);

  const fetchTrack = async () => {
    try {
      await fetchJsonp(trackUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          setTrack(json);
          
        });
    } catch (error) {
      console.log("err", error);
    }
  };


const getTime = (time) => {
  
  let minutes = Math.floor(time / 60);
  let seconds = ("0" + Math.floor(time % 60)).slice(-2);
  return minutes +"min" + ":" + seconds + "s";
};

  return (
    <section className="track-section">
        <div className="container">
        <div class="card bg-dark mb-3">
  <div class="row g-0">
    <div class="col-md-4">
    <div className="card-text text-center fw-bold text-uppercase">
      <h3>{getTrack.album && getTrack.album.title}</h3>
    </div>
      <div className='card-img'>
        <img src={getTrack.album && getTrack.album.cover_big} className="card-img-top img-fluid" alt="..." />
        <span className='point'></span>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">{getTrack.title}</h3>
        <div class="artiste-block">
            <img src={getTrack.artist && getTrack.artist.picture_small} alt="" className="img-artist" />
            <h2 className="fw-bold mx-3">{getTrack.artist && getTrack.artist.name}</h2> <br/>
            
        </div>
        <p class="card-text"> {getTrack.release_date}</p>
        <p class="card-text">{getTime(getTrack.duration)}</p>
      </div>
      <div className="card-footer pt-4 mt-5">
      <audio
        controls AutoPlay
        src={getTrack.preview}>
        
      </audio>
      </div>
    </div>
  </div>
</div>
        </div>
    </section>
  )
}

export default Track
