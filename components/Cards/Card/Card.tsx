import { FunctionComponent } from 'react';
import { CardProps } from './Card.proptypes';
import css from './Card.module.css';

const Card: FunctionComponent<CardProps> = ({ children }) => {
  return (
    <div className={css.root}>
      {children}
    </div>
  );
};

export default Card;
