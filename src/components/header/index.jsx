import React, {  useState, useEffect } from 'react';

import { SearchOutlined } from '@material-ui/icons';
import fetchJsonp from 'fetch-jsonp';
import Listes from '../list';
import './styles/search.css'

 
function HeaderComp() {

  const [query, setQuery] = useState([]);
  const [input, setinput] = useState('rihanna');
  const [filtre, setFiltre] = useState('artist');
  const [loading, setLoading] = useState(true)


// const searchUrl = `https://api.deezer.com/search?q=${input}&order=${filtre}&output=jsonp`

const searchUrl =`https://api.deezer.com/search?q=${filtre}:"${input}"&output=jsonp`



  const fetchData = async () =>{
  
    try {
      await fetchJsonp(searchUrl)
      .then(function(response) {
        return response?.json()
        
      }).then(function(json) {
        setLoading(loading);
       setQuery(json?.data)       
      }
      )
    } catch (error) {
      console.log('err', error)
    }
  }


  useEffect(() => (''), [filtre])

  const handleChange = (e) =>{
    setinput(e.target.value);
  }

  const searchSubmit = async(e) =>{
           
      e.preventDefault();
      await fetchData();
  }


 
  useEffect(() => {
    fetchData();
}, []);


  return (
    <section className="search-section">
    
      <form  className='form-group' onSubmit={(e)=>searchSubmit(e)}>
          <input type="text" value={input} onChange={handleChange} name="search" id="search" className='form-control p-3 mt-2 search-input' placeholder='search ...' />
          <div className="text-center d-flex justify-content-center">
            <button type="submit" className='border-0 bg-danger le text-light fw-bold btn-block btn-lg text-uppercase mt-3 btn__search '>Rechercher <SearchOutlined className='btn__icon'/></button>
            <select className='rounded select-form' value={filtre}  onChange={(e) => setFiltre(e.target.value)}>
              <option value="album" >Album</option>
              <option defaultValue value="artist">Artiste</option>
              <option value="track">Titre</option>
              {/* <option value="RATING_ASC">Popularité</option>
              <option value="RANKING">Rang</option> */}
            </select>
          </div>
      </form>

        <Listes data={query} loading={loading}/>
    </section>
  )
}

export default HeaderComp