import { useEffect, useState } from "react";

export const ShowStudents = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
      getData();
  },[]);

  const getData = (e) => {
    fetch("http://localhost:8080/student")
      .then((res) =>( res.json()))
      .then((data) => {
         console.log(data);
        setData(data);
      });
  };
  const handleSort=(field,ascending=true)=>{
      const sortData = data.sort((a,b)=>{
          if(ascending){
              return a[field] - b[field];
          }
          return b[field] - a[field];
      })
      setData([...sortData])
  }
  console.log({data})

  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            onChange={()=>handleSort(value)}
          >
            <option value="first_name" >First Name</option>
            <option value="gender" >Gender</option>
            <option value="age" >Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score" >12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
            onChange={()=>handleSort(value)}
          >
            <option value="true" >Ascending</option>
            <option value="false" >Descending</option>
          </select>
        </div>
        <button className="sort" onClick={()=>handleSort(value)}>sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
        {data.map((student,index)=>{
            return (
                <tr className="row">
                <td className="first_name">{student.first_name}</td>
                <td className="last_name">{student.last_name}</td>
                <td className="email">{student.email}</td>
                <td className="gender">{student.gender}</td>
                <td className="age">{student.age}</td>
                <td className="tenth_score">{student.tenth_score}</td>
                <td className="twelth_score">{student.twelth_score}</td>
                <td className="preferred_branch">{student.preferred_branch}</td>
              </tr>
            );
        })}
        
        </tbody>
      </table>
    </div>
  );
};
