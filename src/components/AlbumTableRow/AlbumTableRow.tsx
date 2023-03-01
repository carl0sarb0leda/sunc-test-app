import React, { useCallback, useEffect, useState } from "react";
import { AlbumApiProps, PhotoApiProps } from "types/api";
import { PhotosTable } from "components";
import { getPhotos } from "utils/api-service";

interface AlbumTableRowProps {
    album: AlbumApiProps;
}

export const AlbumTableRow = ({ album }: AlbumTableRowProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [photosData, setPhotosData] = useState<PhotoApiProps[] | null>(null);
    const [isLoadingPhotos, setIsLoadingPhotos] = useState(false);

    useEffect(() => {
        const getPhotosByAlbumId = async () => {
            setIsLoadingPhotos(true);
            const response = await getPhotos(album.id.toString());
            setPhotosData(response);
            setIsLoadingPhotos(false);
        };
        if (isOpen) {
            getPhotosByAlbumId();
        }
    }, [isOpen, album.id]);

    const renderPhotosTable = useCallback(() => {
        if (!isOpen) {
            return null;
        }
        if (isLoadingPhotos) {
            return (
                <tr>
                    <td>Loading...</td>
                </tr>
            );
        }
        if (photosData) {
            return (
                <tr>
                    <td colSpan={2}>
                        <div
                            style={{
                                display: "grid",
                                height: "10rem",
                                overflowY: "auto",
                            }}
                        >
                            <PhotosTable photosData={photosData} />
                        </div>
                    </td>
                </tr>
            );
        }
        return null;
    }, [isOpen, isLoadingPhotos, photosData]);

    return (
        <>
            <tr key={album.id}>
                <td>{album.userId}</td>
                <td onClick={() => setIsOpen(!isOpen)}>{album.title}</td>
            </tr>
            {renderPhotosTable()}
        </>
    );
};
