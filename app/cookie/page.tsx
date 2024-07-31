"use client";
import { useCallback } from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

const cookieData = [
  {
    title: "Essential Cookies",
    description:
      "These cookies are necessary for the website to function and cannot be switched off in our systems. They are essential for basic functionalities such as page navigation, secure access, and ensuring the site performs as expected.",
    icon: "/Frame 1000007747.png",
  },
  {
    title: "Performance Cookies",
    description:
      "These cookies collect information about how visitors use a website, such as which pages they visit most often.",
    icon: "/Frame 1000007747.png",
  },
  {
    title: "Functional Cookies",
    description:
      "These cookies allow the website to remember choices you make (such as your user name, language, or the region you are in).",
    icon: "/Frame 1000007747.png",
  },
  {
    title: "Marketing Cookies",
    description:
      "These cookies are used to deliver adverts more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign.",
    icon: "/Frame 1000007747.png",
  },
];

const CookiePreferences = () => {
  const handleToggle = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    const isChecked = !target.classList.contains("bg-[#B61DC0]");
    target.className = isChecked ? "bg-[#B61DC0]" : "bg-[#E2E8F0]";
  }, []);

  return (
    <section className="cookie w-full h-full px-12 mb-12 mt-12  flex flex-col">
      <div className="cookie-top flex flex-col items-center gap-4">
        <h1 className="font-manrope text-4xl font-semibold text-center text-[#0A0A0A]">
          Manage Cookie Preferences
        </h1>
        <p className="font-manrope text-lg font-normal text-center leading-7 text-[#0A0A0A]">
          We use cookies to enhance your experience, analyze site traffic, and
          for marketing purposes. You can manage your cookie preferences below.
        </p>
      </div>
      <div className="cookie-bottom grid gap-6 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {cookieData.map((cookie, index) => (
          <div
            key={index}
            className="cookie-card p-[24px_24px_40px_24px] gap-0 rounded-lg border border-[#DBE1E7] bg-white flex flex-col items-start"
          >
            <div className="cookie-card-icon mb-4">
              <Image
                src={cookie.icon}
                alt={cookie.title}
                width={40}
                height={40}
                className=" object-cover"
              />
            </div>
            <div className="cookie-card-1 flex justify-between w-full mb-4">
              <h2 className="font-manrope text-xl font-semibold text-left">
                {cookie.title}
              </h2>
              <Switch
                defaultChecked={false}
                onClick={handleToggle} // Use onClick for button-like behavior
                className="bg-[#E2E8F0]" // Initial state
                style={{ width: "40px", height: "20px", borderRadius: 50 }}
              />
            </div>
            <div className="cookie-card-text">
              <p className="font-manrope text-base font-normal leading-6 text-left text-[#0A0A0A]">
                {cookie.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CookiePreferences;
