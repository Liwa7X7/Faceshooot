import React from 'react';
import { Calendar, Filter } from 'lucide-react';

interface AttendanceFiltersProps {
  onDateChange: (date: string) => void;
  onStatusFilter: (status: string) => void;
  onCourseFilter: (course: string) => void;
}

export function AttendanceFilters({
  onDateChange,
  onStatusFilter,
  onCourseFilter,
}: AttendanceFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex gap-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
        <div className="relative">
          <input
            type="date"
            onChange={(e) => onDateChange(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
        <select
          onChange={(e) => onStatusFilter(e.target.value)}
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Statuses</option>
          <option value="present">Present</option>
          <option value="late">Late</option>
          <option value="absent">Absent</option>
        </select>
        <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
        <select
          onChange={(e) => onCourseFilter(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Courses</option>
          <option value="CS101">CS101 - Introduction to Programming</option>
          <option value="CS201">CS201 - Data Structures</option>
          <option value="CS301">CS301 - Algorithms</option>
        </select>
      </div>
    </div>
  );
}