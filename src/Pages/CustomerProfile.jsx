import React, { useEffect, useState } from 'react';
import drivingLicense from "../Asset/drivingLicence.png";
import profile from "../Asset/Profile.png"
import vector6 from "../Asset/vector--0-6.svg";
import vector7 from "../Asset/vector--0-7.svg";
import vector8 from "../Asset/vector--0-8.svg";
import RadioCard from '../Components/RadioCart';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../Components/Button';
import  {toast, Toaster } from 'react-hot-toast';

const custormerData={
  name:"Jane Doe",
  profile:profile,
  drivingLicense:drivingLicense,
  DOB:"01/01/2000",
  email:"jane@yopmail.com",
  address:"123 Main St, San Francisco, CA 94107",
  phoneNumber:"123-456-7890",
};

const CustomerProfile = () => {
  const {customerId}=useParams();
  const [customer,setCustomer]=useState({});
  const [status, setStatus] = useState("");
  const [comment, setComment] = useState("");
  const [disabled, setDisabled] = useState(true);
  
 const navigate = useNavigate();
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("kyc")) || [];
    const updatedData = localData.find(item => item.userid === customerId);
    setCustomer(updatedData || {});
    setStatus(updatedData?.validation_status );
  }, [customerId]);

  useEffect(() => {
    setDisabled(status === "Approved");
  }, [status]);
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSave = () => {
    const localData = JSON.parse(localStorage.getItem("kyc")) || [];
    if(comment === ""){
      toast.error("Please Add Comment");
      return;
    }
    const updatedData = localData.map(item => {
      if (item.userid === customerId) {
        return { ...item, validation_status: status, comment };
      }
      return item;
    });
    localStorage.setItem("kyc", JSON.stringify(updatedData));
    toast.success('Customer Status Updated!');
    setTimeout(() => {
      
      navigate("/monitoring");
    },[1000])
  };

  let profileImg=`https://stmikkoai380118680429.blob.core.windows.net/credo-user-images/${customer.profilepath}`
  let drivingLicenseImg=`https://stmikkoai380118680429.blob.core.windows.net/credo-user-images/${customer.documentpath}`
