import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMarkdown } from "../../contexts/MarkdownContext";

function Output() {
  const { input } = useMarkdown();
  const markdown = input;

  return (
    <div className="output">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}

export default Output;
