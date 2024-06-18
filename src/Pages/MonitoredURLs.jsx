import InfoItemsList from "../Components/InfoItemList";
import SocialMediaCart from "../Components/SocialMediaCart";
import { socialMediaLinks } from "../Redux/SocialLink";

const MonitoredURLs = () => {
  const infoSections = [
    {
      heading: "Politically Exposed People",
      items: [
        {
          iconSrc: "/vector--0-61.svg",
          title: "Politically Exposed Persons (PEP)",
          url: "Default URL"
        }
      ]
    },
    {
      heading: "Anti Money Laundering",
      items: [
        {
          iconSrc: "/vector--0-61.svg",
          title: "Sanctions",
          url: "Default URL"
        },
        {
          iconSrc: "/vector--0-61.svg",
          title: "Adverse Media",
          url: "Default URL"
        }
      ]
    },
    {
      heading: "Cyber Crime",
      items: [
        {
          iconSrc: "/vector--0-61.svg",
          title: "Data Breaches",
          url: "Default URL"
        },
        {
          iconSrc: "/vector--0-61.svg",
          title: "Hacker Forums",
          url: "Default URL"
        },
        {
          iconSrc: "/vector--0-61.svg",
          title: "Dark Web",
          url: "Default URL"
        },
        {
          iconSrc: "/vector--0-61.svg",
          title: "Public Databases",
          url: "Default URL"
        },
        {
          iconSrc: "/vector--0-61.svg",
          title: "Leaked Accounts",
          url: "Default URL"
        }
      ]
    }
  ];

  return (
    <div className="w-full relative flex flex-col items-center justify-center pt-[15px] px-0 pb-0 box-border leading-[normal] tracking-[normal] border-2">
      <main className="flex-1 bg-white flex flex-col items-start justify-start max-w-full shrink-0">
        <section className="self-stretch bg-whitesmoke-200 flex flex-col items-start justify-start pt-0 px-0 pb-[2009px] box-border relative gap-[26px] min-h-[2178px] max-w-full text-left text-base text-black font-inter lg:pb-[1306px] lg:box-border mq450:pb-[552px] mq450:box-border mq1050:pb-[849px] mq1050:box-border">
          <div className="self-stretch flex flex-col items-end justify-start py-0 pr-2.5 pl-0 gap-[7px] text-center text-13xl text-black font-public-sans">
            <h1 className="m-0 self-stretch relative text-[32px] tracking-[-0.8px] leading-[40px] font-bold font-inherit mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
              Monitored URLs
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[29px] text-base">
              <div className="relative leading-[24px]">Default URLs</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
           <InfoItemsList sections={infoSections} />
           
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px] max-w-full">
            <h2 className="font-bold text-lg mb-2">Social Media</h2>
            {socialMediaLinks?.map((item, index) => (
              <SocialMediaCart key={index} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MonitoredURLs;
