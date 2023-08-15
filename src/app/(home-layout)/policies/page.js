import PageWrapper from "@/components/transitions/pageWrapper/PageWrapper";

const Policies = () => {
  return (
    <PageWrapper>
      <div className="font-berlin p-3 md:p-4 lg:p-0  py-10 md:py-0 min-h-[calc(100vh-100px)] flex items-center">
        <div className="flex flex-col items-center justify-center max-w-[750px] rounded-xl bg-[#1A1725] shadow-[10px_10px_8px_10px_#00000024] p-5 md:py-8 md:px-14  mx-auto mb-4">
          <p className="text-[#DBCBF4] font-berlin font-semibold text-xl sm:text-3xl">
            Policies
          </p>
          <div>
            <p className="text-[#DBCBF4] text-sm mt-3 mb-2 font-semibold">
              Policies and Disclaimer for a Spiritual Advice and Tools Website:
            </p>
            <div>
              <div className="text-xs tracking-wide text-[#DBCBF4] flex">
                <p>1.</p>
                <div>
                  <p className="inline-block">Terms and Conditions:</p>
                  <article className="inline ml-0.5 text-[#E5BD9D] ">
                    By accessing and using our website, you agree to comply with
                    the terms and conditions outlined below. b. The content on our
                    website is provided for informational and entertainment
                    purposes only. It should not be considered a substitute for
                    professional advice or treatment. c. We reserve the right to
                    modify or discontinue any aspect of the website at any time
                    without prior notice. d. Users must be at least 18 years old
                    to use our website or have parental consent. e. We are not
                    responsible for any actions taken based on the information
                    provided on our website.
                  </article>
                </div>
              </div>
              <div className="text-xs tracking-wide text-[#DBCBF4] flex">
                <p>2.</p>
                <div>
                  <p className="inline-block">Accuracy of Information:</p>
                  <article className="inline ml-0.5 text-[#E5BD9D] ">
                    a. While we strive to provide accurate and up-to-date
                    information, we make no warranties or representations
                    regarding the completeness, accuracy, reliability, or
                    suitability of the information provided. b. Users should
                    independently verify any information before making decisions
                    or taking any action based on it.
                  </article>
                </div>
              </div>
              <div className="text-xs tracking-wide text-[#DBCBF4] flex">
                <p>3.</p>
                <div>
                  <p className="inline-block">Spiritual Advice:</p>
                  <article className="inline ml-0.5 text-[#E5BD9D] ">
                    a. The spiritual advice provided on our website is intended to
                    offer guidance and support. However, it is important to note
                    that everyone spiritual journey is unique, and our advice may
                    not be applicable to all individuals. b. We do not claim to
                    have all the answers or to be infallible. Our advice should be
                    taken as suggestions, and users are encouraged to exercise
                    their own discernment and judgment. c. Users are solely
                    responsible for any decisions they make based on the spiritual
                    advice provided on our website.
                  </article>
                </div>
              </div>
              <div className="text-xs tracking-wide text-[#DBCBF4] flex">
                <p>4.</p>
                <div>
                  <p className="inline-block">Ethical Standards:</p>
                  <article className="inline ml-0.5 text-[#E5BD9D]">
                    We are committed to upholding ethical standards in all aspects
                    of our work. We prioritize the well-being and empowerment of
                    our users, respecting their individual beliefs, values, and
                    choices. We maintain strict confidentiality regarding any
                    personal information shared with us, ensuring a safe and
                    secure environment for our users.
                  </article>
                </div>
              </div>
              <div className="text-xs tracking-wide text-[#DBCBF4] flex">
                <p>4.</p>
                <div>
                  <p className="inline-block">Third-Party Links:</p>
                  <article className="inline ml-0.5 text-[#E5BD9D]">
                    a. Our website may contain links to third-party websites,
                    resources, or services. These links are provided for
                    convenience, and we do not endorse or have control over the
                    content, policies, or practices of these third-party websites.
                    b. We are not responsible for any damages or losses incurred
                    through the use of third-party websites or resources.
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Policies;
