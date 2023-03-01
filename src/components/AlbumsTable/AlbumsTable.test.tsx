import { render, screen } from "@testing-library/react";
import { AlbumsTable } from "./AlbumsTable";

describe("Testing <AlbumsTable />", () => {
    const albumsTestData = [
        {
            userId: 1,
            id: 1,
            title: "test1",
        },
        {
            userId: 1,
            id: 2,
            title: "test2",
        },
    ];
    test("renders table element", () => {
        render(<AlbumsTable albumsData={albumsTestData} />);
        const tableElement = screen.getByRole("table");
        expect(tableElement).toBeInTheDocument();
    });
    test("renders table data as expected", () => {
        render(<AlbumsTable albumsData={albumsTestData} />);
        const firstHeader = screen.getByRole("columnheader", {
            name: "Album title",
        });
        expect(firstHeader).toBeInTheDocument();
        const rows = screen.getAllByRole("row");
        expect(rows.length).toBe(3);
        const cells = screen.getAllByRole("cell");
        expect(cells.length).toBe(2);
    });
});
