import React from 'react';

function Canvas(props) {
  const {value} = props;

  return (
    <textarea
      style={{
        width: `100%`,
        height: `65vh`,
        color: `#000d33`,
        backgroundColor: `inherit`,
        border: 0,
      }}
      value={value}
      disabled="disabled"
    ></textarea>
  );
}

export default Canvas;
