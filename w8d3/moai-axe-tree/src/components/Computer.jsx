export default function Computer(props) {
  const { isCheating, toggleCheating } = props;
  return (
    <section className="computer">
      <span role="img" onClick={toggleCheating} className={isCheating ? "cheating" : ""} aria-label="robot">
        🤖
      </span>
      <div>
        <h1>EXTERRMINATE !</h1>
        <div className="choices">
          <button>
            <span role="img" aria-label="moai">
              ❔
            </span>
          </button>
          <button>
            <span role="img" aria-label="axe">
              ❔
            </span>
          </button>
          <button>
            <span role="img" aria-label="tree">
              ❔
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
