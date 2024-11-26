import React, { useState, useEffect } from 'react';
import Add from './Add';
import Usermanagement from './Usermanagement';

const Home = () => {
  const [responseFromAPP, setResponseFromApp] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const roleFromURL = queryParams.get("role");
    setRole(roleFromURL || "Viewer"); 
  }, []);

  return (
    <div>
      {role === "Admin" && <Add setResponseFromApp={setResponseFromApp} role={role} />}
      <Usermanagement responseFromAPP={responseFromAPP} role={role} />
    </div>
  );
};

export default Home;
