import React from "react";
import { useMarkdown } from "../../contexts/MarkdownContext";

function Input() {
  const { input, setInput } = useMarkdown();

  return (
    <textarea
      rows={50}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="input"
    />
  );
}

export default Input;
