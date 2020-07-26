import React from "react";
import PropTypes from "prop-types";

const Error = ({ mensaje }) => {
  return (
    <div>
      <p>{mensaje}</p>
    </div>
  );
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Error;
