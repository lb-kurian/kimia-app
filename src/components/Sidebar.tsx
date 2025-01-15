'use client';
import React from 'react';
import { Home, Settings, CreditCard, Bell, HelpCircle, LogOut, Folder, Cog } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

const Sidebar: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <div className="w-[238px] h-[1121px] p-4 border-r border-[rgba(28,28,28,0.10)] flex flex-col items-center gap-7">
      {/* Logo */}
      <div className="self-stretch h-[38px] pb-3 flex flex-col items-start gap-1">
        <div className="w-[107px] h-[43px] px-[26px] py-2 flex items-center gap-2.5">
          <div>
            <span className="text-kmia-blue text-[34.24px] font-gugi tracking-[0.17px]">K</span>
            <span className="text-kmia-dark-blue text-[34.24px] font-gugi tracking-[0.17px]"> </span>
            <span className="text-kmia-blue text-[34.24px] font-gugi tracking-[0.17px]">MIA</span>
          </div>
          <div className="w-[14.93px] h-[25.68px] border-[0.71px] border-kmia-orange"></div>
        </div>
      </div>

      {/* Navigation */}
      <div className="self-stretch h-[156px] flex flex-col items-start gap-2">
        <div className="self-stretch h-[68px] flex flex-col justify-center items-center gap-1">
          <Link href="/dashboard" className="self-stretch h-7 py-1 px-8 pr-3 rounded-lg flex flex-col justify-center items-start gap-1">
            <div className="self-stretch flex items-center gap-[9px]">
              <Home className="w-5 h-5 text-black" />
              <div className="text-kmia-orange text-sm font-bold leading-5">Initiation</div>
            </div>
          </Link>
          <Link href="/dashboard/brand-information" className="self-stretch p-2 rounded-xl flex items-center gap-1">
            <Folder className="w-5 h-5 text-[#1D1B20]" />
            <div className="flex-1 h-5 rounded-lg flex items-center gap-2">
              <div className="flex-1 rounded-lg flex flex-col justify-center items-start">
                <div className="self-stretch text-[#313D4F] text-sm leading-5">Brand information</div>
              </div>
            </div>
          </Link>
        </div>
        <Link href="/dashboard/system-settings" className="self-stretch h-9 flex flex-col items-center">
          <div className="self-stretch p-2 rounded-xl flex items-center gap-1">
            <Cog className="w-5 h-5 text-[#1D1B20]" />
            <div className="flex-1 h-5 rounded-lg flex items-center gap-2">
              <div className="flex-1 rounded-lg flex flex-col justify-center items-start">
                <div className="self-stretch text-[#313D4F] text-sm leading-5">System settings</div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/dashboard/assets" className="self-stretch h-9 flex flex-col items-center">
          <div className="self-stretch p-2 rounded-xl flex items-center gap-1">
            <Folder className="w-5 h-5 text-[#1D1B20]" />
            <div className="flex-1 h-5 rounded-lg flex items-center gap-2">
              <div className="flex-1 rounded-lg flex flex-col justify-center items-start">
                <div className="self-stretch text-[#313D4F] text-sm leading-5">Assets</div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Settings and User */}
      <div className="h-36 pt-[34px] flex flex-col justify-end items-center">
        <div className="self-stretch h-[168px] flex flex-col items-start gap-4">
          <div className="self-stretch h-28 flex flex-col items-start gap-2">
            <Link href="/dashboard/settings" className="self-stretch flex items-start gap-2">
              <Settings className="w-4 h-4 text-[#1D1B20]" />
              <div className="flex-1 text-[#202224] text-sm font-medium tracking-[0.3px]">Settings</div>
            </Link>
            <Link href="/dashboard/billing" className="self-stretch flex items-start gap-2">
              <CreditCard className="w-[18px] h-[13px] text-black" />
              <div className="flex-1 text-[#202224] text-sm font-medium tracking-[0.3px]">Billing</div>
            </Link>
            <Link href="/dashboard/notifications" className="self-stretch flex items-start gap-2">
              <Bell className="w-3 h-3.5 text-black" />
              <div className="flex-1 text-[#202224] text-sm font-medium tracking-[0.3px]">Notification</div>
            </Link>
            <Link href="/dashboard/help" className="self-stretch flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-black" />
              <div className="flex-1 text-[#202224] text-sm font-medium tracking-[0.3px]">Help</div>
            </Link>
            <button onClick={signOut} className="w-[131px] flex items-start gap-2">
              <LogOut className="w-4 h-4 text-black" />
              <div className="flex-1 h-4 flex justify-center items-center">
                <div className="text-[#202224] text-sm font-medium tracking-[0.3px]">Logout Account</div>
              </div>
            </button>
          </div>
          <div className="w-10 h-10 relative bg-[#E0E0E0] rounded-full overflow-hidden">
            <div className="w-[28.18px] h-[25.63px] absolute left-[5.91px] top-[10px] bg-[#21005D]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

