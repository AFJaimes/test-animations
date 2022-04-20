import ScoreCard from '../components/Cards/ScoreCard/ScoreCard';

export default function Home() {
  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <ScoreCard score={1} />
      <ScoreCard score={1005} />
      <ScoreCard score={0} />
      <ScoreCard score={14564} />
    </div>
  );
}
