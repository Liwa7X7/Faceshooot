import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import type { RecognitionResult } from '../types/recognition';

interface RecognitionListProps {
  recognitions: RecognitionResult[];
}

export function RecognitionList({ recognitions }: RecognitionListProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Recent Recognitions</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {recognitions.map((recognition) => (
          <div key={recognition.id} className="p-6 flex items-center gap-4">
            <img
              src={recognition.imageUrl}
              alt={recognition.personName}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900">
                {recognition.personName}
              </h3>
              <p className="text-sm text-gray-500">
                {formatDistanceToNow(new Date(recognition.timestamp), { addSuffix: true })}
              </p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {recognition.confidence.toFixed(1)}% match
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}