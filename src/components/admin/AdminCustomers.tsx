import React from 'react';
import { Users, Crown, Gift, Wallet, Phone, Mail, Award } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const AdminCustomers: React.FC = () => {
  const { customers } = useStore();

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-playfair font-bold text-2xl text-[#FFF1C5]">Patron Roster & Loyalty Club</h2>
          <p className="text-xs text-slate-400 font-poppins">Manage VIP patron profiles, reward points, wallet balances, and purchase logs.</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] font-montserrat font-bold text-xs uppercase">
            {customers.length} Registered VIPs
          </span>
        </div>
      </div>

      {/* Customer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((cust) => (
          <div key={cust.id} className="p-6 rounded-2xl glass-card border border-[#D4AF37]/30 space-y-4">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#081B4B] flex items-center justify-center font-playfair font-bold text-lg border-2 border-[#FFF1C5]">
                  {cust.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-base text-slate-100">{cust.name}</h3>
                  <p className="text-[10px] text-[#D4AF37] uppercase font-montserrat font-semibold">{cust.membershipTier} Tier</p>
                </div>
              </div>

              <Crown className="w-5 h-5 text-[#D4AF37]" />
            </div>

            <div className="space-y-1.5 text-xs text-slate-300 font-poppins pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{cust.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{cust.phone}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800 text-center">
              <div className="p-2 rounded-xl bg-[#081B4B] border border-[#D4AF37]/20">
                <span className="text-[10px] text-slate-400 font-montserrat uppercase block">Total Spent</span>
                <span className="font-playfair font-bold text-sm text-[#FFF1C5]">
                  ₹{cust.totalSpent.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="p-2 rounded-xl bg-[#081B4B] border border-[#D4AF37]/20">
                <span className="text-[10px] text-slate-400 font-montserrat uppercase block">Reward Points</span>
                <span className="font-playfair font-bold text-sm text-emerald-400">
                  {cust.rewardPoints} pts
                </span>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 text-center">
              Member since {new Date(cust.createdAt).toLocaleDateString()} • {cust.orderCount} Orders Placed
            </p>

          </div>
        ))}
      </div>

    </div>
  );
};
