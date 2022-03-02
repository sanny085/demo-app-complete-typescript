import {ProfilePropsType} from '../types/data.model'

// Object types props 
const Profile = ({person}: ProfilePropsType) => {
    console.log('personData', person);
  return (
    <div className="container">
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{person.homeTown}</h6>
                <p className="card-text">{person.state}</p>
                <a href="#" className="card-link">Socialize</a>
                <a href="#" className="card-link">Skills</a>
            </div>
        </div>
        
    </div>
  )
}

export default Profile