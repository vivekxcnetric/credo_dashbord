import React from 'react'

const SocialMediaCart = ({item,index}) => {
  return (
    <div key={index} className="w-[510px] flex flex-row items-center justify-start py-0 box-border gap-[16px]">
      <div className="rounded-lg bg-aliceblue flex flex-row items-center justify-center p-3">
        <div className="flex flex-col items-start justify-start">
          <div className="w-6 h-6 relative overflow-hidden shrink-0">
            <img
              className="w-full h-full"
              alt=""
              src={item.icon}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center min-w-[80px]">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
            <div className="relative leading-[24px] font-medium">
              {item.name}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start text-sm text-steelblue">
          <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
            <div className="relative leading-[21px]">
              {item.url}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialMediaCart