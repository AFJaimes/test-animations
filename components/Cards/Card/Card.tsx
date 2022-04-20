import { FunctionComponent } from 'react';
import { CardProps } from './Card.proptypes';
import css from './Card.module.css';

const Card: FunctionComponent<CardProps> = ({ children, dark = false }) => {
  return (
    <div className={`${css.root} ${dark ? css.darkBg : css.whiteBg}`}>
      {children}
    </div>
  );
};

export default Card;
