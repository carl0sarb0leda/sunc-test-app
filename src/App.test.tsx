import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders default home element", () => {
    render(<App />);
    const homeElement = screen.getByText(/Home/i);
    expect(homeElement).toBeInTheDocument();
});
