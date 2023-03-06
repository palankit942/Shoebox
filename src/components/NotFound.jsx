import React from 'react';
import pageNotFound from "../assets/notFound.png"
import "../stylesheets/components.css";

function NotFound() {
  return (
    <div className="flex items-center justify-center">
    <img
      className="page-not-found w-80p"
      src={pageNotFound}
      alt="page-not-found"
    />
  </div>
  )
}

export {NotFound};