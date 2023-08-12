"use client";
import { useEffect } from "react";
const Notification = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(".notification-modal")) {
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
    <div className="default-gradient w-[400px] h-fit absolute top-14 right-16 rounded-xl p-4 z-20 transition-transform duration-500 notification-modal">
      <p className="text-center text-[#E5BD9D] text-sm tracking-wide">
        Notifications
      </p>
      <div className="mt-4">
        {[1, 2, 3].map((friendReqNotification) => (
          <div
            key={friendReqNotification}
            className="bg-gradient-to-r from-[#523843] to-[#4e3843] p-2 rounded-xl flex items-center justify-between mb-2">
            <p className="text-xs text-[#E5BD9D]">
              Talk with orb 2 hours:
              <span className="text-[10px] text-[#DBCBF4] tracking-wider ml-2">
                3min/2hours
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
