import InfoItem from "./InfoItems";

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
          title: "Cyber Crime",
          url: "Default URL"
        },
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
          title: "Leaked Accounts",
          url: "Default URL"
        }
      ]
    }
  ];
  
 
  
  const InfoItemsList = ({ sections=infoSections }) => (
    <div className="flex flex-col items-start justify-start max-w-full">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <b className="text-lg tracking-[-0.27px] leading-[22.5px] block mb-4">
            {section.heading}
          </b>
          {section.items.map((item, itemIndex) => (
            <InfoItem
              key={itemIndex}
              iconSrc={item.iconSrc}
              title={item.title}
              url={item.url}
            />
          ))}
        </div>
      ))}
    </div>
  );

  export default InfoItemsList;