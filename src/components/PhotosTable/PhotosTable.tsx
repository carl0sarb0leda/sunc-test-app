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
                    <th>Photo title</th>
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
                            <td>
                                <a
                                    href={photoInfo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={photoInfo.thumbnailUrl}
                                        alt={photoInfo.title}
                                    />
                                </a>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
