import React from 'react'

function TrackList({data, genre}) {


  return (
    <section className='table-responsive'>
        
        <table className ="table mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">TITRE</th>
      <th scope="col">GENRE</th>
      <th scope="col">ALBUM</th>
      <th scope="col">DUREE</th>
      <th scope="col">RANK</th>
    </tr>
  </thead>
  <tbody>
    {data.map(item =>{
        return(
            <tr>
      <th scope="row">1</th>
      <td>{item.title}</td>
      <td>{genre}</td>
      <td>album</td>
      <td>{item.rank}</td>
    </tr>
        )
    })}
     
  
  </tbody>
</table>

    </section>
  )
}

export default TrackList