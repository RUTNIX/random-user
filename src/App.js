import React, {useState} from 'react'
import  './App.css'
import {API} from './src'

export default function App() {
  const [val, setVal]=useState('')
  const [data, setData] =useState([])

  const getSearchUserlenght=async(event)=>{
    event.preventDefault()
    let url = API + val

    let req = await fetch(url)
    let resp = await req.json()
    setData(resp.results)
    setVal('')
    console.log(resp.results)

  }


  return (
    <div className='body'>
      <form onSubmit={getSearchUserlenght}>
        <input
          
          className='input'
          placeholder=' Введите число'
          value={val}
          onChange={e=>setVal(e.target.value)}
        />
 
        <button>search</button>

      </form>

      <div className='cards'>
              {data && data.length!==0 ?
                data.map((el, index)=>{
                  return(
                    <div className='card' key={index}>
                      <img className="img" src={el.picture.large} alt='img'/>
                      <p className='gender'> gender: {el.gender}</p>
                      <p className='name' > name: {el.name.title + el.name.first}</p>
                      <p className='age'>age: {el.dob.age}</p>

                    </div>
                  )  
                })
                : <h3> Пока пусто</h3>
              }
      </div>
      

    </div>
  )
}

