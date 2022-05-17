import { createContext, useContext, useState } from "react";

export const MarkdownContext = createContext();

const MarkdownProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const helpText = `Heading
  =======
  
  Sub-heading
  -----------
  
  ### Another deeper heading
  
  Paragraphs are separated
  by a blank line.
  
  Leave 2 spaces at the end of a line to do a
  line break
  
  Text attributes *italic*, **bold**,
  \`monospace\`, ~~strikethrough~~ .
  
  Shopping list:
  
    * apples
    * oranges
    * pears
  
  Numbered list:
  
    1. apples
    2. oranges
    3. pears
  
  The rain---not the reign---in
  Spain.
  
   *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;
  const values = {
    input,
    setInput,
    helpText
  };
  return (
    <MarkdownContext.Provider value={values}>
      {children}
    </MarkdownContext.Provider>
  );
};

const useMarkdown = () => useContext(MarkdownContext);

export { useMarkdown, MarkdownProvider };
