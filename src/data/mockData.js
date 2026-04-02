export const summaryData = {
  totalBalance: {
    amount: 54200.5,
    trend: 12.5,
    icon: 'Wallet'
  },
  totalIncome: {
    amount: 12500.0,
    trend: 8.2,
    icon: 'ArrowUpRight'
  },
  totalExpenses: {
    amount: 4300.2,
    trend: -5.4,
    icon: 'ArrowDownRight'
  },
  totalSavings: {
    amount: 8199.8,
    trend: 15.1,
    icon: 'PiggyBank'
  }
};

export const transactions = [
  {
    id: 1,
    date: '2026-03-28',
    description: 'Apple Store Purchase',
    merchant: 'Apple Inc.',
    category: 'Shopping',
    type: 'expense',
    amount: 1299.0,
    status: 'completed'
  },
  {
    id: 2,
    date: '2026-03-27',
    description: 'Monthly Salary',
    merchant: 'Tech Corp',
    category: 'Salary',
    type: 'income',
    amount: 8500.0,
    status: 'completed'
  },
  {
    id: 3,
    date: '2026-03-25',
    description: 'Electricity Bill',
    merchant: 'Power Grid',
    category: 'Bills',
    type: 'expense',
    amount: 145.5,
    status: 'completed'
  },
  {
    id: 4,
    date: '2026-03-24',
    description: 'Grocery Shopping',
    merchant: 'Whole Foods',
    category: 'Food',
    type: 'expense',
    amount: 234.2,
    status: 'pending'
  },
  {
    id: 5,
    date: '2026-03-22',
    description: 'Freelance Project',
    merchant: 'Upwork',
    category: 'Freelance',
    type: 'income',
    amount: 2100.0,
    status: 'completed'
  },
  {
    id: 6,
    date: '2026-03-20',
    description: 'Netflix Subscription',
    merchant: 'Netflix',
    category: 'Entertainment',
    type: 'expense',
    amount: 15.99,
    status: 'completed'
  },
  {
    id: 7,
    date: '2026-03-18',
    description: 'Starbucks Coffee',
    merchant: 'Starbucks',
    category: 'Food',
    type: 'expense',
    amount: 6.5,
    status: 'completed'
  },
  {
    id: 8,
    date: '2026-03-15',
    description: 'Rent Payment',
    merchant: 'Apartment Complex',
    category: 'Bills',
    type: 'expense',
    amount: 2200.0,
    status: 'completed'
  },
  {
    id: 9,
    date: '2026-03-12',
    description: 'Uber Ride',
    merchant: 'Uber',
    category: 'Travel',
    type: 'expense',
    amount: 42.8,
    status: 'completed'
  },
  {
    id: 10,
    date: '2026-03-10',
    description: 'Amazon Prime',
    merchant: 'Amazon',
    category: 'Shopping',
    type: 'expense',
    amount: 14.99,
    status: 'completed'
  }
];

export const balanceHistory = [
  { month: 'Oct', balance: 32000 },
  { month: 'Nov', balance: 35000 },
  { month: 'Dec', balance: 31000 },
  { month: 'Jan', balance: 38000 },
  { month: 'Feb', balance: 42000 },
  { month: 'Mar', balance: 54200 }
];

export const expenseByCategory = [
  { name: 'Food', value: 1200, color: '#4f46e5' },
  { name: 'Shopping', value: 2500, color: '#10b981' },
  { name: 'Bills', value: 3800, color: '#f59e0b' },
  { name: 'Entertainment', value: 800, color: '#ef4444' },
  { name: 'Travel', value: 1500, color: '#8b5cf6' }
];

export const incomeVsExpenses = [
  { month: 'Jan', income: 7500, expenses: 4200 },
  { month: 'Feb', income: 8200, expenses: 3800 },
  { month: 'Mar', income: 9100, expenses: 4300 },
  { month: 'Apr', income: 8800, expenses: 4100 },
  { month: 'May', income: 9500, expenses: 4600 },
  { month: 'Jun', income: 10200, expenses: 4800 }
];
