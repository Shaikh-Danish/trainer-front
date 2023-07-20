import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Table from '../Table/Table';

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const url = "https://trainer-portal.surajmehta6.repl.co/dashboard";
    const authenticate = async () => {
      const res = await fetch(url, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();

      console.log(data)

      if (res.status === 404 && !res.ok) {
        navigate("/login");
      } else if (res.status === 200 && res.ok) {
        setIsLoggedIn(true);
        navigate("/dashboard");
      }
    };
    authenticate();
  }, []);

  return (
    <>
     {isLoggedIn && <Table />}
    </>
  )
}

export default Home;
