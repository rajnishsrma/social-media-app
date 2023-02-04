import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './searchbox.css';


export default function SearchBox(props) {

    const [search, setSearch] = useState([]);

  //  useEffect(()=>{
  //   setSearch([])
  //  },[])
   
      function searchHandler(event){
        // event.preventdefault()
        let searchWord = event;
        let id = (Math.random()*1000).toFixed(0);

        let filtData = props.data.filter((val)=>{      
            return val.name.includes(searchWord);
        })

        console.log("name", filtData)
        setSearch(filtData, filtData[0].id = id)  
    }
//  setSearch([])

  return (
    <div className='s-box-container'>
        <input type='text' id='mysearch' value={search.name} placeholder="search users"  onChange={(e)=> searchHandler(e.target.value)} />

          <div className="search-container">
              { search.length > 0 && (
                  search.map((item)=>{
                    return <div key={item.id} className="search-results"  >
                      <a href='/userprofile'> {item.name} </a>
                      </div>  
                  })
                  )
                
              }
          </div>
        
    </div>
  )
}
