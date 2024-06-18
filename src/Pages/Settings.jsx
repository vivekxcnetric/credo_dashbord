import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 730px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 30px;
`;

const Section = styled.div`
  margin-top: 20px;
`;

const SubTitle2 = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Card = styled.div`
  background-color: #f0f4f8;
  padding: 15px;
  width: 60%;
  border-radius: 8px;
  margin-top: 10px;
`;

const Info = styled.p`
  margin: 0;
  color: #666;
`;

const Score = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
`;

function Settings() {
  return (
    <Container>
      <Title>Settings</Title>
      <SubTitle>
        This is the final decision step in the KYC process. Review the information and make a decision.
      </SubTitle>
      
      <Section>
        <SubTitle2>Risk score</SubTitle2>
        <Card>
          <Info>Acceptable Risk score</Info>
          <Score>70</Score>
        </Card>
      </Section>
      
      <Section>
        <SubTitle2>Verification options</SubTitle2>
        <div>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" />
            Personal Data Verification
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" />
            Check Credit History
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" />
            Anti Money Laundering
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" />
            Social Media
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" />
            High Risk Sanctions
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" />
            Cyber Crime Forums
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" />
            Aliases and Handles
          </CheckboxLabel>
        </div>
      </Section>
    </Container>
  );
}

export default Settings;
