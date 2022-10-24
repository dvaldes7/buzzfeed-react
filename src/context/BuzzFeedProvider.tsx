import React, { useRef, useState } from 'react';
import { OptionsChoiced } from '../../types/quizes';
import { BuzzFeedContext } from './BuzzFeedContext';

export const BuzzFeedProvider = ({ children }: { children: any }) => {
    const [options, setOptions] = useState<OptionsChoiced[]>([]);
    const [unoption, setUnoption] = useState<number[]>([]);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [ref, setRef] = useState({});
    return (
        <BuzzFeedContext.Provider
            value={{
                options,
                setOptions,
                unoption,
                setUnoption,
                showAnswer,
                setShowAnswer,
                ref,
                setRef,
            }}
        >
            {children}
        </BuzzFeedContext.Provider>
    );
};
