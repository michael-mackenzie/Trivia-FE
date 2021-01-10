import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Logout() {

  const history = useHistory();

  useEffect(() => {
    localStorage.setItem('userEmail', 'test');
    var path = `/home`;
    history.push(path);
  }, [history]);

  return (
    <>
    </>
  )
}

export default Logout;
