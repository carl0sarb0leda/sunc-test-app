import React from "react";
import { PhotoApiProps } from "types/api";

interface PhotosTableProps {
    photosData: PhotoApiProps[];
}

export const PhotosTable = ({ photosData }: PhotosTableProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Thumbnail</th>
                </tr>
            </thead>
            <tbody>
                {photosData.map((photoInfo) => {
                    return (
                        <tr key={photoInfo.id}>
                            <td>{photoInfo.title}</td>
                            <td>{photoInfo.albumId}</td>
                            <td>{photoInfo.thumbnailUrl}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
