import React, { useEffect, useState } from 'react'
import Card from './Card'



const Newsapp = () => {
  const [search, setSearch] = useState("india")
  const [newsData, setnewsData] = useState (null)
   const API_KEY = "3b05973c7f1c47e8bde69b12f34b221e"

   

   const Newsapp = (event) => {
    // Get the value of the clicked button
    
  };

const getData = async () =>{
  const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apikey=${API_KEY}`)
  const jsonData = await response.json();
  console.log(jsonData.articles);
  setnewsData(jsonData.articles)
}

useEffect(()=>{
  getData()
}, [])

const handleInput =(e) => {
      console.log(e.target.value);
      setSearch(e.target.value)
      
}

const userInput = (event) => {
  // Get the value of the clicked button
  setSearch(event.target.value);
};

  return (
    <div>
      <nav>
            <div className='h1'>
                <h1>Trendy News</h1>
            </div>
            <ul>
                <a href='news'>All News</a>
                <a href='trendy'>Trending</a>

            </ul>
            <div className='searchBar'></div>
                 <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                 <button onClick={getData} >Search</button>

       

      </nav>
      <div>
           <p className='head'>Stay Update With TrendyNews</p>
      </div>
      <div className='categoryBtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
        </div>

        <div>
         {newsData?   <Card data={newsData}/> : null}
        </div>
    </div>
  )
}

export default Newsapp
