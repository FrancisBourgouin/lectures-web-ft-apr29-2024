export default function Results(props) {
  const { amountAnswered, currentPercentage } = props;

  return (
    <section className="Results">
      {amountAnswered > 0 && <p>Current Score: {currentPercentage}</p>}
      <p>Answered {amountAnswered} questions so far</p>
    </section>
  );
}
