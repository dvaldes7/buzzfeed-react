import { Fragment, useContext } from 'react';
import { Answer, OptionsChoiced } from '../../types/quizes';
import { BuzzFeedContext } from '../context/BuzzFeedContext';

export const Answers = ({ answer }: { answer: Answer[] }) => {
    const { option }: { option: OptionsChoiced[] } =
        useContext<any>(BuzzFeedContext);
    return (
        <section className="answer">
            {answer!.map((a, i) => {
                return (
                    <Fragment key={i}>
                        <h1>{a.text}</h1>
                        <img src={a.image} alt={a.alt} />
                    </Fragment>
                );
            })}
        </section>
    );
};
