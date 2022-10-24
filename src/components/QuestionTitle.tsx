import React, { useContext, useRef } from 'react';
import { ReferencesHeading } from '../../types/quizes';
import { BuzzFeedContext } from '../context/BuzzFeedContext';

export const QuestionTitle = ({ text, id }: { text: string; id: number }) => {
    const { ref, setRef }: { ref: ReferencesHeading[]; setRef: Function } =
        useContext<any>(BuzzFeedContext);
    let references = ref?.find((r) => r.id == id);
    return (
        <div className="question-title">
            <h2 ref={references?.heading}>{text}</h2>
        </div>
    );
};
