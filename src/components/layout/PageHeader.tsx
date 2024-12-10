import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '../Button';

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: {
    label: string;
    icon?: LucideIcon;
    onClick: () => void;
  };
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
        {action && (
          <Button onClick={action.onClick} icon={action.icon}>
            {action.label}
          </Button>
        )}
      </div>
    </div>
  );
}