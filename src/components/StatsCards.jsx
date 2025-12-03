import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

const StatsCards = ({ totalIncome, totalExpenses, balance }) => {
  const stats = [
    {
      title: 'Total Income',
      amount: totalIncome,
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      title: 'Total Expenses',
      amount: totalExpenses,
      icon: TrendingDown,
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-600'
    },
    {
      title: 'Balance',
      amount: balance,
      icon: Wallet,
      color: balance >= 0 ? 'from-blue-500 to-indigo-600' : 'from-amber-500 to-orange-600',
      bgColor: balance >= 0 ? 'bg-blue-50' : 'bg-amber-50',
      iconColor: balance >= 0 ? 'text-blue-600' : 'text-amber-600'
    }
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className='bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow duration-300'
        >
          <div className='flex items-center justify-between mb-4'>
            <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
              <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
            </div>
          </div>
          <h3 className='text-sm font-medium text-slate-500 mb-1'>{stat.title}</h3>
          <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
            ${stat.amount.toFixed(2)}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCards;