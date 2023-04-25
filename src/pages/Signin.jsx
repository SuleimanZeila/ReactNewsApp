import Form from "../components/Form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const current_user_is = localStorage.getItem('username')
  const [successMessage, setSuccessMessage] = useState(localStorage.getItem("successMessage"));
  useEffect(() => {
    // Remove the success message from localStorage after 5 seconds
    const timer = setTimeout(() => {
      setSuccessMessage(null);
      localStorage.removeItem("successMessage");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
    return <div>
      {successMessage && <div className="success-message mx-auto flex justify-center mt-0 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">{successMessage}</div>}
      
      {current_user_is ? (
        <>
        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">You Have Already Logged In</p><br />
        <Link className="text-blue-600 p-4" to='/'>Go To Home</Link>

        </>
      ):(
        <Form />
      )}
      </div>;
  };
  
  export default Signin;