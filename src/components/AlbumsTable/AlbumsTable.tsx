import React from "react";
import { AlbumApiProps } from "types/api";

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
                    return (
                        <tr key={album.id}>
                            <td>{album.userId}</td>
                            <td>{album.title}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
