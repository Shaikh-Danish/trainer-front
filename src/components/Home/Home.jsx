import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const url = "https://trainer-portal.surajmehta6.repl.co/authenticate";
    const authenticate = async () => {
      const res = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      if (res.status === 404 && !res.ok) {
        navigate("/login");
      }
    };
    authenticate();
  }, []);
  return <></>;
}

export default Home;
