export type AlbumApiProps = {
    userId: number;
    id: number;
    title: string;
};
export type PhotoApiProps = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};
