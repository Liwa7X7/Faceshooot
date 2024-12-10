import React from 'react';
import { Users, Clock, BarChart2 } from 'lucide-react';
import type { DashboardStats } from '../types/recognition';

interface StatsProps {
  stats: DashboardStats;
}

export function DashboardStats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Unique People</p>
            <p className="text-2xl font-bold text-gray-900">{stats.uniquePeople}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <BarChart2 className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Recognitions</p>
            <p className="text-2xl font-bold text-gray-900">{stats.totalRecognitions}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Clock className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Last Recognition</p>
            <p className="text-2xl font-bold text-gray-900">{stats.lastRecognition}</p>
          </div>
        </div>
      </div>
    </div>
  );
}