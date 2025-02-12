"use client";

import React from "react";
import DashboardLayout from "./DashboardLayout";
import SocialAccounts from "./SocialAccounts";
import PostStatistics from "./PostStatistics";
import UpcomingPosts from "./UpcomingPosts";
import JourneysSection from "./JourneysSection";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mt-5 mr-5 ml-5 max-md:mr-2.5 max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 items-center w-full max-md:max-w-full">
            <div className="self-stretch my-auto min-w-60 w-[841px]">
              <SocialAccounts />
              <div className="flex flex-wrap gap-5 items-end mt-5 w-full max-md:max-w-full">
                <PostStatistics />
                <UpcomingPosts />
              </div>
              <JourneysSection />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
