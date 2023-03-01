import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
describe("Testing <App />", () => {
    test("renders in root router location", () => {
        render(<App />);
        expect(window.location.pathname).toBe("/");
    });
    test("renders default home element", () => {
        render(<App />);
        const homeElement = screen.getByText(/Loading/i);
        expect(homeElement).toBeInTheDocument();
    });
});
