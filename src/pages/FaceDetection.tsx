import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WebcamCapture } from '../components/WebcamCapture';
import { ImageUpload } from '../components/ImageUpload';
import { ImagePreview } from '../components/ImagePreview';
import { Camera, Upload } from 'lucide-react';
import { Button } from '../components/Button';

export function FaceDetection() {
  const navigate = useNavigate();
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'webcam' | 'upload'>('webcam');
  const [processing, setProcessing] = useState(false);

  const handleImageCapture = (imageData: string) => {
    setCapturedImage(imageData);
    setProcessing(true);
    // Simulate face recognition processing
    setTimeout(() => {
      setProcessing(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Student Recognition
            </h1>
            <Button
              variant="secondary"
              onClick={() => navigate('/dashboard')}
            >
              View Attendance
            </Button>
          </div>

          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('webcam')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-colors ${
                activeTab === 'webcam'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Camera size={20} />
              Webcam
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-colors ${
                activeTab === 'upload'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Upload size={20} />
              Upload Photo
            </button>
          </div>

          {activeTab === 'webcam' ? (
            <WebcamCapture onCapture={handleImageCapture} />
          ) : (
            <ImageUpload onUpload={handleImageCapture} />
          )}

          {processing && (
            <div className="mt-4 text-center text-gray-600">
              Processing student recognition...
            </div>
          )}

          <ImagePreview imageData={capturedImage} />
        </div>
      </div>
    </div>
  );
}