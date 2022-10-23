import React from 'react';

export const QuestionTitle = ({ text }: { text: string }) => {
    return (
        <div className="question-title">
            <h2>{text}</h2>
        </div>
    );
};
