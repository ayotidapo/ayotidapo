import { useState } from "react";
import Roller from "../Roller";
import classes from "./resume.module.css";

const Resume = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={classes.resume}>
      {false && <Roller />}
      <div className={classes.iframe_div}>
        <iframe
          src="https://res.cloudinary.com/oladapo/image/upload/v1654551165/OladapoResume_y8z3oq.pdf#toolbar=0&view=fitH&embedded=true"
          allowtransparency="true"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};
export default Resume;
