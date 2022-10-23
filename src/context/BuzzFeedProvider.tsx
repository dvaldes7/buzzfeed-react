import React, { useState } from 'react';
import { OptionsChoiced } from '../../types/quizes';
import { BuzzFeedContext } from './BuzzFeedContext';

export const BuzzFeedProvider = ({ children }: { children: any }) => {
    const [options, setOptions] = useState<OptionsChoiced[]>([]);
    const [unoption, setUnoption] = useState<number[]>([]);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    return (
        <BuzzFeedContext.Provider
            value={{
                options,
                setOptions,
                unoption,
                setUnoption,
                showAnswer,
                setShowAnswer,
            }}
        >
            {children}
        </BuzzFeedContext.Provider>
    );
};
