import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
 
const data = [
  { name: "Jan", uv: 200, pv: 500, amt: 2400 },
  { name: "Feb", uv: 220, pv: 200, amt: 2210 },
  { name: "Mar", uv: 230, pv: 180, amt: 2290 },
  { name: "Apr", uv: 260, pv: 280, amt: 2000 },
  { name: "May", uv: 280, pv: 250, amt: 2181 },
  { name: "Jun", uv: 290, pv: 220, amt: 2500 },
  { name: "Jul", uv: 270, pv: 270, amt: 2400 },
  { name: "Aug", uv: 260, pv: 240, amt: 2300 },
  { name: "Sep", uv: 250, pv: 180, amt: 2100 },
  { name: "Oct", uv: 240, pv: 140, amt: 2100 },
  { name: "Nov", uv: 230, pv: 210, amt: 2210 },
  { name: "Dec", uv: 220, pv: 150, amt: 2290 },
];
 
const Chart = () => {
  return (
    <div>
      
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={730}
          height={200}
          data={data}
          margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="total2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#323C4C" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#323C4C" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            stroke="gray"
            axisLine={false}
            tickMargin={20}
          />
          <YAxis
            type="number"
            domain={[0, 500]}
            ticks={[0, 100, 200, 300, 400, 500]}
            stroke="gray"
            axisLine={false}
            tickMargin={20}
          />
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#4FD1C5"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#total)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#323C4C"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#total2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
 
export default Chart;
 