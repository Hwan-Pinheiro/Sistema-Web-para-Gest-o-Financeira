import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ onAddClick }) => {
  return (
    <header className='bg-white shadow-sm border-b border-slate-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex items-center justify-between'>
          <motion.div 
            className='flex items-center gap-3'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center'>
              <Wallet className='w-6 h-6 text-white' />
            </div>
            <div>
              <h1 className='text-2xl font-bold text-slate-800'>Financial Control</h1>
              <p className='text-sm text-slate-500'>Manage your money wisely</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button 
              onClick={onAddClick}
              className='bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <Plus className='w-4 h-4 mr-2' />
              Add Transaction
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;