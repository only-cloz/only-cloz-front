import React from 'react'
import { CheckCircle2 } from 'lucide-react'

interface TrustBadgeProps {
  text: string
  size?: 'sm' | 'md'
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ text, size = 'sm' }) => {
  return (
    <span className={`flex items-center gap-1.5 ${size === 'md' ? 'text-sm' : 'text-xs'} text-[#111827]/40`}>
      <CheckCircle2
        size={size === 'md' ? 14 : 12}
        className="flex-shrink-0 text-[#7C3AED]"
      />
      {text}
    </span>
  )
}