
export function GameBox({ onPlayerClick, val }) {
  // const [val, setVal] = useState(null);
  return (
    <div onClick={onPlayerClick}
      style={{ color: val === "X" ? "green" : "red" }}
      className="game-box">
      {val}
    </div>
  );
}
