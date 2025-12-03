export const getInitialTransactions = () => {
  const baseDate = new Date();
  
  return [
    {
      id: '1',
      type: 'income',
      description: 'Monthly Salary',
      amount: 3500.00,
      category: 'income',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 1).toISOString()
    },
    {
      id: '2',
      type: 'expense',
      description: 'Grocery Shopping',
      amount: 145.50,
      category: 'food',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 3).toISOString()
    },
    {
      id: '3',
      type: 'expense',
      description: 'Gas Station',
      amount: 55.00,
      category: 'transport',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 5).toISOString()
    },
    {
      id: '4',
      type: 'expense',
      description: 'Electric Bill',
      amount: 89.99,
      category: 'utilities',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 7).toISOString()
    },
    {
      id: '5',
      type: 'expense',
      description: 'Netflix Subscription',
      amount: 15.99,
      category: 'entertainment',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 8).toISOString()
    },
    {
      id: '6',
      type: 'income',
      description: 'Freelance Project',
      amount: 850.00,
      category: 'income',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 10).toISOString()
    },
    {
      id: '7',
      type: 'expense',
      description: 'Restaurant Dinner',
      amount: 67.30,
      category: 'food',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 12).toISOString()
    },
    {
      id: '8',
      type: 'expense',
      description: 'Water Bill',
      amount: 45.00,
      category: 'utilities',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 14).toISOString()
    },
    {
      id: '9',
      type: 'expense',
      description: 'Uber Rides',
      amount: 32.50,
      category: 'transport',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 15).toISOString()
    },
    {
      id: '10',
      type: 'expense',
      description: 'Movie Tickets',
      amount: 28.00,
      category: 'entertainment',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 17).toISOString()
    },
    {
      id: '11',
      type: 'expense',
      description: 'Supermarket',
      amount: 123.75,
      category: 'food',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 18).toISOString()
    },
    {
      id: '12',
      type: 'expense',
      description: 'Internet Bill',
      amount: 59.99,
      category: 'utilities',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 20).toISOString()
    },
    {
      id: '13',
      type: 'expense',
      description: 'Coffee Shop',
      amount: 18.50,
      category: 'food',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 22).toISOString()
    },
    {
      id: '14',
      type: 'expense',
      description: 'Gym Membership',
      amount: 45.00,
      category: 'other',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 23).toISOString()
    },
    {
      id: '15',
      type: 'expense',
      description: 'Public Transport Pass',
      amount: 75.00,
      category: 'transport',
      date: new Date(baseDate.getFullYear(), baseDate.getMonth(), 25).toISOString()
    }
  ];
};