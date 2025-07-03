import React from "react";

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  description: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  title,
  subtitle,
  period,
  description,
}) => {
  return (
    <div className="flex gap-4">
      <div className="text-emerald-500 text-2xl mt-1">{icon}</div>
      <div>
        <h5 className="font-semibold text-white">{title}</h5>
        <p className="text-emerald-300 text-sm font-medium">{subtitle}</p>
        <p className="text-gray-500 text-xs mt-1 mb-2">{period}</p>
        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
          {description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
