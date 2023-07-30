import React, { useEffect } from 'react';

const Calander = () => {


  useEffect(() => { 
     var days = document.querySelectorAll(".day");
  //   days.forEach(day => {
  //    day.addEventListener("click",(e)=>{
  //     console.log(e.classList);
  //   });
  //   return () => {
  //   day.removeEventListener("click",(e)=>{
  //    console.log(e.target);
  //   })  
  // };
  // })
  for (let i = 0; i < days.length; i++) {
    days[i].addEventListener("click", function() {
      days[i].classList.toggle("open");
    });
  }
},[])
 


  return (
    <div className='text-xl '>
      <h1>Calender</h1>
      <section className='container mx-auto'>
          <div className="container flex justify-between text-3xl font-bold border-2 border-gray-600 font-archivo ">
            <div className='ml-4'>September</div>
            <div className='mr-4'>2023</div>
          </div>
          <div>
            <div className="grid grid-cols-7 my-4 border-2 border-gray-400 grid-gap-4 " >
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="cursor-pointer day"><button type="button">1</button></div>
              <div className="day"><button type="button">2</button></div>
              <div className="day"><button type="button">3</button></div>
              <div className="day"><button type="button">4</button></div>
              <div className="day"><button type="button">5</button></div>
              <div className="day"><button type="button">6</button></div>
              <div className="day"><button type="button">7</button></div>
              <div className="day"><button type="button">8</button></div>
              <div className="day"><button type="button">9</button></div>
              <div className="day"><button type="button">10</button></div>
              <div className="day"><button type="button">11</button></div>
              <div className="day"><button type="button">12</button></div>
              <div className="day"><button type="button">13</button></div>
              <div className="day"><button type="button">14</button></div>
              <div className="day"><button type="button">15</button></div>
              <div className="day"><button type="button">16</button></div>
              <div className="day"><button type="button">17</button></div>
              <div className="day"><button type="button">18</button></div>
              <div className="day"><button type="button">19</button></div>
              <div className="day"><button type="button">20</button></div>
              <div className="day"><button type="button">21</button></div>
              <div className="day"><button type="button">22</button></div>
              <div className="day"><button type="button">23</button></div>
              <div className="day"><button type="button">24</button></div>
              <div className="day"><button type="button">25</button></div>
              <div className="day"><button type="button">26</button></div>
              <div className="day"><button type="button">27</button></div>
              <div className="day"><button type="button">28</button></div>
              <div className="day"><button type="button">29</button></div>
              <div className="day"><button type="button">30</button></div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Calander
