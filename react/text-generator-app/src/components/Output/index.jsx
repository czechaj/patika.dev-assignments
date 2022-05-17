import React, { useEffect } from "react";
import axios from "axios";
import { useParagraph } from "../../contexts/ParagraphContext";

function Output() {
  const { number, type, output, setOutput } = useParagraph();
  useEffect(() => {
    fetchParas(number, type);
  }, [number, type]);

  const fetchParas = async (number, type) => {
    const res = await axios(
      `https://baconipsum.com/api/?type=all-meat&paras=${number}&format=${type}`
    );
    setOutput(res.data);
  };

  return (
    <div className="output container">
      {type === "text" ? (
        <em className="output-text">
          {" "}
          <small> {output} </small>{" "}
        </em>
      ) : (
        <p className="output-text">{output}</p>
      )}
    </div>
  );
}

export default Output;
