export default function Result(props) {
  const { winMessage } = props;
  return (
    <footer>
      {!winMessage && <h2>Waiting for your choice!</h2>}
      {winMessage && <h2 data-testid="winMessage">{winMessage}</h2>}
    </footer>
  );
}
