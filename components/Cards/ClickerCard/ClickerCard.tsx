import { FunctionComponent, useState } from 'react';
import { ClickerCardProps } from './ClickerCard.proptypes';
import css from './ClickerCard.module.css';
import Card from '../Card/Card';

const ClickerCard: FunctionComponent<ClickerCardProps> = ({}) => {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    setCount(count + 1);
    var d = document.createElement('div');
    d.className = css.clickEffect;
    d.style.top = e.clientY + 'px';
    d.style.left = e.clientX + 'px';
    document.body.appendChild(d);
    d.addEventListener(
      'animationend',
      function () {
        d.parentElement.removeChild(d);
      }.bind(this),
    );
  };

  return (
    <Card dark>
      <div
        className={css.container}
        onMouseDown={handleClick}
      >
        <span className={css.title}>
          Click inside me
          <br />
          <br />
          <br />
          {count}
        </span>
      </div>
    </Card>
  );
};

export default ClickerCard;
