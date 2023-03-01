import React from "react";
import { AlbumApiProps } from "types/api";
import { AlbumTableRow } from "components/AlbumTableRow/AlbumTableRow";

interface AlbumsTableProps {
    albumsData: AlbumApiProps[];
}

export const AlbumsTable = ({ albumsData }: AlbumsTableProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>User id</th>
                    <th>Album title</th>
                </tr>
            </thead>
            <tbody>
                {albumsData.map((album) => {
                    return <AlbumTableRow key={album.id} album={album} />;
                })}
            </tbody>
        </table>
    );
};
