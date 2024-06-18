import React, { useEffect, useState } from 'react';
// import { kycData } from "../Redux/data";
import { useNavigate } from 'react-router-dom';
const kycData = require('../Redux/kycData.json');
const addressData = require('../Redux/addresses.json');
const userInfoData = require('../Redux/userinfo.json');
const userNationalityData = require('../Redux/usernationality.json');
const convertedData = convertKYCData(kycData, addressData, userInfoData, userNationalityData);

const Monitoring = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  let localData = localStorage.getItem("kyc");

  useEffect(() => {
    if(localData){
      setData(JSON.parse(localData));
    }else{
      localStorage.setItem("kyc", JSON.stringify(convertedData));
      setData(convertedData);
    }
  },[localData]);
  console.log(convertedData)

  return (
    <div className="p-4 md:p-8 w-full md:w-[80%] mx-auto">
      {/* Monitoring Section */}
      <h1 className="text-center text-[24px] md:text-[32px] font-bold mb-6" style={{ color: "#0D141C" }}>Monitoring</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Monitoring Cards */}
        <MonitoringCard title="In Queue" count="10" percentage="+5%" />
        <MonitoringCard title="In Pending" count="10" percentage="+7%" />
        <MonitoringCard title="In Approved" count="70" percentage="+3%" />
      </div>


      {/* Table Section */}
      <div className="overflow-x-auto py-2 ">
        <table className="min-w-[97.5%] text-center bg-white border-zinc-300">
          <thead>
            <tr className="border-b text-sm">
              <TableHead />
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <TableRow key={item?.id} item={item} navigate={navigate} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Monitoring;

const MonitoringCard = ({ title, count, percentage }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 border-zinc-300 hover:scale-105 transition">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-2xl font-bold">{count}</p>
      <p className="text-green-500 font-bold">{percentage}</p>
    </div>
  );
};

const TableHead = () => {
  return (
    <>
      <th className="py-2 px-4 border-b">Candidate</th>
      <th className="py-2 px-4 border-b hidden md:block">Type</th>
      <th className="py-2 px-4 border-b">Status</th>
      <th className="py-2 px-4 border-b">Submitted</th>
      <th className="py-2 px-4 border-b  hidden md:block">Completed</th>
    </>
  );
};

const TableRow = ({ item, navigate, className = '' }) => {
  return (
    <tr
      className={`cursor-pointer ${className} text-sm hover:scale-105 transition`}
      onClick={() => navigate("/monitoring/" + item?.userid)}
    >
      <td className="py-4 px-4 border-b">{item?.name}</td>
      <td className="py-4 px-4 border-b  hidden md:block">{item?.type}</td>
      <td className="py-4 px-4 border-b">
        <span
          className="px-6 py-1 rounded-full text-sm text-white"
          style={{
            backgroundColor: `${
              item?.validation_status === 'pending'
                ? '#FF6B00'
                : item?.validation_status === 'Approved'
                ? '#00A524'
                : '#E10000'
            }`
          }}
        >
          {item?.validation_status?.charAt(0).toUpperCase() + item?.validation_status?.slice(1)}
        </span>
      </td>
      <td className="py-4 px-4 border-b">{item?.created_at}</td>
      <td className="py-4 px-4 border-b hidden md:block ">{item?.completed_at ? item?.completed_at : "N/A"}</td>
    </tr>
  );
};

// Function to convert KYC data
function convertKYCData(kycData, addressData, userInfoData, userNationalityData) {
  const myKycData = [];

  kycData.forEach(kyc => {
    const address = addressData.find(address => address.userid === kyc.userid);
    const userInfo = userInfoData.find(userInfo => userInfo.userid === kyc.userid);
    const userNationality = userNationalityData.find(nationality => nationality.userid === kyc.userid);

    if (!userInfo) {
      console.log(`No user info found for userid: ${kyc.userid}`);
      return; // Skip this entry if userInfo is undefined
    }

    const fullname = `${userInfo.firstname} ${userInfo.lastname}`;
    const addressFormatted = `${address.address1}, ${address.city}, ${address.state} ${address.postalcode}`;

    const entry = {
      userid: kyc.userid,
      name: userInfo.firstname,
      type: userNationality ? userNationality.idtype : '', // Add defensive check for userNationality
      validation_status: kyc.validation_status,
      completed_at: kyc.completed_at,
      created_at: kyc.created_at,
      profilepath: kyc?.selfie_path,
      documentpath: kyc.document_path,
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      fullname: fullname,
      address: addressFormatted,
      dateofbirth: userNationality ? userNationality.dateofbirth : '', // Add defensive check for userNationality
      email: userInfo.email,
      nationality: userNationality ? userNationality.nationality : '', // Add defensive check for userNationality
      telephone:userInfo?.telephone
    };

    myKycData.push(entry);
  });

  return myKycData;
}
