import React from 'react';
import { MapPin, Briefcase, Plus, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileBottomNavProps {
    onOrderClick: () => void;
    onMenuClick: () => void;
    isMenuOpen: boolean;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOrderClick, onMenuClick, isMenuOpen }) => {
    return (
        <>
            {/* Spacer to prevent content from being hidden behind bar */}
            <div className="h-20 lg:hidden" />

            {/* Floating Action Button (Optional, can be removed if specific "Plus" covers it, 
          but usually "Like apps" implies the bar itself contains the actions. 
          The screenshot likely showed a floating button ABOVE the bar too, 
          but for "laconic", let's stick to the bar first. 
          Actually, let's just do the bar as the primary interface.) 
      */}

            <motion.nav
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-slate-200 pb-[env(safe-area-inset-bottom)] lg:hidden transition-all duration-300"
            >
                <div className="flex items-center justify-between px-2 py-2">
                    {/* City */}
                    <div className="flex flex-col items-center gap-1 w-16 text-slate-400">
                        <MapPin className="w-6 h-6" />
                        <span className="text-[10px] font-medium">Ваш город</span>
                    </div>

                    {/* Services */}
                    <a href="#services" className="flex flex-col items-center gap-1 w-16 text-slate-400 hover:text-brand-600 transition-colors">
                        <Briefcase className="w-6 h-6" />
                        <span className="text-[10px] font-medium">Услуги</span>
                    </a>

                    {/* Central Action (Calculate) */}
                    <div className="relative -top-6">
                        <button
                            onClick={onOrderClick}
                            className="w-14 h-14 bg-brand-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-500/30 hover:scale-105 active:scale-95 transition-all border-4 border-white"
                        >
                            <Plus className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Call */}
                    <a href="tel:+73510000000" className="flex flex-col items-center gap-1 w-16 text-slate-400 hover:text-brand-600 transition-colors">
                        <Phone className="w-6 h-6" />
                        <span className="text-[10px] font-medium">Позвонить</span>
                    </a>

                    {/* Menu Toggle */}
                    <button
                        onClick={onMenuClick}
                        className={`flex flex-col items-center gap-1 w-16 transition-colors ${isMenuOpen ? 'text-brand-600' : 'text-slate-400'}`}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        <span className="text-[10px] font-medium">Меню</span>
                    </button>
                </div>
            </motion.nav>
        </>
    );
};

export default MobileBottomNav;
