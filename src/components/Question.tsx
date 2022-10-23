import React, { useContext, useEffect } from 'react';
import { Content, OptionsChoiced, Questions, Quiz } from '../../types/quizes';
import { BuzzFeedContext } from '../context/BuzzFeedContext';
import { QuestionItem } from './QuestionItem';
import { QuestionItems } from './QuestionItems';
import { QuestionTitle } from './QuestionTitle';

export const Question = ({ question }: { question: Content }) => {
    return (
        <section className={`question question-${question.id}`}>
            <QuestionTitle text={question.text} />
            <QuestionItems question={question} />
        </section>
    );
};
