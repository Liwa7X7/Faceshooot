import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut, User, BarChart2, Settings } from 'lucide-react';
import type { User as UserType } from '../../types/user';

interface NavbarProps {
  user: UserType;
  onLogout: () => void;
}

export function Navbar({ user, onLogout }: NavbarProps) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="text-xl font-bold text-gray-900">
              AttendanceSystem
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/dashboard"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
            >
              <BarChart2 size={20} />
              Dashboard
            </Link>
            {user.role === 'admin' && (
              <Link
                to="/settings"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              >
                <Settings size={20} />
                Settings
              </Link>
            )}
            <div className="flex items-center gap-3 ml-6">
              <img
                src={user.imageUrl || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces'}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">{user.name}</span>
              <button
                onClick={onLogout}
                className="text-gray-600 hover:text-gray-900"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}