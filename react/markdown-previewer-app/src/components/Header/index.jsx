import React from "react";
import { useMarkdown } from "../../contexts/MarkdownContext";

function Header() {
  const { input, helpText, setInput } = useMarkdown();
  const handleClick = () => {
    input === helpText ? setInput("") : setInput(helpText);
  };
  return (
    <header>
      <div className="logo">
        <h1>Markdown Previewer</h1>
      </div>
      <div className="help">
        <button onClick={handleClick} className="button-outline">
          {" "}
          Help{" "}
        </button>
      </div>
    </header>
  );
}

export default Header;
