import React from 'react';

interface ImagePreviewProps {
  imageData: string | null;
}

export function ImagePreview({ imageData }: ImagePreviewProps) {
  if (!imageData) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Preview</h2>
      <img
        src={imageData}
        alt="Captured"
        className="max-w-xl rounded-lg shadow-lg"
      />
    </div>
  );
}