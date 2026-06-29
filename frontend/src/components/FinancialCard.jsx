import React from 'react'

const FinancialCard = (
    {icon, 
    label, 
    value , 
    additionalContent,
    borderColor = "border-slate-700", 
    bgColor = "bg-slate-900"
}) => (
    <div
  className={`${bgColor} rounded-xl p-5 lg:-mx-2 lg:p-2 shadow-sm border transition-all hover:shadow-md ${borderColor}`}
>
        <div className='text-sm font-medium text-slate-300 flex items-center gap-2'>
            {icon}
            {label}
        </div>
        <p className='text-2xl font-bold text-slate-100 mt-1'>{value}</p>
        {additionalContent}
    </div>
)
export default FinancialCard