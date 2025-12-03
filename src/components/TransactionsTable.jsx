import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit2, Trash2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import EditTransactionDialog from '@/components/EditTransactionDialog';
import DeleteConfirmDialog from '@/components/DeleteConfirmDialog';
import { getCategoryIcon, getCategoryColor } from '@/lib/categories';

const TransactionsTable = ({ transactions, onUpdate, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [deletingTransaction, setDeletingTransaction] = useState(null);

  const filteredTransactions = transactions.filter(t =>
    t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className='bg-white rounded-xl shadow-md border border-slate-200 p-6'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-bold text-slate-800'>Transactions</h2>
        <div className='relative w-64'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400' />
          <Input
            type='text'
            placeholder='Search transactions...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='pl-10'
          />
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-slate-200'>
              <th className='text-left py-3 px-4 text-sm font-semibold text-slate-600'>Date</th>
              <th className='text-left py-3 px-4 text-sm font-semibold text-slate-600'>Description</th>
              <th className='text-left py-3 px-4 text-sm font-semibold text-slate-600'>Category</th>
              <th className='text-right py-3 px-4 text-sm font-semibold text-slate-600'>Amount</th>
              <th className='text-center py-3 px-4 text-sm font-semibold text-slate-600'>Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {filteredTransactions.map((transaction) => {
                const CategoryIcon = getCategoryIcon(transaction.category);
                const categoryColor = getCategoryColor(transaction.category);
                
                return (
                  <motion.tr
                    key={transaction.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className='border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200'
                  >
                    <td className='py-4 px-4 text-sm text-slate-600'>
                      {formatDate(transaction.date)}
                    </td>
                    <td className='py-4 px-4 text-sm font-medium text-slate-800'>
                      {transaction.description}
                    </td>
                    <td className='py-4 px-4'>
                      <div className='flex items-center gap-2'>
                        <div className={`w-8 h-8 ${categoryColor} rounded-lg flex items-center justify-center`}>
                          <CategoryIcon className='w-4 h-4 text-white' />
                        </div>
                        <span className='text-sm text-slate-600 capitalize'>{transaction.category}</span>
                      </div>
                    </td>
                    <td className={`py-4 px-4 text-right text-sm font-semibold ${
                      transaction.type === 'income' ? 'text-emerald-600' : 'text-rose-600'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </td>
                    <td className='py-4 px-4'>
                      <div className='flex items-center justify-center gap-2'>
                        <Button
                          variant='ghost'
                          size='icon'
                          onClick={() => setEditingTransaction(transaction)}
                          className='hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200'
                        >
                          <Edit2 className='w-4 h-4' />
                        </Button>
                        <Button
                          variant='ghost'
                          size='icon'
                          onClick={() => setDeletingTransaction(transaction)}
                          className='hover:bg-rose-50 hover:text-rose-600 transition-colors duration-200'
                        >
                          <Trash2 className='w-4 h-4' />
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </AnimatePresence>
          </tbody>
        </table>

        {filteredTransactions.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-slate-400'>No transactions found</p>
          </div>
        )}
      </div>

      <EditTransactionDialog
        transaction={editingTransaction}
        open={!!editingTransaction}
        onOpenChange={(open) => !open && setEditingTransaction(null)}
        onUpdate={onUpdate}
      />

      <DeleteConfirmDialog
        transaction={deletingTransaction}
        open={!!deletingTransaction}
        onOpenChange={(open) => !open && setDeletingTransaction(null)}
        onConfirm={onDelete}
      />
    </div>
  );
};

export default TransactionsTable;