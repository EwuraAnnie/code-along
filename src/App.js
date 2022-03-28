// import logo from './logo.svg';
import './App.css';
// import writers from "./writers";
import  ProfileCard  from './components/ProfileCard';
import { useEffect, useState } from 'react';
import ProfileForm from './components/ProfileForm';

function App() {
  const [allProfile, setAllProfile] = useState([
    {
      firstName: "Hannah",
      lastName: "Montana",
      email: "hannah.montana@gmail.com",
      phone: "+233 244 455 000",
  },
  ]);

  const submit = (profile) => {
    const arr = allProfile;
    arr.push(profile);
    setAllProfile(arr);
  };
    
  return (
    <div>
      <h1>Writers' Profiles</h1>
        <div className="container"><div/>
        <ProfileForm submit={submit} />
        {allProfile.map((writer) => (
          <ProfileCard key={writer.id} writer={writer} />
        ))}
      </div>
      </div>
  );
}

export default App;
