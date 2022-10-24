import React, { MutableRefObject, useContext, useEffect, useRef } from 'react';
import {
    OptionsChoiced,
    Questions,
    ReferencesHeading,
} from '../../types/quizes';
import { BuzzFeedContext } from '../context/BuzzFeedContext';

export const QuestionItem = ({
    questionItem,
    id,
}: {
    questionItem: Questions;
    id: number;
}) => {
    const {
        options,
        setOptions,
        unoption,
        setUnoption,
        ref,
    }: {
        options: OptionsChoiced[];
        setOptions: Function;
        unoption: number[];
        setUnoption: Function;
        ref: ReferencesHeading[];
    } = useContext<any>(BuzzFeedContext);
    const itemRef = useRef<HTMLDivElement>(null);

    let isChoicedItem: boolean = false;
    const isChoiced = () => options.some((o) => o.text == questionItem.text);

    const handlerClickItems = (e: any) => {
        const choiced: OptionsChoiced = {
            id,
            text: questionItem.text,
        };

        if (isChoicedItem || !unoption.includes(id)) return;
        else {
            setOptions((option: OptionsChoiced[]) => [...option, choiced]);
            setUnoption(unoption?.filter((o) => o != id));
        }
    };

    useEffect(() => {
        isChoicedItem = isChoiced();
        if (isChoicedItem) itemRef.current?.classList.add('disabled');
    }, [options]);

    useEffect(() => {
        if (unoption?.length > 0) {
            const min = Math.min(...unoption);
            // const question = document.querySelector(`.question-${min}`);
            // question?.scrollIntoView({ behavior: 'smooth' });
            console.log(ref);

            const nextQuestion = ref?.find((r) => r.id == min);
            nextQuestion?.heading.current?.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }, [unoption]);

    return (
        <div className="items" onClick={handlerClickItems} ref={itemRef}>
            <img src={questionItem.image} alt={questionItem.alt} />
            <p className="title">{questionItem.text}</p>
            <p className="credit">{questionItem.credit}</p>
        </div>
    );
};
