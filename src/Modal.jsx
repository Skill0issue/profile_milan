import React,{useEffect, useState} from 'react'


const Modal = () => {

  function ChangeDisplay() {
   const close= document.querySelector("Modal");
   close.style.SetProperty('display','none');
  }

  const [options,setoptions]=useState();

  const data = {
    Events:[
      {name:"option 1",id:1,body:"h1",day:23,month:"sept"},
      {name:"option 2",id:2,body:"h1",day:22,month:"sept"},
      {name:"option 3",id:3,body:"h1",day:24,month:"sept"},
      {name:"option 4",id:4,body:"h1",day:22,month:"sept"},
      {name:"option 5",id:5,body:"h1",day:27,month:"sept"},
      {name:"option 6",id:6,body:"h1",day:22,month:"sept"},
      {name:"option 7",id:7,body:"h1",day:25,month:"sept"},
      {name:"option 8",id:8,body:"h1",day:26,month:"sept"},
      {name:"option 9",id:9,body:"h1",day:29,month:"sept"},
    ],
    Competitions:[
      {name:"option 1",id:1,body:"h1",day:30,month:"sept"},
      {name:"option 2",id:1,body:"h1",day:1,month:"aug"},
      {name:"option 3",id:1,body:"h1",day:2,month:"aug"},
      {name:"option 4",id:1,body:"h1",day:3,month:"aug"},
      {name:"option 5",id:1,body:"h1",day:4,month:"aug"},
      {name:"option 6",id:1,body:"h1",day:5,month:"aug"},
      {name:"option 7",id:1,body:"h1",day:6,month:"aug"},
      {name:"option 8",id:1,body:"h1",day:7,month:"aug"},
      {name:"option 9",id:1,body:"h1",day:8,month:"aug"},
    ],
  }

  
  return (
    <div>
      <div className='Modal'>
       <closeTag type="button" onClick={ChangeDisplay()}>

       </closeTag>
      </div>
    </div>
  )
}

export default Modal
