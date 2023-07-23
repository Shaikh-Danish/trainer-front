import { useEffect, useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom"; 

import Table from "./Table";
import LoginContext from "./utils/loginContext";
import Loader from "./Loader";

function Home() {
  const [links, setLinks] = useState([]);
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
  const [loading, setLoading] = useState(true)
  
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) <Navigate to="/login" />

    const url = "https://trainer-portal.surajmehta6.repl.co/api/v1/links";

    const getLinks = async () => {
      const res = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      if (res.status === 401 && !res.ok) {
        navigate("/login")
      }

      const { data } = await res.json();

      if (res.status === 200 && res.ok) {
        setIsLoggedIn(true);
        setLoading(false)
        setLinks(data.links);
      }
    };

    getLinks();
  }, []);
  
  return (
    <>
      {loading
        ? <Loader />
        : links.length > 0 && <Table data={links} />
      }
    </>
  )
}

export default Home;
