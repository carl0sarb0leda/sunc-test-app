import styled from "styled-components";

export const CustomTable = styled.table<{
    isPhotosTable?: boolean;
}>`
    padding: 2rem;
    width: 100%;
    text-align: left;
    table-layout: fixed;
    tr {
        th {
            padding: 1rem;
            border-bottom: 0.1rem solid gray;
            position: sticky;
            top: 0;
            z-index: 5;
            background-color: white;
            ${({ isPhotosTable }) =>
                isPhotosTable && {
                    zIndex: 1,
                }}
        }
        td {
            padding: 1rem;
            border-bottom: 0.1rem solid lightgray;
        }
        &:hover {
            background-color: #f1f3f8;
        }
    }
`;
export const CustomTableRow = styled.tr`
    margin: 2rem;
    &:hover {
        background-color: white !important;
    }
`;
export const PhotosTableWrapper = styled.div`
    box-shadow: 0 2px 6px 0 rgb(31 31 31 / 20%);
    display: grid;
    max-height: 25rem;
    overflow-y: auto;
`;
export const TitleCell = styled.td`
    &:hover {
        cursor: pointer;
    }
`;
