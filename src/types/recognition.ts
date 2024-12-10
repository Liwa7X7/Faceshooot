export interface RecognitionResult {
  id: string;
  personName: string;
  confidence: number;
  timestamp: string;
  imageUrl: string;
}

export interface DashboardStats {
  totalRecognitions: number;
  uniquePeople: number;
  lastRecognition: string;
}