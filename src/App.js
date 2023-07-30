import { Link } from "react-router-dom";
import Profile from "./Profile";
import Calandar from './Calander.jsx'
import Modal from "./Modal";

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
      <Calandar />
      <Modal/>
    </>
  );
};

export default App;
