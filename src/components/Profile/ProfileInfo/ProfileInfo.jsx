import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.maks}>
        <img
          className={classes.background}
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className={classes.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
