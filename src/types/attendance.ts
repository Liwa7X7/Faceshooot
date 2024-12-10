export interface Student {
  id: string;
  name: string;
  studentId: string;
  imageUrl: string;
  course: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  course: string;
  timestamp: string;
  imageUrl: string;
  status: 'present' | 'late' | 'absent';
}

export interface CourseStats {
  totalStudents: number;
  presentToday: number;
  attendanceRate: number;
  courseName: string;
}