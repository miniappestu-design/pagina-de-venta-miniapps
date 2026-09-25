import React from 'react';
import { handleCheckout, handleWhatsApp, CURRENT_PRICE } from '../data/defaults';
import { MessageCircle, ShoppingBag } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#060a14]/95 backdrop-blur-xl border-t border-cyan-500/30 p-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl shadow-cyan-950/80">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          onClick={handleCheckout}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 bg-gradient-to-r from-cyan-500 to-blue-600 active:from-cyan-400 active:to-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-cyan-500/25 truncate cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 shrink-0" />
          <span className="truncate">🚀 COMPRAR AHORA ({CURRENT_PRICE})</span>
        </button>

        <button
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-1.5 py-3 px-4 bg-emerald-600/90 active:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-xl border border-emerald-400/40 shadow-lg shadow-emerald-950/40 shrink-0 cursor-pointer"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-200" />
          <span>💬 WHATSAPP</span>
        </button>
      </div>
    </div>
  );
};
