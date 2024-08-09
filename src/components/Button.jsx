import React from 'react';


const Button = ({ icon, onClick, label, disabled }) => (
  <button
    onClick={onClick}
    className={`font-roboto flex items-center justify-center p-2 border border-green-600 text-green-600 rounded-full focus:ring-opacity-50 ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
    disabled={disabled}
  >
    {icon}
    <span className="">{label}</span>
  </button>
);

export default Button