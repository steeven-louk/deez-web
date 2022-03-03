import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.scss";

function Artiste() {
  return (
    <section className="artiste-section">
      <div className="container">
        <div className="card card-artiste">
          <div className="row g-0 d-flex">
            <div className="col-md-4">
              <img
                src="https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg"
                className="img-fluid artist-img"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body flex-column">
                <h1 className="card-title text-capitalize fw-bold"> damso </h1>
                <div className="card-text img-artist">
                  <h4>Nombre d'album : 52</h4>
                  <h4>5125125 fans</h4>
                </div>

                <div className="card-footer shadow">
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-success"
                  >
                    fiche artiste
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="list-song">
          <div className="top-titre">
            <h2 className="text-uppercase fw-bold">top titre</h2>
            <hr className="text-danger" />
          </div>

          <div className="top-table">

            <table className="table table-dark table-hover rounded">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">titre</th>
                  <th scope="col">DUREE</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    titre <br />
                    <span className="text-muted">ceci son r</span>
                  </td>
                  <td>Otto</td>
                  <td className="icon-cell">
                    <FontAwesomeIcon icon="fa-solid fa-play" className="icon"/>
                    <FontAwesomeIcon icon="fa-solid fa-heart" className="icon"/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>


        <div className="list-album mt-4">

          <div className="title-album">
            <h2 className="text-uppercase fw-bold">album</h2>
            <hr className="text-danger" />
          </div>

          <section className="liste_section row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card">
                <div className="card_image">
                  <img
                    src="https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/250x250-000000-80-0-0.jpg"
                    className="card-img-top"
                    alt="{item.title}"
                  />
                  <div className="card_icon">
                    <FontAwesomeIcon icon="fa-solid fa-play" className="icon" />
                    <FontAwesomeIcon
                      icon="fa-solid fa-eye"
                      className="icon eye"
                    />
                    <FontAwesomeIcon
                      icon="fa-solid fa-heart"
                      className="icon eye"
                    />
                  </div>
                </div>

                <div className="card-body flex-column d-flex">
                  <div className="title-container card-title fw-bold text-capitalize d-flex justify-content-between">
                    <h5>album title</h5>
                    <Link to={`/album/$`}> Album</Link>
                  </div>
                  <h5>de damso</h5>

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Artiste;
