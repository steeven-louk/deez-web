import { SearchOutlined } from '@material-ui/icons';
import React, {  useState, useEffect } from 'react';


import './styles/search.scss'
import fetchJsonp from 'fetch-jsonp';
import Listes from '../list/Listes';


function Header() {

  const [query, setQuery] = useState([]);
  const [input, setinput] = useState('');

  const searchUrl = `https://api.deezer.com/search?q=${input}&output=jsonp`

  const fetchData = async () =>{
    
    try {
      await fetchJsonp(searchUrl)
      .then(function(response) {
        return response.json()
        
      }).then(function(json) {
      
       console.log('====================================');
       console.log(json.data);
       console.log('====================================');
       setQuery(json.data)
        
       
      }
      )
    } catch (error) {
      console.log('err', error)
    }
  }

  console.log('=====kuyfgh===============================');
  console.log('query',query);
  console.log('====================================');

  useEffect(() => {
   fetchData();
  }, []);

  const searchSubmit = (e) =>{
    e.preventDefault();
       fetchData();
    setinput('')

   
  }
  const handleChange = (e) =>{
    setinput(e.target.value);
    console.log(input);
  }

  return (
    <section className="search-section">
    
      <form  className='form-group' onSubmit={searchSubmit}>
          <input type="text" value={input} onChange={handleChange} name="search" id="search" className='form-control p-3 mt-2 search-input' placeholder='search ...' />
          <button type="submit" className='border-0 bg-primary text-light fw-bold btn-block btn-lg text-uppercase mt-3 d-flex btn__search mx-auto'>Rechercher <SearchOutlined className='btn__icon'/></button>
      </form>

        <Listes data={query}/>
    </section>
  )
}

export default Header