import { useEffect, useRef } from "react";
import * as d3 from "d3";

const barData = [
  {
    date: '2024-02-21',
    value: 1
  },
  {
    date: '2024-02-22',
    value: 2
  },
  {
    date: '2024-02-23',
    value: 3
  },
  {
    date: '2024-02-24',
    value: 4
  },
  {
    date: '2024-02-25',
    value: 5
  },
]

export default function Bar() {
  const svgref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const width = 600;
    const height = 600;

    const currentElement = svgref.current;
    const svg = d3
      .select(currentElement)
      .call(g => g.select('svg').remove())
      .append('svg')
      .attr("viewBox", [0, 0, width, height]);

    const parseDate = d3.timeParse("%Y-%m-%d");

    const data = barData.map(v => ({
      ...v,
      d: parseDate(v.date)
    }))

    
  });
  return (
    <div>
      <header>
        <h3>Bar Chart</h3>
      </header>
      <div>
        <div ref={svgref}></div>
      </div>
    </div>
  );
}
