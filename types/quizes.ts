export interface Quiz {
    answers: Array<string>;
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
