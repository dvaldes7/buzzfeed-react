import React, { useEffect, useState } from 'react';
import { Quiz } from '../types/quizes';
import { Question } from './Question';
const callAPI = async (setQuiz: any) => {
    try {
        const resp = await fetch('http://localhost:8080/quizes');
        const data: Quiz | undefined = await resp.json();
        setQuiz(data);
    } catch (e) {
        console.log('Error when call api: ' + e);
        setQuiz({});
    }
};
export const App = () => {
    const [quiz, setQuiz]: [Quiz | undefined, unknown] = useState();
    useEffect(() => {
        callAPI(setQuiz);
    }, []);
    console.log('render: ' + quiz);

    return (
        <div className="container">
            <h1>{quiz?.title}</h1>
            {quiz?.content.map((question) => (
                <Question key={question.id} question={question} />
            ))}
        </div>

        //Title
        //subtitle
        //Content
        //Questons
    );
};
