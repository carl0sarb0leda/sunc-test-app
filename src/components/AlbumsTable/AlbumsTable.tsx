import React from "react";
import { AlbumApiProps } from "types/api";

interface AlbumsTableProps {
    albumsData: AlbumApiProps[];
}

export const AlbumsTable = ({ albumsData }: AlbumsTableProps) => {
    return <div>Table</div>;
};
