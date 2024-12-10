import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import type { AttendanceRecord } from '../types/attendance';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

interface AttendanceListProps {
  records: AttendanceRecord[];
}

export function AttendanceList({ records }: AttendanceListProps) {
  const getStatusIcon = (status: AttendanceRecord['status']) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'late':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'absent':
        return <XCircle className="w-5 h-5 text-red-500" />;
    }
  };

  const getStatusClass = (status: AttendanceRecord['status']) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800';
      case 'late':
        return 'bg-yellow-100 text-yellow-800';
      case 'absent':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Today's Attendance</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {records.map((record) => (
          <div key={record.id} className="p-6 flex items-center gap-4">
            <img
              src={record.imageUrl}
              alt={record.studentName}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900">
                {record.studentName}
              </h3>
              <p className="text-sm text-gray-500">
                {record.studentId} • {record.course}
              </p>
              <p className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(record.timestamp), { addSuffix: true })}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {getStatusIcon(record.status)}
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(record.status)}`}>
                {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}