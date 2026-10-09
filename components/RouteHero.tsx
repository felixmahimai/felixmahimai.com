const nodes = [
  { x: 90, y: 250, label: "Evidence", delay: 1.0 },
  { x: 330, y: 110, label: "Cities", delay: 1.7 },
  { x: 570, y: 230, label: "Delivery", delay: 2.4 },
  { x: 810, y: 90, label: "Technology", delay: 3.1 },
];

export default function RouteHero() {
  return (
    <svg
      viewBox="0 0 900 320"
      role="img"
      aria-label="A route line linking four themes: evidence, cities, delivery and technology"
      className="w-full h-auto"
    >
      <path
        className="route-path"
        d="M 20 270 C 90 250, 150 120, 330 110 S 500 250, 570 230 S 740 70, 880 80"
        fill="none"
        stroke="#9B7049"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {nodes.map((n) => (
        <g key={n.label}>
          <circle
            className="route-node"
            style={{ animationDelay: `${n.delay}s` }}
            cx={n.x}
            cy={n.y}
            r="7"
            fill="#F4F0E8"
            stroke="#30382F"
            strokeWidth="2"
          />
          <text
            className="route-label"
            style={{ animationDelay: `${n.delay + 0.2}s` }}
            x={n.x}
            y={n.y + 30}
            textAnchor="middle"
            fontSize="13"
            letterSpacing="1.8"
            fill="#30382F"
            fontFamily="Inter Variable, sans-serif"
          >
            {n.label.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}
