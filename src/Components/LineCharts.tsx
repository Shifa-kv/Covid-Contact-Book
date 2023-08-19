import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const LineCharts = ({ data }: any) => {
  
  //Extracting data for chart
  const chartData = Object.keys(data.cases).map((values) => ({
    name: values,
    cases: data.cases[values],
    deaths: data.deaths[values],
    recovered: data.recovered[values],
  }));

  // custom Tooltip for chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded py-2 px-2 bg-black text-sm">
          <p>{label}</p>
          <p className="text-sky-500">Cases : {payload[0].value} </p>
          <p className="text-red-500">Deaths : {payload[1].value} </p>
          <p className="text-green-500">Recovered : {payload[2].value} </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <Line type="monotone" dataKey="cases" stroke="#0ea5e9" strokeWidth={2} name='cases' />
        <Line type="monotone" dataKey="deaths" stroke="#ff0000" strokeWidth={2} name="Deaths" />
        <Line type="monotone" dataKey="recovered" stroke="#00ff00" name="Recovered" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip content={CustomTooltip} />
      </LineChart>
    </ResponsiveContainer>
  )
}
export default LineCharts
