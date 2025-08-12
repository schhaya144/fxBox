import React from 'react';
import SVGSprite from './SVGSprite';

const WalletComponent = () => (
  <div className="flex items-center justify-center py-4 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
    <SVGSprite /> {/* Ensures the SVG symbol is loaded in the DOM */}
    <svg className="w-8 h-8 mr-2 fill-current text-yellow-500">
      <use xlinkHref="#icon-wallet1"></use>
    </svg>
    <div className="text-lg font-semibold mr-2">₹0.00</div>
    <span className="text-sm text-gray-300">Total balance</span>
  </div>
);

export default WalletComponent;
