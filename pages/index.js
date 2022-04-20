import Card from '../components/Cards/Card/Card';
import ScoreCard from '../components/Cards/ScoreCard/ScoreCard';
import FlipCard from '../components/Cards/FlipCard/FlipCard';
import ClickerCard from '../components/Cards/ClickerCard/ClickerCard';
import LoaderCircle from '../components/Loaders/LoaderCircle/LoaderCircle';
import css from '../styles/Styles.module.css';

export default function Home() {
  return (
    <div className={css.root}>
      <Card dark>
        <span className={css.title}>progress bar test</span>
        <LoaderCircle percentage={90} title="90%" />
      </Card>
      <ClickerCard />
      <ScoreCard score={0} />
      <ScoreCard score={14564} />
      <FlipCard
        frontChildren={
          <span className={css.text}>
            test flip card front face <br /><br />
            Hover to flip
          </span>
        }
        backChildren={
          <span className={css.text}>test flip card back face</span>
        }
      />
      <FlipCard
        clickToFlip
        frontChildren={
          <span className={css.text}>click this card to flip it out</span>
        }
        backChildren={
          <span className={css.text}>
            click to unflip the flipeer card flipable
          </span>
        }
      />
    </div>
  );
}
