

// Function to convert KYC data
function convertKYCData(kycData, addressData, userInfoData, userNationalityData) {
    const myKycData = [];

    kycData.forEach(kyc => {
        const address = addressData.find(address => address.userid === kyc.userid);
        const userInfo = userInfoData.find(userInfo => userInfo.userid === kyc.userid);
        const userNationality = userNationalityData.find(nationality => nationality.userid === kyc.userid);

        const fullname = `${userInfo.firstname} ${userInfo.lastname}`;
        const addressFormatted = `${address.address1}, ${address.city}, ${address.state} ${address.postalcode}`;

        const entry = {
            userid: kyc.userid,
            name: fullname,
            type: userNationality.idtype,
            validity_status: kyc.validation_status,
            completed_at: kyc.completed_at,
            created_at: kyc.created_at,
            profilepath: userInfo.email,
            documentpath: kyc.document_path,
            firstname: userInfo.firstname,
            lastname: userInfo.lastname,
            address: addressFormatted,
            dateofbirth: userNationality.dateofbirth,
            email: userInfo.email,
            nationality: userNationality.nationality
        };

        myKycData.push(entry);
    });

    return myKycData;
}

// Convert KYC data

// Exporting the converted data
module.exports =convertKYCData ;
