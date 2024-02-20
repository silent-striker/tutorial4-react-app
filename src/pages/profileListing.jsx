import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/profileListing.css'


function ProfileListing() {

  const [profileList, setProfileList] = useState([]);
  const [filteredProfileList, setFilteredProfileList] = useState([]); // [1

  function handleSearchInput(e) {
    const searchInput = e.target.value;
    setFilteredProfileList(filterProfiles(profileList, searchInput));
  }

  function filterProfiles(profileList, searchValue){
    return profileList.filter((profile) => {
      return profile.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  useEffect(() => {
    const url = "https://express-t4.onrender.com/api/users"
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        setProfileList(response.data);
        setFilteredProfileList(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert('Error fetching profile list');
      });
  }, []);

  return (
    <div>
      <h1>Profile Listing</h1>
      <div className='container'>
        <div className="row">
          <input type="text" placeholder='Search by name' onInput={handleSearchInput} />
          {filteredProfileList.map((profile) => {
            return(
              <div key={profile._id} className='col-md-4'>
                <Link to={`/profile/${profile._id}`} style={{textDecoration:"none"}}>
                  <div className="card profile-card">
                    <img src={profile.picture} className="card-img-top" alt={profile.name} />
                    <div className="card-body">
                      <h5 className="card-title">{profile.name}</h5>
                      <p className="card-text">Age: {profile.age}</p>
                      <p className="card-text">Company: {profile.company}</p>
                      <p className="card-text">Email: {profile.email}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default ProfileListing;