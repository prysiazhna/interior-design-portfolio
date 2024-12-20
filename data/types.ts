export interface Reason {
    number: string;
    title: string;
    description: string;
}

export interface Image {
    src: string;
    alt: string;
}

export interface ProjectDataModel {
    id: string;
    description: string;
    imageSrc: string;
    images: {
        horizontal: string [],
        vertical: string[]
    };
}