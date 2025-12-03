import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, TrendingDown } from 'lucide-react';
import { getCategoryIcon, getCategoryColor } from '@/lib/categories';

const MonthlySummary = ({ transactions }) => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyTransactions = useMemo(() => {
    return transactions.filter(t => {
      const transactionDate = new Date(t.date);
      return transactionDate.getMonth() === currentMonth && 
             transactionDate.getFullYear() === currentYear;
    });
  }, [transactions, currentMonth, currentYear]);

  const categoryBreakdown = useMemo(() => {
    const breakdown = {};
    monthlyTransactions.forEach(t => {
      if (t.type === 'expense') {
        if (!breakdown[t.category]) {
          breakdown[t.category] = 0;
        }
        breakdown[t.category] += t.amount;
      }
    });
    return breakdown;
  }, [monthlyTransactions]);

  const totalMonthlyIncome = monthlyTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalMonthlyExpenses = monthlyTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const monthName = new Date().toLocaleDateString('en-US', { month: 'long' });

  const sortedCategories = Object.entries(categoryBreakdown)
    .sort((a, b) => b[1] - a[1]);

  const maxAmount = Math.max(...Object.values(categoryBreakdown), 1);

  return (
    <div className='bg-white rounded-xl shadow-md border border-slate-200 p-6'>
      <div className='flex items-center gap-2 mb-6'>
        <PieChart className='w-5 h-5 text-indigo-600' />
        <h2 className='text-xl font-bold text-slate-800'>Monthly Summary</h2>
      </div>

      <div className='mb-6'>
        <p className='text-sm text-slate-500 mb-4'>{monthName} {currentYear}</p>
        <div className='space-y-3'>
          <div className='flex items-center justify-between p-3 bg-emerald-50 rounded-lg'>
            <div className='flex items-center gap-2'>
              <TrendingUp className='w-4 h-4 text-emerald-600' />
              <span className='text-sm font-medium text-slate-700'>Income</span>
            </div>
            <span className='text-sm font-bold text-emerald-600'>
              ${totalMonthlyIncome.toFixed(2)}
            </span>
          </div>
          <div className='flex items-center justify-between p-3 bg-rose-50 rounded-lg'>
            <div className='flex items-center gap-2'>
              <TrendingDown className='w-4 h-4 text-rose-600' />
              <span className='text-sm font-medium text-slate-700'>Expenses</span>
            </div>
            <span className='text-sm font-bold text-rose-600'>
              ${totalMonthlyExpenses.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-sm font-semibold text-slate-700 mb-4'>Expenses by Category</h3>
        <div className='space-y-3'>
          {sortedCategories.map(([category, amount], index) => {
            const CategoryIcon = getCategoryIcon(category);
            const categoryColor = getCategoryColor(category);
            const percentage = (amount / totalMonthlyExpenses) * 100;
            const barWidth = (amount / maxAmount) * 100;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className='space-y-2'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className={`w-6 h-6 ${categoryColor} rounded-md flex items-center justify-center`}>
                      <CategoryIcon className='w-3 h-3 text-white' />
                    </div>
                    <span className='text-sm font-medium text-slate-700 capitalize'>{category}</span>
                  </div>
                  <span className='text-sm font-semibold text-slate-800'>
                    ${amount.toFixed(2)}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='flex-1 h-2 bg-slate-100 rounded-full overflow-hidden'>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${barWidth}%` }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className={`h-full ${categoryColor.replace('bg-', 'bg-gradient-to-r from-').replace('-500', '-400 to-').replace(/\/\d+/, '-600')}`}
                    />
                  </div>
                  <span className='text-xs text-slate-500 w-12 text-right'>
                    {percentage.toFixed(0)}%
                  </span>
                </div>
              </motion.div>
            );
          })}
          
          {sortedCategories.length === 0 && (
            <p className='text-sm text-slate-400 text-center py-4'>No expenses this month</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonthlySummary;