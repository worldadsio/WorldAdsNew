import React from "react";

interface ContentItem {
  subtitle?: string;
  text: string;
  list?: string[];
  serviceProviders?: string;
  legalRequirements?: string;
}

interface Section {
  title: string;
  content: ContentItem[];
}

interface PrivacyPolicyData {
  title: string;
  effectiveDate: string;
  introduction: string;
  sections: Section[];
  conclusion: string;
}

const privacyPolicyData: PrivacyPolicyData = {
  title: "WorldAds Privacy Policy",
  effectiveDate: "May, 2024",
  introduction:
    "Welcome to WorldAds! Your privacy is important to us. This Privacy Policy outlines how WorldAds identifies, uses, protects, collects, stores, shares, and discloses information in relation to our mobile services, website, and any software available on or in connection with WorldAds services (collectively, the Service). This policy also describes your choices regarding the collection and use of your information.",
  sections: [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Account Information",
          text: "Account information includes your username, password, and email address when you register for a WorldAds account. Profile information includes information you provide for your user profile, such as your first and last name, avatar, and profile picture.",
        },
        {
          subtitle: "Automatically Collected Information",
          text: "Log and usage data: Information relating to your use of the Service, including traffic data, usage viewed, your IP address, and the page you visited before navigating to our Service.",
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        {
          text: "We use the information we collect to:",
          list: [
            "Provide, maintain, and improve our Service",
            "Develop new services and features",
            "Personalize the Services and provide advertisements, content, or features that match user profiles or interests",
            "Respond to your comments, questions, and requests and provide customer service",
            "Monitor and analyze trends, usage, and activities in connection with our Service",
            "Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of WorldAds and others.",
          ],
        },
      ],
    },
    {
      title: "3. Sharing of Your Information",
      content: [
        {
          text: "We will not rent or sell your information to third parties outside WorldAds without your consent, except as noted below:",
          serviceProviders:
            "Service Providers: We may share your information with third-party service providers who are working on our behalf and require access to your information to carry out that work, such as to conduct website-related services or maintenance services.",
          legalRequirements:
            "Legal Requirements: We may disclose your information if required to do so by law or subpoena, or if we believe that such action is necessary to comply with the law and the reasonable requests of law enforcement or to protect the security or integrity of our Service.",
        },
      ],
    },
    {
      title: "4. Your Choices About Your Information",
      content: [
        {
          text: "You can review and change your personal information by logging into your account and editing your profile.",
        },
      ],
    },
    {
      title: "5. Children's Privacy",
      content: [
        {
          text: "WorldAds does not knowingly collect or solicit any information from anyone under the age of 13. If you believe that we might have received any information from or about a child under 13, please contact us.",
        },
      ],
    },
    {
      title: "6. Changes to Our Privacy Policy",
      content: [
        {
          text: "WorldAds may modify or update this Privacy Policy from time to time, so please review it periodically. We may provide you additional forms of notice of modifications or updates as appropriate under the circumstances.",
        },
      ],
    },
    {
      title: "7. Contact Us",
      content: [
        {
          text: "If you have any questions about this Privacy Policy or the Service, please contact us at: support@worldads.com",
        },
      ],
    },
  ],
  conclusion: "Thank you for choosing WorldAds!",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen container mx-auto bg-white pt-40 px-4">
      <div className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
        {privacyPolicyData.title}
      </div>
      <div className="mb-4 rounded-lg mt-16">
        <h2 className="text-xl mb-2 font-normal text-gray-900 mt-4">
          Effective Date: {privacyPolicyData.effectiveDate}
        </h2>
        <p className="text-[16px] font-light text-gray-700">
          {privacyPolicyData.introduction}
        </p>
      </div>

      <div className="space-y-3">
        {privacyPolicyData.sections.map((section, index) => (
          <section
            key={index}
            className="bg-white overflow-hidden sm:rounded-lg"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {section.title}
              </h2>
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
                    <ul className="mt-2 space-y-1">
                      {item.list.map((listItem, listItemIndex) => (
                        <li
                          key={listItemIndex}
                          className="text-[16px] text-gray-700"
                        >
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.serviceProviders && (
                    <p className="mt-2 text-[16px] text-gray-700">
                      {item.serviceProviders}
                    </p>
                  )}
                  {item.legalRequirements && (
                    <p className="mt-2 text-[16px] text-gray-700">
                      {item.legalRequirements}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-3 text-start text-xl font-semibold text-gray-900">
        {privacyPolicyData.conclusion}
      </p>
    </div>
  );
}
