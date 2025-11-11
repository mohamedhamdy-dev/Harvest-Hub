// SensorAnalytics.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts";
import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import propTypes from "prop-types";
import { sensorHealthData } from "../assets2/sensorHealth";

const fieldData = {
  "West Zone": [
    { time: "08:00", moisture: 38, temperature: 26, humidity: 60 },
    { time: "10:00", moisture: 42, temperature: 28, humidity: 65 },
    { time: "12:00", moisture: 45, temperature: 30, humidity: 70 },
    { time: "14:00", moisture: 40, temperature: 31, humidity: 75 },
    { time: "16:00", moisture: 39, temperature: 30, humidity: 72 },
  ],
  "North Field": [
    { time: "08:00", moisture: 36, temperature: 25, humidity: 55 },
    { time: "10:00", moisture: 40, temperature: 27, humidity: 60 },
    { time: "12:00", moisture: 41, temperature: 29, humidity: 64 },
    { time: "14:00", moisture: 39, temperature: 30, humidity: 68 },
    { time: "16:00", moisture: 38, temperature: 29, humidity: 65 },
  ],
};

function getStats(data, key) {
  const values = data.map((d) => d[key]);
  const sum = values.reduce((a, b) => a + b, 0);
  return {
    avg: (sum / values.length).toFixed(1),
    min: Math.min(...values),
    max: Math.max(...values),
  };
}

export default function SensorAnalytics() {
  const [selectedField, setSelectedField] = useState("West Zone");
  const data = fieldData[selectedField];

  const moistureStats = getStats(data, "moisture");
  const tempStats = getStats(data, "temperature");
  const humidityStats = getStats(data, "humidity");

  return (
    <div className="space-y-6 rounded-2xl p-6 shadow-md">
      <div className="mb-6 w-72">
        <Select
          label="Select Field"
          value={selectedField}
          onChange={(val) => setSelectedField(val)}
          menuProps={{ className: "z-[999]" }} // make sure it's above other content
          className="border-none bg-white text-xl font-bold text-green-500"
          labelProps={{
            className: "hidden",
          }}
          icon={<ChevronDownIcon className="h-5 w-5 text-green-500" />}
        >
          {Object.keys(fieldData).map((field) => (
            <Option
              key={field}
              value={field}
              className="text-green-600 transition-colors hover:bg-green-100 hover:text-green-800"
            >
              {field}
            </Option>
          ))}
        </Select>
      </div>

      <div className="rounded-2xl bg-white p-3">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="time" tick={{ fill: "#4b5563", fontSize: 12 }} />
            <YAxis tick={{ fill: "#4b5563", fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#f9fafb", borderRadius: 8 }}
              labelStyle={{ color: "#6b7280", fontWeight: 500 }}
            />
            <Legend />
            <ReferenceLine
              y={45}
              stroke="#22c55e"
              strokeDasharray="3 3"
              label={{ value: "Moisture Max", fill: "#16a34a" }}
            />

            <Line
              type="monotone"
              dataKey="moisture"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Soil Moisture"
            />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Temperature"
            />
            <Line
              type="monotone"
              dataKey="humidity"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Humidity"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* KPI Boxes */}
      <div className="grid grid-cols-1 gap-4 rounded-2xl bg-white p-5 lg:grid-cols-3">
        <div className="rounded-xl bg-green-50 p-4 text-green-700 shadow">
          <h4 className="text-sm font-semibold">Soil Moisture</h4>
          <p className="text-lg font-bold">Avg: {moistureStats.avg}%</p>
          <p className="text-sm">
            Min: {moistureStats.min}% | Max: {moistureStats.max}%
          </p>
        </div>
        <div className="rounded-xl bg-blue-50 p-4 text-blue-700 shadow">
          <h4 className="text-sm font-semibold">Temperature</h4>
          <p className="text-lg font-bold">Avg: {tempStats.avg}°C</p>
          <p className="text-sm">
            Min: {tempStats.min}°C | Max: {tempStats.max}°C
          </p>
        </div>
        <div className="rounded-xl bg-yellow-50 p-4 text-yellow-700 shadow">
          <h4 className="text-sm font-semibold">Humidity</h4>
          <p className="text-lg font-bold">Avg: {humidityStats.avg}%</p>
          <p className="text-sm">
            Min: {humidityStats.min}% | Max: {humidityStats.max}%
          </p>
        </div>
      </div>

      {/* Device Health */}

      <div className="mt-6">
        <h3 className="mb-4 text-2xl font-bold text-white">Device Health</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {sensorHealthData.map((sensor, index) => (
            <SensorHealthCard key={index} {...sensor} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SensorHealthCard({ name, status, battery, batteryColor, lastSync }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow">
      <h4 className="mb-2 font-semibold text-gray-700">{name}</h4>
      <p className="text-sm text-gray-600">
        Status: <span className="font-medium text-green-600">{status}</span>
      </p>
      <p className="text-sm text-gray-600">
        Battery:{" "}
        <span className={`font-medium ${batteryColor}`}>{battery}%</span>
      </p>
      <p className="text-sm text-gray-600">Last Sync: {lastSync}</p>
    </div>
  );
}

SensorHealthCard.propTypes = {
  name: propTypes.string,
  status: propTypes.string,
  battery: propTypes.number,
  batteryColor: propTypes.string,
  lastSync: propTypes.string,
};
