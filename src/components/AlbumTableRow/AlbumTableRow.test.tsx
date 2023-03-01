import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AlbumTableRow } from "./AlbumTableRow";

describe("Testing <AlbumTableRow />", () => {
    const albumTestData = {
        userId: 1,
        id: 1,
        title: "album1",
    };

    test("renders row element", () => {
        render(
            <table>
                <tbody>
                    <AlbumTableRow album={albumTestData} />
                </tbody>
            </table>
        );
        const tableElement = screen.getByRole("row");
        expect(tableElement).toBeInTheDocument();
    });
    test("renders nested table after click title", async () => {
        render(
            <table>
                <tbody>
                    <AlbumTableRow album={albumTestData} />
                </tbody>
            </table>
        );
        const titleElement = screen.getByRole("cell", { name: "album1" });
        userEvent.click(titleElement);
        const loading = screen.getByText(/Loading/i);
        expect(loading).toBeInTheDocument();
        const photoTable = await screen.findByText("Photo title");
        expect(photoTable).toBeInTheDocument();
    });
});
