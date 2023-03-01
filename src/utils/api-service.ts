import { AlbumApiProps, PhotoApiProps } from "types/api";

async function getAlbums(): Promise<AlbumApiProps[]> {
    //Fetching Details
    const albumsUrl = new URL("https://jsonplaceholder.typicode.com/albums");
    const response = await fetch(albumsUrl);

    if (response.ok) {
        //Parsing the success response
        const data: AlbumApiProps[] = await response.json();
        return data;
    } else {
        //Parsing the error response
        const error = {
            message: `Server error status: ${response.status}`,
        };
        return Promise.reject(error);
    }
}

//TODO: This logic can be abstracted to be reusable, pending task due to time
async function getPhotos(albumId?: string): Promise<PhotoApiProps[]> {
    const photosUrl = new URL("https://jsonplaceholder.typicode.com/photos");
    //Optional query parameter
    if (albumId) {
        photosUrl.searchParams.set("albumId", albumId);
    }
    const response = await fetch(photosUrl.toString());

    if (response.ok) {
        const data: PhotoApiProps[] = await response.json();
        return data;
    } else {
        const error = {
            message: `Server error status: ${response.status}`,
        };
        return Promise.reject(error);
    }
}

export { getAlbums, getPhotos };
