import { AlbumsTable } from "components";
import React, { useEffect, useState } from "react";
import { AlbumApiProps } from "types/api";
import { getAlbums } from "utils/api-service";

export const Home = () => {
    const [albumsData, setAlbumsData] = useState<AlbumApiProps[] | null>(null);
    const [isLoadingAlbums, setIsLoadingAlbums] = useState(false);

    useEffect(() => {
        const getAlbumsData = async () => {
            setIsLoadingAlbums(true);
            const response = await getAlbums();
            setAlbumsData(response);
            setIsLoadingAlbums(false);
        };
        getAlbumsData();
    }, []);

    if (isLoadingAlbums) {
        return <div>Loading...</div>;
    }
    if (albumsData) {
        return <AlbumsTable albumsData={albumsData} />;
    }
    return null;
};
