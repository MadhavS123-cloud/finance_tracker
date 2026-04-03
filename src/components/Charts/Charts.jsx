import React from 'react';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell, Legend
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

const Charts = ({ balanceHistory, expenseByCategory }) => {
  return (
    <div className="charts-grid">
      <ChartCard title="Balance Trend (Last 6 Months)" className="span-2">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={balanceHistory}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00D4AA" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00D4AA" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2D4159" />
            <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val/1000}k`} />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '12px', 
                border: '1px solid rgba(255,255,255,0.1)', 
                backgroundColor: 'rgba(27, 42, 59, 0.8)', 
                backdropFilter: 'blur(10px)',
                color: '#fff', 
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' 
              }}
              itemStyle={{ color: '#00D4AA', fontWeight: 'bold' }}
              cursor={{ stroke: '#00D4AA', strokeWidth: 2 }}
            />
            <Area type="monotone" dataKey="balance" stroke="#00D4AA" fillOpacity={1} fill="url(#colorBalance)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Spending by Category">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={expenseByCategory}
              innerRadius={70}
              outerRadius={95}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {expenseByCategory.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                borderRadius: '12px', 
                border: '1px solid rgba(255,255,255,0.1)', 
                backgroundColor: 'rgba(27, 42, 59, 0.8)', 
                backdropFilter: 'blur(10px)',
                color: '#fff' 
              }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ color: '#94a3b8', fontSize: '12px' }}/>
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
};

export default Charts;
export { ChartCard };
