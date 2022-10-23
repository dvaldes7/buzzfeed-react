import React, { useContext, useEffect, useState } from 'react';
import { OptionsChoiced, Quiz } from '../../types/quizes';
import { BuzzFeedContext } from '../context/BuzzFeedContext';
import { Answers } from './Answers';
import { Question } from './Question';
const callAPI = async (setQuiz: any) => {
    try {
        const resp = await fetch('http://localhost:8080/quizes');
        const data: Quiz | undefined = await resp.json();
        console.log(data);

        setQuiz(data);
    } catch (e) {
        console.log('Error when call api: ' + e);
        setQuiz({});
    }
};
export const App = () => {
    const [quiz, setQuiz]: [Quiz | undefined, unknown] = useState();
    const {
        unoption,
        options,
        setUnoption,
        showAnswer,
        setShowAnswer,
    }: {
        unoption: number[];
        options: OptionsChoiced[];
        setUnoption: Function;
        showAnswer: boolean;
        setShowAnswer: Function;
    } = useContext<any>(BuzzFeedContext);
    useEffect(() => {
        callAPI(setQuiz);
    }, []);

    useEffect(() => {
        //Cuando quiz termine de ejecutarse, volverá a cargarse este efecto
        const data: number[] | undefined = quiz?.content.map((q) => q.id);
        setUnoption(data);
    }, [quiz]);

    useEffect(() => {
        setShowAnswer(unoption?.length === 0 && options.length > 0);
    }, [unoption]);

    useEffect(() => {
        if (showAnswer) {
            console.log('ans' + document.querySelector('.answer'));

            document
                .querySelector('.answer')
                ?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [showAnswer]);

    return (
        <div className="container">
            <h1>{quiz?.title}</h1>
            {quiz?.content.map((question, i) => (
                <Question key={i} question={question} />
            ))}

            {showAnswer ? <Answers answer={quiz!.answers} /> : ''}
        </div>
    );
};
