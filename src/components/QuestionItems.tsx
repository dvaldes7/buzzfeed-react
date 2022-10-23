import React, { useContext, useEffect } from 'react';
import { Content, OptionsChoiced, Quiz } from '../../types/quizes';
import { BuzzFeedContext } from '../context/BuzzFeedContext';
import { QuestionItem } from './QuestionItem';

export const QuestionItems = ({ question }: { question: Content }) => {
    return (
        <div className="question-items">
            {question.questions.map((q, i) => (
                <QuestionItem key={i} questionItem={q} id={question.id} />
            ))}
        </div>
    );
};
