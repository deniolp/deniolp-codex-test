import React from 'react';


function Canvas(props) {
const {value} = props;

  return (
    <textarea
      style={{
        width: `100%`,
        height: `85vh`,
      }}
      value={value}
      disabled="disabled"
    ></textarea>
  );
}

export default Canvas;
