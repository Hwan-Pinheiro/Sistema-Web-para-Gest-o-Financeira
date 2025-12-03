import { ShoppingCart, Car, Home, Gamepad2, MoreHorizontal, DollarSign } from 'lucide-react';

export const CATEGORIES = [
  { value: 'food', label: 'Food' },
  { value: 'transport', label: 'Transport' },
  { value: 'utilities', label: 'Utilities' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'other', label: 'Other' }
];

export const getCategoryIcon = (category) => {
  const icons = {
    food: ShoppingCart,
    transport: Car,
    utilities: Home,
    entertainment: Gamepad2,
    other: MoreHorizontal,
    income: DollarSign
  };
  return icons[category] || MoreHorizontal;
};

export const getCategoryColor = (category) => {
  const colors = {
    food: 'bg-orange-500',
    transport: 'bg-blue-500',
    utilities: 'bg-purple-500',
    entertainment: 'bg-pink-500',
    other: 'bg-slate-500',
    income: 'bg-emerald-500'
  };
  return colors[category] || 'bg-slate-500';
};