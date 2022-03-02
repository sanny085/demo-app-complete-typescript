
import {HomeScreenProps} from '../types/data.model'


// Array types props
const HomeScreen = ({mentors}: HomeScreenProps) => {
  return (
    <div className="container">
        <h4>Our Mentor</h4>
        <table className="table table-hover">
        <thead>
            <tr>
            <th scope="col">SI No.</th>
            <th scope="col">Name</th>
            <th scope="col">specialization</th>
            <th scope="col">skills</th>
            </tr>
        </thead> 
        <tbody>  
         {mentors.map((mentor, idx)=>(
             <tr>
             <th scope="row">{idx+1}</th>
             <td>{mentor.name}</td>
             <td>{mentor.specialization}</td>
             <td>{mentor.skills.map((skill,idy) => skill.concat(', ') )}</td>
           </tr> 
         ))}
         </tbody>
        </table>
    </div>
  )
}

export default HomeScreen;