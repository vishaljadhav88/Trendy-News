import React from 'react';

const Card = ({ data }) => {
  console.log(data);

 
  
  // Ensure 'data' is an array before using .map()
  if (!Array.isArray(data)) {
    return 
  }

  return (
     <div className="cardContainer">
     {data.map((curItem, index) => {
       if (!curItem.urlToImage) {
         return null;
       } else {
          return (
               <div className="card" key={index}>
                 <img src={curItem.urlToImage} alt="" />
                 <div className="content">
                   <a className="title" onClick={() => window.open(curItem.url)} href='title'>
                     {curItem.title}
                   </a>
                   <p>{curItem.description}</p>
                   <button onClick={() => window.open(curItem.url)}>Read More</button>
                 </div>
               </div>
             );
           }
              
        
     })}
   </div>
 );
};

export default Card;
