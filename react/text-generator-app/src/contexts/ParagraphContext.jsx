import { createContext, useContext, useState } from "react";

export const ParagraphContext = createContext();

const ParagraphProvider = ({ children }) => {
  const [number, setNumber] = useState(4);
  const [type, setType] = useState("HTML");
  const [output, setOutput] = useState([]);
  const values = {
    number,
    setNumber,
    type,
    setType,
    output,
    setOutput,
  };

  return (
    <ParagraphContext.Provider value={values}>
      {" "}
      {children}{" "}
    </ParagraphContext.Provider>
  );
};

const useParagraph = () => useContext(ParagraphContext);

export { useParagraph, ParagraphProvider };
