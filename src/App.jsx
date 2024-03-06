import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Card from './component/Card'

const App = () => {

  const raw = [
    { name: "animal" , added : false , artist :"adarsh" , image : "https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg" },
    { name: "valley" , added : false, artist :"22" , image : "https://imgc.allpostersimages.com/img/posters/bohemian-rhapsody_u-L-F9FWY60.jpg" },
    { name: "jungle" , added : false , artist :"8" , image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OkqrlIjlWSr_yZshElNELRHSjVw5Fbvwdg&usqp=CAU" },
    { name: "kite" , added : false, artist :"9" , image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeFEZ9ItVrzTUqMnLg-pr7PN3XBtMGDQ9W3g&usqp=CAU" },
    { name: "mug" , added : false, artist :"11" , image : "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230516103226.jpg" },
    { name: "passion" , added : false , artist :"15" , image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-CBtAvF7InsbrU5bgLPldM3BvbfqpsV3ulQ&usqp=CAU" },
  ]
  const [data , setData] = useState(raw);
  // console.log(data);

  const handleAdd = (indexx) => {
    setData((prev)=>{
      return prev.map((item,index)=>{
        if(index === indexx ) return {...item,added :  !item.added}
        return item
      })
    })
  }
  return (
    <div >
      <div className='h-screen w-full bg-zinc-950 '>
        <Navbar data={data} />
        <div id="center" className='p-8 w-full h-4/5  flex gap-8 my-0 flex-wrap items-center justify-center'>
      
      { data.map((item, index)=>(
        <Card  key={index} data={item} handleAdd={handleAdd} index={index}/>
      )) }
        </div>
      </div>
    </div>
  )
}

export default App
