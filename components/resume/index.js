import { useState } from "react";
import Roller from "../Roller";
import classes from "./resume.module.css";

const Resume = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={classes.resume}>
      {false && <Roller />}h
      <div className={classes.iframe_div}>
        <iframe
          src="https://res.cloudinary.com/oladapo/image/upload/v1630930035/OladapoResume_xz6rl3.pdf#toolbar=0&view=fitH&embedded=true"
          allowtransparency="true"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};
export default Resume;
