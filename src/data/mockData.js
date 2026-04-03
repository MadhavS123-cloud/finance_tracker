export const summaryData = {
  totalBalance: {
    amount: 142500.00,
    trend: 14.2,
    icon: 'Wallet'
  },
  monthlyIncome: {
    amount: 12500.00,
    trend: 8.2,
    icon: 'ArrowUpRight'
  },
  monthlyExpenses: {
    amount: 3240.50,
    trend: -12.0,
    icon: 'ArrowDownRight'
  },
  savingsRate: {
    amount: 74.1,
    trend: 5.4,
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
  { name: 'Housing', value: 2400, color: '#00D4AA' },
  { name: 'Food', value: 800, color: '#10B981' },
  { name: 'Transport', value: 450, color: '#0EA5E9' },
  { name: 'Entertainment', value: 300, color: '#38BDF8' },
  { name: 'Health', value: 150, color: '#2DD4BF' },
  { name: 'Others', value: 200, color: '#94A3B8' }
];

export const incomeVsExpenses = [
  { month: 'Jan', income: 7500, expenses: 4200 },
  { month: 'Feb', income: 8200, expenses: 3800 },
  { month: 'Mar', income: 9100, expenses: 4300 },
  { month: 'Apr', income: 8800, expenses: 4100 },
  { month: 'May', income: 9500, expenses: 4600 },
  { month: 'Jun', income: 10200, expenses: 4800 }
];
