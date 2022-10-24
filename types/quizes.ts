import { LegacyRef } from 'react';

export interface Quiz {
    answers: Array<Answer>;
    content: Array<Content>;
    quizId: string;
    subtitle: string;
    title: string;
}

export interface Content {
    id: number;
    questions: Questions[];
    text: string;
}

export interface Questions {
    alt: string;
    credit: string;
    image: string;
    text: string;
}

export interface OptionsChoiced {
    id: number;
    text: string;
}
export interface Answer {
    alt: string;
    combination: string[];
    image: string;
    text: string;
}

export interface ReferencesHeading {
    id: number;
    heading: React.RefObject<HTMLHeadingElement>;
}
