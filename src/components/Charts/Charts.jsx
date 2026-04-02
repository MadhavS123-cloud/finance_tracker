import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';
import './Charts.css';

const ChartCard = ({ title, children, className }) => (
  <div className={`chart-card ${className}`}>
    <h3 className="title-card">{title}</h3>
    <div className="chart-container">
      {children}
    </div>
  </div>
);

const Charts = ({ balanceHistory, expenseByCategory, incomeVsExpenses }) => {
  return (
    <div className="charts-grid">
      <ChartCard title="Balance Trend" className="span-2">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={balanceHistory}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Area type="monotone" dataKey="balance" stroke="#4f46e5" fillOpacity={1} fill="url(#colorBalance)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Spending by Category">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={expenseByCategory}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {expenseByCategory.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Income vs Expenses" className="span-2">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={incomeVsExpenses}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              cursor={{fill: '#f1f5f9'}}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend verticalAlign="top" align="right" height={36}/>
            <Bar dataKey="income" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
};

export default Charts;
export { ChartCard };
