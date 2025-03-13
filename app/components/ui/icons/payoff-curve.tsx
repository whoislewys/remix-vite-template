export const SamplePayoff = () => {
    // custom height & width added to enlarge
  return (
    <svg viewBox="0 0 96 32" class="" width={288} height={96}>
      <defs>
        <marker
          id="start-arrow-red"
          markerWidth="5"
          markerHeight="4"
          refX="1"
          refY="2"
          orient="auto"
          fill="#C4403C"
          class="start-marker"
        >
          <polygon points="5 0, 0 2, 5 4"></polygon>
        </marker>
        <marker
          id="start-arrow-green"
          markerWidth="5"
          markerHeight="4"
          refX="1"
          refY="2"
          orient="auto"
          fill="#169269"
          class="start-marker"
        >
          <polygon points="5 0, 0 2, 5 4"></polygon>
        </marker>
        <marker
          id="end-arrow-red"
          markerWidth="5"
          markerHeight="4"
          refX="4"
          refY="2"
          orient="auto"
          fill="#C4403C"
          class="end-marker"
        >
          <polygon points="0 0, 5 2, 0 4"></polygon>
        </marker>
        <marker
          id="end-arrow-green"
          markerWidth="5"
          markerHeight="4"
          refX="4"
          refY="2"
          orient="auto"
          fill="#169269"
          class="end-marker"
        >
          <polygon points="0 0, 5 2, 0 4"></polygon>
        </marker>
      </defs>
      <path
        d="M 4 16 L 4 16 L 21.6 16 L 39.2 16 L 56.800000000000004 16 L 58.56000000000001 16 L 74.4 20.799999999999997 L 92 26.133333333333333 L 92 16 Z"
        fill="#F5555080"
      ></path>
      <path
        d="M 4 16 L 4 4.800000000000001 L 21.6 4.800000000000001 L 39.2 4.800000000000001 L 56.800000000000004 15.466666666666667 L 58.56000000000001 16 L 74.4 16 L 92 16 L 92 16 Z"
        fill="#45E1AF80"
      ></path>
      <line
        x1="4"
        y1="16"
        x2="92"
        y2="16"
        stroke="#695959"
        stroke-width="1.25"
        stroke-opacity=".4"
        stroke-linecap="round"
        stroke-dasharray="0.13 5.14"
      ></line>
      <polyline
        points="4,4.800000000000001 21.6,4.800000000000001 39.2,4.800000000000001 56.800000000000004,15.466666666666667 74.4,20.799999999999997 92,26.133333333333333"
        fill="none"
        stroke="hsl(160, 0%, 33%)"
        stroke-width="2"
      ></polyline>
      <g>
        <polyline
          points="4,4.800000000000001 21.6,4.800000000000001 39.2,4.800000000000001 56.800000000000004,15.466666666666667 58.56000000000001,16"
          fill="none"
          stroke="#169269"
          stroke-width="2"
          marker-start="url(#start-arrow-green)"
          marker-end=""
          style="--marker-color: #169269;"
        ></polyline>
      </g>
      <g>
        <polyline
          points="58.56000000000001,16 74.4,20.799999999999997 92,26.133333333333333"
          fill="none"
          stroke="#C4403C"
          stroke-width="2"
          marker-start=""
          marker-end="url(#end-arrow-red)"
          style="--marker-color: #C4403C;"
        ></polyline>
      </g>
      <circle
        cx="39.2"
        cy="4.800000000000001"
        r="3.357"
        fill="#169269"
        stroke="#0C0C0C"
        stroke-width="1.25"
      ></circle>
      <circle
        cx="56.800000000000004"
        cy="15.466666666666667"
        r="3.357"
        fill="#169269"
        stroke="#0C0C0C"
        stroke-width="1.25"
      ></circle>
    </svg>
  )
}
