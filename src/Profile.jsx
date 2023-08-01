import React, { useState } from 'react'
import Multiselect from "multiselect-react-dropdown";

const Profile = () => {
    // options Data set import from the backend 
  
    const options = [
      {name:"option 1",id:1},
      {name:"option 2",id:2},
      {name:"option 3",id:3},
      {name:"option 4",id:4},
      {name:"option 5",id:5},
      {name:"option 6",id:6},
      {name:"option 7",id:7},
      {name:"option 8",id:8},
      {name:"option 9",id:9},
    ];
  
    //User Details Import from Backend
  
    const [User, setUser] = useState({
      name: 'Nihar Kartikeya',
      email: 'ep22btech11005@iith.ac.in',
      tel: '',
      block: '-1',
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


    const handleEventsSelect = (selectedList, selectedItem) => {
      setUser((prevUser) => ({ ...prevUser, events: selectedList }));
    };
  
    const handleEventsRemove = (selectedList, removedItem) => {
      setUser((prevUser) => ({ ...prevUser, events: selectedList }));
    };
  
    const handleCompetitionsSelect = (selectedList, selectedItem) => {
      setUser((prevUser) => ({ ...prevUser, competitions: selectedList }));
    };
  
    const handleCompetitionsRemove = (selectedList, removedItem) => {
      setUser((prevUser) => ({ ...prevUser, competitions: selectedList }));
    };
  
    // Upon submitting the form     
  
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!validateName(User.name)) {
          alert('Please enter a valid name.');
          return;
        }
    
        if (!validateEmail(User.email)) {
          alert('Please enter a valid email address.');
          return;
        }
    
        if (!validatePhoneNumber(User.tel)) {
          alert('Please provide a valid phone number.');
          return;
        }
    
        if (User.block === '-1') {
          alert('Please select a block.');
          return;
        }
    
        if (User.competitions === undefined || User.events === undefined) {
          alert('Please choose at least one option from Events & Competitions.');
          return;
        }
    
        // Form validation passed, proceed with form submission

        User.events.sort(sortByOptionId);
        User.competitions.sort(sortByOptionId);
        console.log(User);
      };

      const sortByOptionId = (option1, option2) => {
        return option1.id - option2.id;
      };
    
      const validateName = (name) => {
        return /^[A-Za-z\s]+$/.test(name);
      };
    
      const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
      };
    
      const validatePhoneNumber = (tel) => {
        return /^[0-9]{10}$/.test(tel);
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
    <div className="container">
      <h1 className="p-8 text-xl font-bold uppercase ">Profile Details</h1>
      <form onSubmit={handleSubmit} name="myForm">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="inputborder"
            onChange={handleChange}
            value={User.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="Email"
            id="Email"
            className="inputborder"
            value={User.email}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="tel" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            name="tel"
            id="tel"
            className="inputborder"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
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
        </div>

      <div className="container flex w-full gap-4 basis-1/2 justify-evenly">
      <div className="w-1/3">
        <Multiselect
          name="events"
          id="events"
          isObject={true}
          placeholder="Select Events"
          options={options}
          onSelect={handleEventsSelect}
          onRemove={handleEventsRemove}
          displayValue="name"
          showCheckbox
          className="border-gray-500 inputborder"
          showArrow
        />
      </div>
      <div className="w-1/3">
        <Multiselect
          name="competitions"
          id="competitions"
          isObject={true}
          placeholder="Select Competitons"
          options={options}
          onSelect={handleCompetitionsSelect}
          onRemove={handleCompetitionsRemove}
          displayValue="name"
          showCheckbox
          className="border-gray-500 inputborder"
          showArrow
        />
      </div>
            </div>
            <button type="submit" onSubmit={handleSubmit}>Submit</button>
    </form>
  </div>
  );
}

export default Profile



