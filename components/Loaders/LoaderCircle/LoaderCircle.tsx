import { FunctionComponent } from 'react';
import { LoaderCircleProps } from './LoaderCircle.proptypes';
import css from './LoaderCircle.module.css';

const LoaderCircle: FunctionComponent<LoaderCircleProps> = ({
  title = 'hola',
  percentage,
}) => {
  console.log();
  return (
    <div className={css.root}>
      <svg viewBox="0 0 36 36" className={css.circularChart}>
        <path
          className={css.circleBg}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={`${css.animation} ${css.circle}`}
          stroke-dasharray={`${percentage}, 100`}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={css.transparentCircle}
          id="curve"
          d="M18 3 a 15 15 0 0 1 0 30 a 15 15 0 0 1 0 -30"
        />
        <text width={500}>
          <textPath
            xlinkHref="#curve"
            startOffset="29"
            text-anchor="middle"
            className={`${css.text} ${
              percentage > 0 ? css.fontWhite : css.fontBlack
            }`}
          >
            {title}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default LoaderCircle;
