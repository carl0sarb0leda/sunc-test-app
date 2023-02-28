import { PhotosApiProps } from "types/api";

//TODO: This logic can be abstracted to be reusable, pending task due to time
async function getPhotos(): Promise<PhotosApiProps[]> {
    //Fetching Details
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos",
        {
            method: "GET",
            headers: {
                // Not required but API should include Authorization header
            },
        }
    );

    if (response.ok) {
        //Parsing the success response
        const data: PhotosApiProps[] = await response.json();
        return data;
    } else {
        //Parsing the error response
        const error = {
            message: `Server error status: ${response.status}`,
        };
        return Promise.reject(error);
    }
}

export { getPhotos };
