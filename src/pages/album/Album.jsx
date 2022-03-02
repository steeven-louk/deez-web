import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/styles.scss';
import fetchJsonp from 'fetch-jsonp';
import { useParams } from "react-router-dom";
import TrackList from "../../components/trackList";



function Album() {

  const [getalbum, setAlbum] = useState([]);
 
  const {id} = useParams();
  const albumUrl = `https://api.deezer.com/album/${id}&output=jsonp`;

  useEffect(() => {
  fetchAlbum();
  },[]);
 
  const fetchAlbum = async () =>{
    
    try {
      await fetchJsonp(albumUrl)
      .then(function(response) {
       
        return response.json()
        
      }).then(function(json) {
        setAlbum(json)
       console.log('====================================');
       console.log(json);
       console.log('===================================='); 
       
      }
      )
    } catch (error) {
      console.log('err', error)
    }
  }


 // console.log('track',getalbum.tracks.data);

  return (
    <section className="album-section">
      <div className="container">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={getalbum.cover_medium} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body flex-column">
                <h1 className="card-title text-capitalize fw-bold">{getalbum.title} </h1>
                <div className="card-text d-flex img-artist">
                    <img src='{getalbum.artist.picture_small && getalbum.artist.picture_small}' alt="" />
                    <h3 className="text-capitalize">'k'</h3>
                </div>
                <div className="card-text">
                  <small className="text-muted fw-bold">1 titre - 03 min - {getalbum.release_date} / {getalbum.fans} fans</small>
                </div>
                <div className="card-footer">
                  <a href={getalbum.link} rel='noreferrer' target='_blank' className="btn btn-success">voir l'album</a>
                  
                </div>
              </div>
            </div>
            
        </div>
        
      </div>

        <div className="btn-selection mt-4 d-flex">
            <a href="/" className="btn ecouter text-center round text-uppercase fw-bolder"> <FontAwesomeIcon icon="fa-solid fa-play" className="ico-play"/>écouter</a>
            <FontAwesomeIcon icon="fa-solid fa-heart" className='ico-eye'/>
        </div>
        
        {getalbum.tracks ?  <TrackList data={getalbum.tracks.data}  key={getalbum.id}/> : ('error')}
       
      </div>
    </section>
  );
}

export default Album;
// style="max-width: 540px;
// 