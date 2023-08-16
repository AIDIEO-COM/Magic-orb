"use client";
import Image from "next/image";
import { useEffect } from "react";
const FriendRequest = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(".friend-Notification-modal")) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }
  return (
    <div className=" max-w-[400px] h-fit absolute top-14  right-5 md:right-32  p-4 z-20 transition-transform duration-500 friend-Notification-modal" style={{borderRadius: '15px',
    background: 'linear-gradient(199deg, #624652 0%, #432144 100%)',
    boxShadow: '10px 10px 4px 0px rgba(0, 0, 0, 0.25)'}}>
      <p className="text-center text-[#E5BD9D] text-sm tracking-wide">
        Friend request
      </p>
      <div className="mt-4">
        {[1, 2, 3].map((friendReqNotification) => (
          <div
            key={friendReqNotification}
            className="fnd-notification-bg  p-2 rounded-2xl flex items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-1">
              <div className="w-[36px] h-[36px] bg-[#6d6971] rounded-full flex items-center justify-center">
                <Image
                  src="https://i.ibb.co/swDCL0H/libra-modified-1.png"
                  alt="libra icon"
                  width={28}
                  height={28}
                  className="w-[28px] h-[28px]"
                />
              </div>
              <p className="text-xs text-[#E5BD9D]">Talk with orb 2 hours:</p>
            </div>
            <div className="flex items-center justify-center mt-2 gap-2">
              <button className="text-[#E5BD9D] text-xs bg-[#674B53] px-2 font-semibold rounded-lg py-1">
                Save
              </button>
              <button className="text-[#E5BD9D] text-xs px-2 font-semibold rounded-lg py-1 ">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendRequest;
