import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import type { CourseStats } from '../types/attendance';

interface CourseHeaderProps {
  stats: CourseStats;
}

export function CourseHeader({ stats }: CourseHeaderProps) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{stats.courseName}</h2>
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <Calendar size={16} />
            <span>{currentDate}</span>
            <Clock size={16} className="ml-4" />
            <span>{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">{stats.presentToday}</p>
            <p className="text-sm text-gray-600">Present Today</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">{stats.attendanceRate}%</p>
            <p className="text-sm text-gray-600">Attendance Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-600">{stats.totalStudents}</p>
            <p className="text-sm text-gray-600">Total Students</p>
          </div>
        </div>
      </div>
    </div>
  );
}