import { render, screen } from "@testing-library/react";
import { PhotosTable } from "./PhotosTable";

describe("Testing <PhotosTable />", () => {
    const photosTestData = [
        {
            albumId: 1,
            id: 1,
            title: "photo1",
            url: "https://via.placeholder.com/test1",
            thumbnailUrl: "https://via.placeholder.com/test1thumbnail",
        },
        {
            albumId: 1,
            id: 2,
            title: "photo2",
            url: "https://via.placeholder.com/test2",
            thumbnailUrl: "https://via.placeholder.com/test2thumbnail",
        },
    ];
    test("renders table element", () => {
        render(<PhotosTable photosData={photosTestData} />);
        const tableElement = screen.getByRole("table");
        expect(tableElement).toBeInTheDocument();
    });
    test("renders table data as expected", () => {
        render(<PhotosTable photosData={photosTestData} />);
        const firstHeader = screen.getByRole("columnheader", {
            name: "Photo title",
        });
        expect(firstHeader).toBeInTheDocument();
        const rows = screen.getAllByRole("row");
        expect(rows.length).toBe(3);
        const cells = screen.getAllByRole("cell");
        expect(cells.length).toBe(6);
    });
    test("renders table images and links elements", () => {
        render(<PhotosTable photosData={photosTestData} />);
        const photosImages = screen.getAllByRole("img");
        expect(photosImages.length).toBe(2);
        expect(photosImages[0]).toHaveAttribute(
            "src",
            "https://via.placeholder.com/test1thumbnail"
        );
        const photosLinks = screen.getAllByRole("link");
        expect(photosLinks.length).toBe(2);
        expect(photosLinks[0]).toHaveAttribute(
            "href",
            "https://via.placeholder.com/test1"
        );
    });
});
