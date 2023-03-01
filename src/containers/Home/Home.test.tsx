import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Testing <Home />", () => {
    test("renders home table after loading", async () => {
        render(<Home />);
        const loading = screen.getByText(/Loading/i);
        expect(loading).toBeInTheDocument();
        const table = await screen.findByRole("table");
        expect(table).toBeInTheDocument();
    });
});
