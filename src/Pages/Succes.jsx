import React, { useEffect, useState } from "react";
import { HashLoader, PropagateLoader } from "react-spinners";

const Succes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="succes">
      {loading ? (
        <HashLoader color="#36d7b7" />
      ) : (
        <div className="succes-box">
          {/* <img src="https://i.pinimg.com/originals/0d/d5/23/0dd5234b9d72142cff71caf3eb71c321.png" alt="" /> */}
          {/* <h2> 💥Your Order Successfull 💥</h2>
          <p>Your Order Has Been Sucessfully Placed...</p> <br /> <br /> */}
          <PropagateLoader color="#36d7b7" className="animetion" />
        </div>
      )}
    </div>
  );
};

export default Succes;
