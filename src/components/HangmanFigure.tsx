function HangmanFigure() {
  const gallowsLines = [
    { x1: 40, y1: 180, x2: 160, y2: 180 },
    { x1: 60, y1: 20, x2: 60, y2: 180 },
    { x1: 60, y1: 20, x2: 140, y2: 20 },
    { x1: 140, y1: 20, x2: 140, y2: 50 },
  ];

  const parts = [
    { type: "line", x1: 140, y1: 70, x2: 140, y2: 120, id: "body" },
    { type: "line", x1: 140, y1: 85, x2: 120, y2: 100, id: "leftArm" },
    { type: "line", x1: 140, y1: 85, x2: 160, y2: 100, id: "rightArm" },
    { type: "line", x1: 140, y1: 120, x2: 120, y2: 140, id: "leftLeg" },
    { type: "line", x1: 140, y1: 120, x2: 160, y2: 140, id: "rightLeg" },
  ];

  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      {gallowsLines.map((line, i) => (
        <line key={i} {...line} className="stroke-gray-200 stroke-[4px]" />
      ))}

      <circle cx="140" cy="60" r="10" className="stroke-pink stroke-[4px]" />

      {parts.map((part) => (
        <line key={part.id} {...part} className="stroke-pink stroke-[4px]" />
      ))}
    </svg>
  );
}

export default HangmanFigure;
