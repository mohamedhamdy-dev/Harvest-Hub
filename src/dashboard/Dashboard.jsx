import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import propTypes from "prop-types";

const COLORS = ["#4CAF50", "#FF9800", "#2196F3"];

export default function Dashboard({
  barData,
  lineData,
  pieData,
  barTitle,
  lineTitle,
  pieTitle,
}) {
  const BarKey1 = Object.keys(barData[0])[0];
  const BarKey2 = Object.keys(barData[0])[1];
  const LineKey1 = Object.keys(lineData[0])[0];
  const LineKey2 = Object.keys(lineData[0])[1];

  return (
    <div dir="ltr" className="grid grid-cols-3 gap-4">
      {/* Bar Chart */}
      <div className="col-span-3 row-start-1 rounded-2xl bg-white p-4 shadow-lg lg:col-span-2 lg:row-start-1">
        <h2 className="mb-2 text-xl font-semibold">{barTitle}</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey={BarKey1} />
            <YAxis />
            <Tooltip />
            <Bar dataKey={BarKey2} fill="#4CAF50" barRadius={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="col-span-3 row-start-2 rounded-2xl bg-white p-4 shadow-lg lg:col-span-2 lg:row-start-2">
        <h2 className="mb-2 text-xl font-semibold">{lineTitle}</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey={LineKey1} />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey={LineKey2}
              stroke="#FF9800"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="col-span-3 row-start-3 rounded-2xl bg-white p-4 shadow-lg lg:col-start-3 lg:row-span-2 lg:row-start-1">
        <h2 className="mb-2 text-xl font-semibold">{pieTitle}</h2>
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {pieData?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  barData: propTypes.array,
  lineData: propTypes.array,
  pieData: propTypes.array,
  barTitle: propTypes.string,
  lineTitle: propTypes.string,
  pieTitle: propTypes.string,
};
