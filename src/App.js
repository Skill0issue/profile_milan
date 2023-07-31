import { Link } from "react-router-dom";
import Profile from "./Profile";
import Modal from "./Modal";
import ReactCalendar from "./ReactCalendar";


const App = () => {

  return (
    <>
      <nav className="w-screen h-20 text-xl font-bold bg-gray-400 ">
        <ul className="flex float-right my-auto mr-4 ">
          <li className="p-6 mr-4">
            <Link to="/Calender"> Calender</Link>
          </li>
          <li className="p-6 mr-4">
            <Link to="/">Profile</Link>
          </li>
        </ul>
      </nav>

      <Profile/>
      <hr className="my-8 border-0 border-b-4 " /> 
      {/* <Modal/> */}
      <ReactCalendar/>
    </>
  );
};

export default App;
