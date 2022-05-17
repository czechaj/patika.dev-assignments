import React from "react";

function Header() {
  return (
    <div className="header-text">
      <h1>React Sample Text Generator App</h1>
      <hr />
    </div>
  );
}

export default React.memo(Header);
