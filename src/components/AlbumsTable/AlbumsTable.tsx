import React from "react";
import { AlbumApiProps } from "types/api";
import { AlbumTableRow } from "components/AlbumTableRow/AlbumTableRow";
import { CustomTable } from "styles/table.styled";

interface AlbumsTableProps {
    albumsData: AlbumApiProps[];
}

export const AlbumsTable = ({ albumsData }: AlbumsTableProps) => {
    return (
        <CustomTable>
            <thead>
                <tr>
                    <th>Album title</th>
                </tr>
            </thead>
            <tbody>
                {albumsData.map((album) => {
                    return <AlbumTableRow key={album.id} album={album} />;
                })}
            </tbody>
        </CustomTable>
    );
};
