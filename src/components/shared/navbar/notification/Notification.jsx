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
    <div className=" min-w-[308px] min-h-[248px] absolute top-14 right-2 md:right-20  p-4 z-20 transition-transform duration-500 notification-modal" style={{borderRadius: '15px',
    background: 'linear-gradient(199deg, #624652 0%, #432144 100%)',
    boxShadow: '10px 10px 4px 0px rgba(0, 0, 0, 0.25)'}}>
      <p className="text-center text-[#E5BD9D] text-sm tracking-wide">
        Notifications
      </p>
      <div className="mt-4" >
        {[1, 2, 3].map((friendReqNotification) => (
          <div
            key={friendReqNotification}
            className="fnd-notification-bg  p-2 px-3 rounded-2xl flex items-center justify-between mb-2">
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
