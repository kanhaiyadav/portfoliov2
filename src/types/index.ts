export interface ProjectType {
    thumbnail: string;
    icon: string;
    title: string;
    description: string;
    preview?: string;
    source: string;
    package: boolean;
    npm?: string;
    timeSpan: string;
    technologies: number[];
    youtube?: string;
}
