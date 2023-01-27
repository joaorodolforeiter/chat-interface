import { X } from "phosphor-react";

export function ChatHeader({ profileName, profilePhoto }) {
  return (
    <div className="flex w-full justify-between mb-6">
      <div className="flex">
        <img
          className="w-12 mr-4 rounded-full"
          src={profilePhoto}
          alt="profile photo"
        />
        <div className="flex flex-col justify-center">
          <div className="text-[#E1E1E6] text-base font-bold">
            {profileName}
          </div>
          <div className="text-[#00B37E] text-xs flex items-center">
            <div className="h-2 w-2 mr-1 bg-green-300 rounded-full" /> Online
          </div>
        </div>
      </div>
      <X color="#FFFFFF" size={20} />
    </div>
  );
}
