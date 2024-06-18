import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ProgressComponent from '../Components/ProgresiveBar';
import Chart from "../Components/Chart";
import Navbar from '../Components/Navbar';

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 10px;
    margin: auto;
    background-color: #f5f7fa;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const MonitoringButton = styled.button`
    background-color: #3ed3c9;
    color: white;
    padding: 10px 50px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
    align-self: center;

    @media (max-width: 768px) {
        padding: 10px 20px;
    }
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    max-width: 800px;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

const CardTitle = styled.div`
    color: #888;
    font-size: 14px;
    margin-bottom: 10px;
`;

const CardValue = styled.div`
    font-size: 24px;
    font-weight: bold;

    span {
        font-size: 14px;
        margin-left: 5px;

        &.positive {
            color: #3ed3c9;
        }

        &.negative {
            color: #ff6b6b;
        }
    }
`;

const CardIcon = styled.div`
    background-color: #3ed3c9;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 20px;
        height: 20px;
    }
`;

const ProfilesContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin: 20px auto;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
        margin: 0;
        font-size: 24px;
    }

    p {
        margin: 0;
        color: #6c757d;
        display: flex;
        align-items: center;
    }
`;

const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: #28a745;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, td {
        padding: 10px;
        text-align: left;
    }

    th {
        color: #6c757d;
    }

    @media (max-width: 768px) {
        th, td {
            padding: 5px;
        }

        th:nth-child(2), td:nth-child(2) {
            display: none;
        }
    }
`;

const Completion = styled.td`
    .percentage {
        margin-right: 10px;
    }

    .progress-bar {
        width: 100%;
        background: #e9ecef;
        border-radius: 5px;
        overflow: hidden;
    }

    .progress {
        height: 8px;
        background: #17a2b8;
    }
`;

const Icon = styled.span`
    margin-right: 10px;
`;

const ChartContainer = styled.div`
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
    margin: auto;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const ChartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
        margin: 0;
        font-size: 1.2em;
    }

    .increase {
        color: #00c853;
        font-weight: bold;
    }

    .year {
        color: #9e9e9e;
    }
`;

const ChartCanvas = styled.canvas`
    width: 100%;
    height: 300px;
`;

 function Dashboard() {
    const navigate = useNavigate();
    const ContentCardsData = [
        {
            title: "ID Validation",
            percentage: "100",
            amount: "$3,000",
            imageUrl: "/members-1@2x.png",
            details: "Profiles this month",
            iconUrl: "/icon-5.svg",
        },
        {
            title: "ID Enhancements",
            percentage: "60",
            amount: "$1,000",
            imageUrl: "/members@2x.png",
            details: "Profiles this month",
            iconUrl: "/icon-4.svg",
        },
        {
            title: "Swift Database",
            percentage: "25",
            amount: "$400",
            imageUrl: "/members-4@2x.png",
            details: "Profiles this month",
            iconUrl: "/icon-8.svg",
        },
        {
            title: "Government Sanctions List",
            percentage: "100",
            amount: "$2,000",
            imageUrl: "/members-3@2x.png",
            details: "Profiles this month",
            iconUrl: "/icon-7.svg",
        },
        {
            title: "Social Media Scoring",
            percentage: "0",
            amount: "Not Set",
            imageUrl: "/members-2@2x.png",
            details: "Profiles this month",
            iconUrl: "/icon-6.svg",
        }
    ];

    return (
        <DashboardContainer>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                <MonitoringButton onClick={() => { navigate('/monitoring') }}>Monitoring</MonitoringButton>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <CardsContainer>
                    <Card>
                        <CardContent>
                            <CardTitle>In Que</CardTitle>
                            <CardValue>53,000 <span className="positive">+55%</span></CardValue>
                        </CardContent>
                        <CardIcon>
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/wallet.png" alt="Wallet Icon" />
                        </CardIcon>
                    </Card>
                    <Card>
                        <CardContent>
                            <CardTitle>Today's Users</CardTitle>
                            <CardValue>2,300 <span className="positive">+5%</span></CardValue>
                        </CardContent>
                        <CardIcon>
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/globe.png" alt="Globe Icon" />
                        </CardIcon>
                    </Card>
                    <Card>
                        <CardContent>
                            <CardTitle>New Clients</CardTitle>
                            <CardValue>+3,052 <span className="negative">-14%</span></CardValue>
                        </CardContent>
                        <CardIcon>
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/document.png" alt="Document Icon" />
                        </CardIcon>
                    </Card>
                    <Card>
                        <CardContent>
                            <CardTitle>Total Cost</CardTitle>
                            <CardValue>$173,000 <span className="positive">+8%</span></CardValue>
                        </CardContent>
                        <CardIcon>
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png" alt="Shopping Cart Icon" />
                        </CardIcon>
                    </Card>
                </CardsContainer>
            </div>
            <ProfilesContainer>
                <Header>
                    <div>
                        <p><Dot /> 300 done this month</p>
                        <h2>Profiles</h2>
                    </div>
                </Header>
                <StyledTable>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #999999' }}>
                            <th>COMPANIES</th>
                            <th></th>
                            <th>Cost</th>
                            <th>COMPLETION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ContentCardsData.map((item, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #999999' }}>
                                <td className="flex items-center gap-4"><img src={item.iconUrl} alt="Icon" className="rounded-full block w-10" /> <b>{item.title}</b> </td>
                                <td>
                                    <img src={item.imageUrl} alt="Avatar" className="w-20" />
                                </td>
                                <td>{item.amount}</td>
                                <Completion>
                                    <ProgressComponent percentage={item.percentage} />
                                </Completion>
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
            </ProfilesContainer>
            <ChartContainer>
                <ChartHeader>
                    <h2>Cost overview</h2>
                    <div>
                        <span className="increase">(+5)</span> <span className="year">more in 2021</span>
                    </div>
                </ChartHeader>
                <Chart />
            </ChartContainer>
        </DashboardContainer>
    );
}
export default Dashboard;