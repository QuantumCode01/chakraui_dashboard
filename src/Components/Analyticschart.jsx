import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { value: 320 },
  { value: 240 },
  { value: 120 },
  { value: 290 },
  { value: 500 },
  { value: 420 },
  { value: 480 },
  { value: 300 },
  { value: 160 },
];

export default function Analyticschart() {
  return (
    <div className="h-45 w-full bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl  pl-0 p-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <YAxis
            ticks={[0, 100, 200, 300, 400, 500]}
            style={{ fontSize: 10 }}
            domain={[0, 500]}
            stroke="#fff"
            axisLine={false}
            tickLine={false}
            interval={0}
          />
          <Bar
            dataKey="value"
            fill="#ffffff"
            radius={[10, 10, 10, 10]}
            barSize={6}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
