import React from 'react';

function CurrentComponent({ children, div, handelDrag, handleDragEnd, isDragging }) {
  const handleDrag = (e) => {
    if (!isDragging) {
      handelDrag(e);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleDragEnd();
  };

  return (
    <div
      ref={div}
    //   onDrop={handleDrag}
      onDragEnd={handleDrag}
    //   onDragOver={handleDragOver}
    //   onDrop={handleDrop}
      draggable={!isDragging}
    >
      {children}
    </div>
  );
}

export default CurrentComponent;
