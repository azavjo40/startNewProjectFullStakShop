import React from "react";

function Loading() {
  return (
    <div>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
export default Loading;