//  console.log(!disabled);
  return (
    <section className={`self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-13xl text-black font-public-sans`}>
      <Toaster/>
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-center text-black">
        <h1 className="m-0 self-stretch h-10 relative text-[32px] tracking-[-0.8px] leading-[40px] font-bold font-inherit inline-block shrink-0 mq450:text-lgi mq450:leading-[24px] mq750:text-7xl mq750:leading-[32px]">
          Customer Profile
        </h1>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-black">
          <div className="flex flex-row items-start justify-start max-w-full">
            <p className="m-0 relative text-[16px] leading-[24px]">
              This is the final decision step in the KYC process. Review the information and make a decision.
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[27px] box-border max-w-full text-3xl">
        <div className="w-[705px] flex flex-col items-start justify-start gap-[14.5px] max-w-full">
          <div className="self-stretch flex flex-row lg:flex-col items-start justify-start py-0 pr-0 pl-4 box-border max-w-full">
            <div className="flex-1 flex flex-col lg:flex-row items-start justify-start gap-[26px] max-w-full mq675:flex-wrap">
              <div className="flex-1 flex  flex-col items-start justify-start gap-[19px] max-w-full">
                <h3 className="m-0 relative text-[22px] tracking-[-0.33px] leading-[27.5px] font-bold font-inherit mq450:text-lg mq450:leading-[22px]">
                  Review information
                </h3>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-base">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20.5px]">
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[268px] pl-0 gap-[16px] mq450:flex-wrap mq675:pr-[134px] mq675:box-border">
                      <img
                        className="h-14 w-14 relative rounded-full overflow-hidden shrink-0 object-cover"
                        loading="lazy"
                        alt=""
                        onContextMenu={(e) => e.preventDefault()}
                       src={`https://stmikkoai380118680429.blob.core.windows.net/credo-user-images/${customer.profilepath}`}
                      />
                      
                      <div className="flex-1 flex flex-col items-start justify-center min-w-[91px]">
                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
                            <div className="relative leading-[24px] font-medium">
                              {customer.fullname}
                            </div>
                          </div>
                        </div>
                        <div className="overflow-hidden flex flex-col items-start justify-start text-sm text-slategray">
                          <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[21px]">
                              {customer.fullname} • {customer.dateofbirth}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[285px] pl-0 gap-[16px] mq450:flex-wrap mq675:pr-[142px] mq675:box-border">
                      <div className="rounded-lg bg-aliceblue flex flex-row items-center justify-center p-3">
                        <div className="flex flex-col items-start justify-start">
                          <div className="w-6 h-6 relative overflow-hidden shrink-0">
                            <img
                              className="absolute top-[0px] left-[0px] w-full h-full"
                              alt=""
                              src={vector6}
                            />
                            <div className="absolute top-[0px] left-[0px] w-[19.5px] h-[21px]" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-center min-w-[85px]">
                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
                            <div className="relative leading-[24px] font-medium">
                              Email
                            </div>
                          </div>
                        </div>
                        <div className="overflow-hidden flex flex-col items-start justify-start text-sm text-slategray">
                          <div className="flex flex-col items-start justify-start py-0 px-0">
                            <div className="relative leading-[21px] whitespace-nowrap">
                              {customer.email}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[172px] pl-0 gap-[16px] mq450:flex-wrap mq675:pr-[86px] mq675:box-border">
                    <div className="rounded-lg bg-aliceblue flex flex-row items-center justify-center p-3">
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-6 h-6 relative overflow-hidden shrink-0">
                          <img
                            className="absolute top-[0px] left-[0px] w-full h-full"
                            alt=""
                            src={vector7}
                          />
                          <div className="absolute top-[0px] left-[0px] w-[16.5px] h-[21px]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-center min-w-[159px]">
                      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
                          <div className="relative leading-[24px] font-medium">
                            Address
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-sm text-slategray">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="relative leading-[21px]">
                            {customer.address}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[321px] pl-0 gap-[16px] mq450:flex-wrap mq675:pr-40 mq675:box-border">
                    <div className="rounded-lg bg-aliceblue flex flex-row items-center justify-center p-3">
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-6 h-6 relative overflow-hidden shrink-0">
                          <img
                            className="absolute top-[0px] left-[0px] w-full h-full"
                            alt=""
                            src={vector8}
                          />
                          <div className="absolute top-[0px] left-[0px] w-[18.7px] h-[18.7px]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-center min-w-[61px]">
                      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
                          <div className="relative leading-[24px] font-medium">
                            Phone
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden flex flex-col items-start justify-start text-sm text-slategray">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[21px]">
                            {customer.telephone}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex   flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[183px] mq675:flex-1">
                <div className="flex flex-col items-start justify-start gap-[26px]">
      <Button
        type="approve"
        disabled={!disabled}
        onClick={handleSave}
      >
        Approve
      </Button>
      <Button
        type="decline"
        disabled={disabled}
        onClick={handleSave}
      >
        Decline
      </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[512px] flex flex-col items-start justify-start gap-[27.5px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
              <div className="self-stretch h-[132.5px] relative max-w-full mq450:h-auto mq450:min-h-[132.5]">
                <div className="a w-full flex flex-row items-start justify-start pt-5 px-4 pb-3 box-border max-w-full">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <b className="relative text-[22px] tracking-[-0.33px] leading-[27.5px] font-bold mq450:text-[22px] mq450:leading-[22px]">
                        Documents
                      </b>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[52.5px] left-[0px] bg-whitesmoke-200 w-full flex flex-row items-start justify-start py-3 px-4 box-border max-w-full z-[1] text-base">
                  <div className="flex-1 flex flex-row  items-center justify-start py-0 pr-[262px] pl-0 box-border gap-[16px] max-w-full  mq675:box-border">
                    <img
                      className="h-14 w-[99.5px] relative rounded-lg overflow-hidden shrink-0 object-cover"
                      alt=""
                      src={custormerData.drivingLicense}
                    />
                   <div>
                    <div className="flex-1 flex flex-col items-start justify-center min-w-[66px]">
                      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
                          <div className="relative leading-[24px] font-medium">
                            Front
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden flex flex-col items-start justify-start text-sm text-slategray">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[21px]">
                            Driver's License
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-row items-start justify-start py-0 px-4 ">
                <b className="relative text-[22px] tracking-[-0.33px] leading-[27.5px] font-bold mq450:text-[22px] mq450:leading-[22px]">
                  Decision
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-sm">
              <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
                <RadioCard
                  id="Approved"
                  name="status"
                  label="Approved"
                  description="The application meets your compliance standards"
                  selectedValue={status}
                  onChange={handleStatusChange}
                />
                <RadioCard
                  id="pending"
                  name="status"
                  label="Request more information"
                  description="Ask the applicant for additional information"
                  selectedValue={status}
                  onChange={handleStatusChange}
                />
                <RadioCard
                  id="rejected"
                  name="status"
                  label="rejected"
                  description="The application does not meet your compliance standards"
                  selectedValue={status}
                  onChange={handleStatusChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] w-[480px] sm:w-[460px] md:ml-[21%] max-w-full px-5">
        <div className="self-stretch relative leading-[24px] font-medium">
          Comments
        </div>
        <textarea
          className="bg-whitesmoke-200 h-36 w-auto [outline:none] self-stretch rounded-xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start p-[15px] font-public-sans text-base text-slategray border-[1px] border-solid border-gainsboro-200"
          placeholder="Add comments"
          value={comment}
          onChange={handleCommentChange}
          rows={7}
          cols={24}
        />
      </div>
    </section>
  );
};

export default CustomerProfile;
