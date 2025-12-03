import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import StatsCards from '@/components/StatsCards';
import TransactionsTable from '@/components/TransactionsTable';
import MonthlySummary from '@/components/MonthlySummary';
import AddTransactionDialog from '@/components/AddTransactionDialog';
import { getInitialTransactions } from '@/lib/sampleData';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    } else {
      const initialData = getInitialTransactions();
      setTransactions(initialData);
      localStorage.setItem('transactions', JSON.stringify(initialData));
    }
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [transactions]);

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const updateTransaction = (id, updatedData) => {
    setTransactions(transactions.map(t => 
      t.id === id ? { ...t, ...updatedData } : t
    ));
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className='min-h-screen'>
      <Header onAddClick={() => setIsAddDialogOpen(true)} />
      
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatsCards 
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            balance={balance}
          />
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8'>
          <motion.div
            className='lg:col-span-2'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TransactionsTable 
              transactions={transactions}
              onUpdate={updateTransaction}
              onDelete={deleteTransaction}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <MonthlySummary transactions={transactions} />
          </motion.div>
        </div>
      </main>

      <AddTransactionDialog 
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onAdd={addTransaction}
      />
    </div>
  );
};

export default Dashboard;