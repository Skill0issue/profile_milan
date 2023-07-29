import React, { useState } from 'react'
import Multiselect from "multiselect-react-dropdown";

const Profile = () => {
    const [Events, setEvents] = useState();
    const [Competitions, setCompetitions] = useState();

    // options Data set import from the backend 
  
    const [options, setOptions] = useState([
      "option 1",
      "option 2",
      "option 3",
      "option 4",
      "option 5",
      "option 6",
      "option 7",
      "option 8",
      "option 9",
    ]);
  
    //User Details Import from Backend
  
    const [User, setUser] = useState({
      name: "Nihar Kartikeya",
      email: "ep22btech11005@iith.ac.in",
      tel: "",
      block: "",
      events: [],
      competitions: [],
    });
  
    // Handling selections/Changes in the Form
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser((prev) => {
        return { ...prev, [name]: value };
      });
    };
  
    // Upon submitting the form
  
    const handleSubmit = (e) => {
      User.events = Events;
      User.competitions = Competitions;
      console.log(User);
      e.preventDefault();
  
      if (User.name === "") {
        alert("Please provide your name!");
        document.myForm.name.focus();
        return false;
      }
      if (User.tel === "" || isNaN(User.tel) || User.tel.length !== 10) {
        alert('Please provide your phone number in the format "xxxxxxxxxx" ');
        document.myForm.tel.focus();
        return false;
      }
      if (document.myForm.block.value === "-1") {
        alert("Please provide your Block Name!");
        return false;
      }
      if (User.competitions === undefined || User.events === undefined) {
        alert("It is required you choose atleast one option from Events & Competitions");
        return false
      }
      return true;
    };
  
    // fetching data
  
    // useEffect(() => {
    //   const getData = async () => {
    //     const getname = [];
    //     const reqData = await fetch("");
    //     const resData = await reqData.json();
  
    //     for (let i = 0; i < resData.length; i++) {
    //       getname.push(resData[i].name);
    //     }
    //     setOptions(getname);
    //   };
    // }, []);
  return (
    <div>
       <div>
        <div>
          <h1 className="p-8 text-xl font-bold uppercase "> Profile Details</h1>
          <form
            className="container mx-auto"
            onSubmit={handleSubmit}
            name="myForm"
          >
            <div className="w-screen">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-1/4 inputborder"
                onChange={handleChange}
                value={User.name}
              />
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="text"
                name="Email"
                id="Email"
                className="w-1/4 inputborder"
                value={User.email}
                disabled
              />
            </div>
            <label htmlFor="tel" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              className="w-1/4 inputborder"
              onChange={handleChange}
            />
            <label htmlFor="block" className="form-label">
              Block
            </label>
            <select
              name="block"
              id="block"
              className="inputborder"
              onChange={handleChange}
            >
              <option value="-1" defaultChecked>
                Select Below
              </option>
              <option value="A">Aryabhatha</option>
              <option value="B1">Bhabha</option>
              <option value="B2">Bhaskhara</option>
            </select>
            <div className="container flex w-screen gap-4 basis-1/2 justify-evenly">
              <div className="w-1/3">
                <Multiselect
                  name="events"
                  id="events"
                  isObject={false}
                  placeholder="Select Events"
                  options={options} // Options to display in the dropdown
                  onSelect={setEvents}
                  onRemove={setEvents}
                  displayValue="name" // Property name to display in the dropdown options
                  showCheckbox
                  className="border-gray-500 inputborder"
                  showArrow
                  style={{
                    multiselectContainer: { width: "100%", height: "auto" },
                    optionContainer: { border: "none" },
                    chips: { background: "red" },
                    searchBox: {
                      border: "2px",
                      borderBottom: "1px solid blue",
                      borderRadius: "0px",
                    },
                  }}
                />
              </div>
              <div className="w-1/3">
                <Multiselect
                  name="competitions"
                  id="competitions"
                  isObject={false}
                  placeholder="Select Competitons"
                  options={options} // Options to display in the dropdown
                  onSelect={setCompetitions}
                  onRemove={setCompetitions}
                  displayValue="name" // Property name to display in the dropdown options
                  showCheckbox
                  className="border-gray-500 inputborder"
                  showArrow
                  style={{
                    multiselectContainer: { width: "100%", height: "auto" },
                    optionContainer: { border: "none" },
                    chips: { background: "red" },
                    searchBox: {
                      border: "2px",
                      borderBottom: "1px solid blue",
                      borderRadius: "0px",
                    },
                  }}
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
