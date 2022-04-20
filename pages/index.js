import Card from '../components/Cards/Card/Card';
import ScoreCard from '../components/Cards/ScoreCard/ScoreCard';
import LoaderCircle from '../components/Loaders/LoaderCircle/LoaderCircle';
import css from '../styles/Styles.module.css';

export default function Home() {
  return (
    <div className={css.root}>
      <Card>
        <span className={css.title}>progress bar test</span>
        <LoaderCircle percentage={90} title="90%" />
      </Card>
      <ScoreCard score={100} />
      <ScoreCard score={0} />
      <ScoreCard score={14564} />
    </div>
  );
}
