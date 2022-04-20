import { FunctionComponent, useState } from 'react';
import { FlipCardProps } from './FlipCard.proptypes';
import css from './FlipCard.module.css';
import Card from '../Card/Card';

const FlipCard: FunctionComponent<FlipCardProps> = ({
  frontChildren,
  backChildren,
  clickToFlip = false,
}) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div
      onClick={handleClick}
      className={`${css.flipCard} ${!clickToFlip && css.flipCardHover} ${
        clickToFlip && clicked && css.flipCardClicked
      }`}
    >
      <div className={css.flipCardInner}>
        <div className={css.flipCardFront}>
          <Card>{frontChildren}</Card>
        </div>
        <div className={css.flipCardBack}>
          <Card dark>{backChildren}</Card>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
