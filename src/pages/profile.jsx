import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../css/profile.css'

function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function Profile() {
    const {id} = useParams();
    const [profile, setProfile] = useState({});

    useEffect(() => {
        axios.get(`https://express-t4.onrender.com/api/users/${id}`)
        .then((response) => {
            console.log(response);
            setProfile(response.data);
        })
        .catch((error) => {
            console.log(error);
            alert('Error fetching profile');
        });
    }, [id]);

    return (
        <div className='profile-page'>
            <h1>User Profile</h1>
            {
                !isObjectEmpty(profile) &&
                <div className='profile-container'>
                <div>
                    <h6>{profile.greeting}</h6>
                    <img src={profile.picture} alt={profile.name} />
                    <h2>{profile.name}</h2>
                    <p><strong>About:</strong> {profile.about}</p>
                    <p><strong>Age:</strong> {profile.age}</p>
                    <p><strong>Gender:</strong> {profile.gender}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Phone:</strong> {profile.phone}</p>
                    <p><strong>Address:</strong> {profile.address}</p>
                    <p><strong>Company:</strong> {profile.company}</p>
                    <p><strong>Balance:</strong> {profile.balance}</p>
                    <p><strong>Eye Color:</strong> {profile.eyeColor}</p>
                    <p><strong>Registered:</strong> {profile.registered}</p>
                    <p><strong>Latitude:</strong> {profile.latitude}</p>
                    <p><strong>Longitude:</strong> {profile.longitude}</p>
                    <p><strong>Tags:</strong> {profile.tags?.join(', ')}</p>
                    <p><strong>Favorite Fruit:</strong> {profile.favoriteFruit}</p>
                </div>
            </div>
            }
        </div>
    )
}

export default Profile;