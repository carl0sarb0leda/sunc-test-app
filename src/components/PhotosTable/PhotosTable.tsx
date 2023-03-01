import React from "react";
import { PhotoApiProps } from "types/api";
import { CustomTable } from "styles/table.styled";

interface PhotosTableProps {
    photosData: PhotoApiProps[];
}

export const PhotosTable = ({ photosData }: PhotosTableProps) => {
    return (
        <CustomTable isPhotosTable cellSpacing={0}>
            <thead>
                <tr>
                    <th>Photo title</th>
                    <th>Description</th>
                    <th>Thumbnail</th>
                </tr>
            </thead>
            <tbody>
                {photosData.map((photo) => {
                    return (
                        <tr key={photo.id}>
                            <td>{photo.title}</td>
                            <td>
                                Photo Id: {photo.id} Album Id: {photo.albumId}
                            </td>
                            <td>
                                <a
                                    href={photo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={photo.thumbnailUrl}
                                        alt={photo.title}
                                    />
                                </a>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </CustomTable>
    );
};
