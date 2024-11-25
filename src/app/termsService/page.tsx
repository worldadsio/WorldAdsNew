import React from "react";

interface ContentItem {
  subtitle?: string;
  text: string;
  list?: string[];
}

interface Section {
  title: string;
  content: ContentItem[];
}

interface TermsOfUseData {
  title: string;
  effectiveDate: string;
  introduction: string;
  sections: Section[];
  conclusion: string;
}

const termsOfUseData: TermsOfUseData = {
  title: "Terms of Use for WorldAds",
  effectiveDate: "Welcome to WorldAds",
  introduction: "Welcome to WorldAds! These Terms of Use (Terms) govern your access to and use of the WorldAds services, including our various websites, SMS, APIs, email notifications, applications, buttons, widgets, ads, commerce services (collectively, the Services), and any information, text, graphics, photos or other materials uploaded, downloaded or appearing on the Services (collectively referred to as Content). Your access to and use of the Services are conditioned on your acceptance of and compliance with these Terms. By accessing or using the Services you agree to be bound by these Terms.",
  sections: [
    {
      title: "1. Basic Terms",
      content: [
        {
          text: "You are responsible for your use of the Services and for any consequences thereof. The Content you submit, post, or display will be able to be viewed by other users of the Services and through third-party services and websites. You should only provide Content that you are comfortable sharing with others under these Terms."
        }
      ]
    },
    {
      title: "2. Privacy",
      content: [
        {
          text: "Our Privacy Policy (link to the privacy policy) describes how we handle the information you provide to us when you use our Services. You understand that through your use of the Services you consent to the collection and use (as set forth in the Privacy Policy) of this information."
        }
      ]
    },
    {
      title: "3. Content on the Services",
      content: [
        {
          text: "All Content, whether publicly posted or privately transmitted, is the sole responsibility of the person who originated such Content. We may not monitor or control the Content posted via the Services and, we cannot take responsibility for such Content. Any use or reliance on any Content or materials posted via the Services or obtained by you through the Services is at your own risk."
        }
      ]
    },
    {
      title: "4. Your Rights",
      content: [
        {
          text: "You retain your rights to any Content you submit, post or display on or through the Services. By submitting, posting or displaying Content on or through the Services, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such Content in any and all media or distribution methods (now known or later developed)."
        }
      ]
    },
    {
      title: "5. Restrictions on Content and Use of the Services",
      content: [
        {
          text: "We reserve the right at all times (but will not have an obligation) to remove or refuse to distribute any Content on the Services and to terminate users or reclaim usernames. Please review the WorldAds Rules (link to rules) to better understand what is prohibited on the Services."
        }
      ]
    },
    {
      title: "6. Copyrights and Trademarks",
      content: [
        {
          text: "The Services and its original content, features, and functionality are and will remain the exclusive property of WorldAds and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of WorldAds."
        }
      ]
    },
    {
      title: "7. Ending These Terms",
      content: [
        {
          text: "You may end your legal agreement with WorldAds at any time by deactivating your accounts and discontinuing your use of the Services."
        }
      ]
    },
    {
      title: "8. Disclaimers and Limitations of Liability",
      content: [
        {
          text: "Please read this section carefully since it limits the liability of WorldAds and its parents, subsidiaries, affiliates, related companies, officers, directors, employees, agents, representatives, partners, and licensors (collectively, the \"WorldAds Entities\"). Each of the subsections below only applies up to the maximum extent permitted under applicable law. Some jurisdictions do not allow the disclaimer of implied warranties or the limitation of liability in contracts, and as a result, the contents of this section may not apply to you."
        }
      ]
    },
    {
      title: "9. General Terms",
      content: [
        {
          text: "We may revise these Terms from time to time. The changes will not be retroactive, and the most current version of the Terms, which will always be at (link to terms), will govern our relationship with you. We will try to notify you of material revisions; for example, via a service notification or an email to the email associated with your account. By continuing to access or use the Services after those revisions become effective, you agree to be bound by the revised Terms."
        }
      ]
    }
  ],
  conclusion: "Thank you for choosing WorldAds!"
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen container mx-auto bg-white pt-40  px-4  ">
      <div className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 ">
        {termsOfUseData.title}
        <h2 className="text-3xl font-normal text-gray-900 mt-4">{termsOfUseData.effectiveDate}</h2>
      </div>
      <div className="mb-4 rounded-lg mt-16 ">
        <p className="text-[16px] font-light text-gray-700">{termsOfUseData.introduction}</p>
      </div>

      <div className="space-y-3">
        {termsOfUseData.sections.map((section, index) => (
          <section key={index} className="bg-white  overflow-hidden sm:rounded-lg">
            <div className="">
              <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
            </div>
            <div className="py-4">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-4 last:mb-0">
                  {item.subtitle && (
                    <h3 className="text-[18px] font-medium text-gray-900 mb-2">
                      {item.subtitle}
                    </h3>
                  )}
                  <p className="text-[16px] text-gray-700">{item.text}</p>
                  {item.list && (
                    <ul className=" mt-2 space-y-1">
                      {item.list.map((listItem, listItemIndex) => (
                        <li key={listItemIndex} className="text-xl text-gray-700">
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-8 text-start text-xl font-semibold text-gray-900">
        {termsOfUseData.conclusion}
      </p>
    </div>
  );
}

