import { FunctionComponent, useEffect, useState } from 'react';
import { CardProps } from './ScoreCard.proptypes';
import css from './ScoreCard.module.css';
import LoaderCircle from '../../Loaders/LoaderCircle/LoaderCircle';
import Card from '../Card/Card';

const ScoreCard: FunctionComponent<CardProps> = ({ score }) => {
  const [scoreCount, setScoreCount] = useState(0);
  const sum = score / 1000;
  useEffect(() => {
    if (scoreCount < score)
      setTimeout(() => setScoreCount(scoreCount + sum), 1);
    else if (scoreCount >= score) setScoreCount(score);
  }, [scoreCount]);

  return (
    <Card>
      <div className={css.text}>
        your score:
        <br /> {Math.floor(scoreCount)}
      </div>
      <div className={css.firstLoader}>
        <LoaderCircle percentage={43} title="Hi it's Me" />
      </div>
      <div className={css.secondLoader}>
        <LoaderCircle percentage={score > 0 ? 35 : 0} title="You" />
      </div>
    </Card>
  );
};

export default ScoreCard;
