import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React from "react";
import App from "./App";

describe("emoji app tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("header  renders w/o crashing", () => {
    const header = screen.getByText(/emoji search/i);
    expect(header).toBeInTheDocument();
  });

  test("emoji results rendered w/o crashing", () => {
    const emojiResults = screen.getByText(/sweat smile/i);
    expect(emojiResults).toBeInTheDocument();
  });

  test("when emojis filtered by a user, emoji list should re-rendered", () => {
    const emojiInput = screen.getByPlaceholderText("filter emojis");
    userEvent.type(emojiInput, "goal");
    const expectedEmoji = screen.getByText(/goal/i);
    expect(expectedEmoji).toBeInTheDocument();
  });

  test("emojis should be copied to clipboard",  () => {  /* thx to dcselek */
        const emojiInnocent = screen.getByText(/innocent/i)
        document.execCommand = jest.fn(); 
        userEvent.click(emojiInnocent);

        expect(document.execCommand).toBeCalledWith('copy')  
        const copyEmoji = window.ClipboardData;
        expect(copyEmoji).toEqual(emojiInnocent.value)
  });
});
