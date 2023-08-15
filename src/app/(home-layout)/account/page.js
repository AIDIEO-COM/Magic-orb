import PageWrapper from "@/components/transitions/pageWrapper/PageWrapper";
import FirstSection from "@/components/pages/account/FirstSection";
import GrapSection from "@/components/pages/account/GrapSection";

const subscriptionModel = [
  {
    id: "1",
    subscriptionType: "Add Free",
    price: 4.59,
    subscriptionBenefit: "Remove all adds Statistics",
  },
  {
    id: "2",
    subscriptionType: "Entry",
    price: 9.99,
    subscriptionBenefit:
      "Remove all adds Statistics & access to all tools advanced statistics",
  },
  {
    id: "3",
    subscriptionType: "Premium",
    price: 13.29,
    subscriptionBenefit:
      "Remove all adds Statistics & access to all tools advanced statistics. No additional fees download resources personality statistics improvement tips",
  },
];


const Account = () => {
  return (
    <PageWrapper>
      <div className="font-berlin p-3 md:p-4 lg:p-0 h-full w-full flex items-center">
        <div className="">
          <FirstSection subscriptionModel={subscriptionModel}></FirstSection>
          <GrapSection></GrapSection>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Account;
