import { useState } from "react";

export const AddStudent = () => {
      const [form,setForm] = useState([]);
      const handleChenge =(e)=>{
           const {name,value} = e.target;
           setForm({
               ...form,
               [name]: value,
           })
      }
  //console.log(form);
  const handleSubmit=(e)=>{
      e.preventDefault();
      const payload=form;
      fetch("http://localhost:8080/student",{
          method:"POST",
          body:JSON.stringify(payload),
          headers: {"Content-Type":"application/json"}
      }).then(()=>{
          console.log("data",payload);

      })
  }
    return (
      <form className="addstudent" onSubmit={handleSubmit}>
        <div>
          Firstname:{" "}
          <input
            type="text"
            name="first_name"
            onChange={handleChenge}
            className="first_name"
            placeholder="enter first name"
          />
        </div>
        <div>
          {" "}
          Last Name:
          <input
            type="text"
            name="last_name"
            onChange={handleChenge}
            className="last_name"
            placeholder="enter last name"
          />
        </div>
        <div>
          {" "}
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChenge}
            className="email"
            placeholder="enter email"
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input
              name="gender"
              onChange={handleChenge}
              className="male"
              type="radio"
              value={"male"}
            />{" "}
            Female{" "}
            <input
              name="gender"
              onChange={handleChenge}
              className="female"
              type="radio"
              value={"female"}
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input
            type="number"
            onChange={handleChenge}
            name="age"
            className="age"
            placeholder="enter age"
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input
            type="number"
            onChange={handleChenge}
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input
            type="number"
            name="twelth_score"
            onChange={handleChenge}
            className="twelth_score"
            placeholder="enter 12th score"
          />{" "}
        </div>
        <div>
          <select
            onChange={handleChenge}  
            value={""} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            className="preferred_branch"
          >
            <option value="law">law</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
        </div>
  
        <input className="submit" type="submit" value="Submit" />
        {
          // <div className="error"></div>
          // show this div with proper error before submitting form, if there's anything not provided
          // eg: first name missing, age cannot be greater than 100 etc
        }
      </form>
    );
  };