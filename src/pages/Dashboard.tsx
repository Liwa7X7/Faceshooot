import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { CourseHeader } from '../components/CourseHeader';
import { AttendanceList } from '../components/AttendanceList';
import { AttendanceFilters } from '../components/attendance/AttendanceFilters';
import { PageHeader } from '../components/layout/PageHeader';
import type { AttendanceRecord, CourseStats } from '../types/attendance';

// Mock data for demonstration
const mockCourseStats: CourseStats = {
  totalStudents: 35,
  presentToday: 32,
  attendanceRate: 91,
  courseName: 'Computer Science 101',
};

const mockAttendance: AttendanceRecord[] = [
  {
    id: '1',
    studentId: 'CS2023001',
    studentName: 'Alice Johnson',
    course: 'CS101',
    status: 'present',
    timestamp: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
  },
  {
    id: '2',
    studentId: 'CS2023015',
    studentName: 'Bob Smith',
    course: 'CS101',
    status: 'late',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
  },
  {
    id: '3',
    studentId: 'CS2023022',
    studentName: 'Carol Williams',
    course: 'CS101',
    status: 'present',
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
  },
  {
    id: '4',
    studentId: 'CS2023008',
    studentName: 'David Brown',
    course: 'CS101',
    status: 'absent',
    timestamp: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
  },
];

export function Dashboard() {
  const navigate = useNavigate();
  const [filteredRecords, setFilteredRecords] = useState(mockAttendance);

  const handleDateChange = (date: string) => {
    // Filter records by date
    console.log('Filter by date:', date);
  };

  const handleStatusFilter = (status: string) => {
    // Filter records by status
    if (status) {
      setFilteredRecords(mockAttendance.filter(record => record.status === status));
    } else {
      setFilteredRecords(mockAttendance);
    }
  };

  const handleCourseFilter = (course: string) => {
    // Filter records by course
    if (course) {
      setFilteredRecords(mockAttendance.filter(record => record.course === course));
    } else {
      setFilteredRecords(mockAttendance);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Attendance Dashboard"
        description="Monitor and manage student attendance"
        action={{
          label: "Start Recognition",
          icon: Camera,
          onClick: () => navigate('/app')
        }}
      />

      <CourseHeader stats={mockCourseStats} />
      
      <AttendanceFilters
        onDateChange={handleDateChange}
        onStatusFilter={handleStatusFilter}
        onCourseFilter={handleCourseFilter}
      />

      <AttendanceList records={filteredRecords} />
    </div>
  );
}