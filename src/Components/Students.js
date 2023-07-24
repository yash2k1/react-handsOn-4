import React,{useState} from 'react'
import './StudentStyle.css'
import { Link } from 'react-router-dom'

function Student() {
  const [StudentData]= useState([
{Name:'john',
Age:26,
Course:'MERN',
Batch:'October',
Change:'Edit'
},
{Name:'Doe',
Age:25,
Course:'MERN',
Batch:'November',
Change:'Edit'
},
{Name:'Biden',
Age:26,
Course:'MERN',
Batch:'September',
Change:'Edit'

},
{Name:'Barar',
Age:22,
Course:'MERN',
Batch:'September',
Change:'Edit'

},
{Name:'Christ',
Age:23,
Course:'MERN',
Batch:'October',
Change:'Edit'

},
{Name:'Elent',
Age:23,
Course:'MERN',
Batch:'November',
Change:'Edit'

},
{Name:'Harshita Sharma',
Age:24,
Course:'MERN',
Batch:'October',
Change:'Edit'

}
  ]
  )
  return (
    <>
    <header>
      <div className="stud">Sudents Details</div>
      <button className="add">Add new Students</button>
    </header>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
      </thead>
  
      {
        StudentData.map((data,index)=>{
       return <tr key={index}>
          <td>{data.Name}</td>
          <td>{data.Age}</td>
          <td>{data.Course}</td>
          <td>{data.Batch}</td>
          <td><Link to='#'>{data.Change}</Link></td>
          </tr>
        })
      }
    
 

    </table>
    </>
  )
}

export default Student