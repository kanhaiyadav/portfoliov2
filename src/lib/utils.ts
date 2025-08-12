import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type SectionName = 'home' | 'whoami' | 'career_path' | 'achievements' | 'skills_stats' | 'projects' | 'contact';

export const scrollToParallaxSection = (
    ref: React.MutableRefObject<null>,
    sectionName: SectionName
): void => {
    const sectionOffsets: Record<SectionName, number> = {
        home: 0,
        whoami: 0.8,
        career_path: 1.5,
        achievements: 2.45,
        skills_stats: 3.3,
        projects: 5.12,
        contact: 8,
    };

    if (ref.current && sectionOffsets[sectionName] !== undefined) {
        //@ts-expect-error - Parallax ref does not have proper TypeScript definitions for scrollTo method
        ref.current.scrollTo(sectionOffsets[sectionName]);
    }
};