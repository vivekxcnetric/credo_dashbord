const InfoItem = ({ iconSrc, title, url }) => (
    <div className="w-full flex flex-row items-center justify-start py-3 px-4 bg-whitesmoke-100 rounded-lg mb-4">
      <div className="rounded-lg bg-aliceblue flex flex-row items-center justify-center p-3 mr-4">
        <div className="w-6 h-6 relative overflow-hidden shrink-0">
          <img className="w-full h-full" alt="" src={iconSrc} />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center min-w-[82px]">
        <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
          <div className="relative leading-[24px] font-medium">
            {title}
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-sm text-steelblue">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
            <div className="relative leading-[21px]">{url}</div>
          </div>
        </div>
      </div>
    </div>
  );
  export default InfoItem;