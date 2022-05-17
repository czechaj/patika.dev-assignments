import React from "react";
import { useParagraph } from "../../contexts/ParagraphContext";

function Input() {
  const { number, setNumber, type, setType } = useParagraph();

  return (
    <div className="input-section container">
      <div className="row">
        <div className="column">
          <label htmlFor="paragraphs">Paragraphs</label>
          <input
            value={number}
            min="1"
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            id="paragraphs"
          />
        </div>
        <div className="column">
          <label htmlFor="select">Include HTML</label>
          <select onChange={(e) => setType(e.target.value)} id="select">
            <option value="HTML">Yes</option>
            <option value="text">No</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Input;
