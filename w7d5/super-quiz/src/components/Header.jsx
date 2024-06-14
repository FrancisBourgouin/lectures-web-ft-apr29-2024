export default function Header(props) {
  const { toggleMode, mode } = props;

  const buttonText =
    mode === "QUIZ" ? "Switch to question creation mode" : "Switch to quiz mode";
  return (
    <header className="Header">
      <h1>Super Quiz of Madness!</h1>
      <button onClick={toggleMode}>{buttonText}</button>
    </header>
  );
}
