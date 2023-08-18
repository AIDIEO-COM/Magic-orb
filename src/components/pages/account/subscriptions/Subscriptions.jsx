import React from 'react';

const Subscriptions = ({subscriptionModel}) => {
    return (
        <div className="default-shadow rounded-2xl  bg-[#20192A] p-[15px] h-full lg:w-[100%]">
          <p className="text-2xl font-semibold text-[#DBCBF4] text-center font-sans">
            Subscriptions
          </p>
          <div className="grid grid-cols-3 gap-3 mt-3 h-[calc(100%-44px)]">
            {subscriptionModel.map((subscription) => (
              <div
                key={subscription.id}
                className="account-box-gradient text-center p-3 rounded-2xl h-full">
                <p className="text-[#E5BD9D]  text-sm">
                  {subscription.subscriptionType}
                </p>
                <p className="text-[#DBCBF4] text-xs tracking-wide">
                  {subscription.price}$/mo.
                </p>
                <p className="text-[9px] text-[#E5BD9D] mt-3">
                  {subscription.subscriptionBenefit}
                </p>
              </div>
            ))}
          </div>
        </div>
    );
};

export default Subscriptions;