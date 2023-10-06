import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { CalendarIcon, HomeIcon, MainContainer, OwnerIcon, RentAccordionView, RentTitle, ViewAllButton, ViewOptionContainer, ViewOptionText } from "../RentComponents/RentComponents";
import { useUser } from "../../../contexts/UserContext";

function PMRent(props) {
    const { getProfileId } = useUser();
    const [dataNum, setDataNum] = useState(0);
    const [rentData, setRentData] = useState({});

    useEffect(() => {
        const requestURL = `https://l0h6a9zi1e.execute-api.us-west-1.amazonaws.com/dev/rents/${getProfileId()}`;
        axios.get(requestURL).then(res => {
            const fetchingData = res.data.RentStatus.result;
            setDataNum(fetchingData.length);
            const not_paid = [];
            const partial_paid = [];
            const late_paid = [];
            const paid = [];
            const vacant = [];
            for (let i = 0; i < fetchingData.length; i++) {
                const data = fetchingData[i];
                switch (data.rent_status) {
                    case 'UNPAID':
                        not_paid.push(data);
                        break;
                    case 'PAID PARTIALLY':
                        partial_paid.push(data);
                        break;
                    case 'PAID LATE':
                        late_paid.push(data);
                        break;
                    case 'PAID':
                        paid.push(data);
                        break;
                    case 'VACANT':
                        vacant.push(data);
                        break;
                    default:
                        break;
                }
                setRentData({ unpaid: not_paid, partial: partial_paid, late: late_paid, paid: paid, vacant: vacant });
            }
        });
    }, []);
    return (
        <MainContainer>
            <RentTitle>
                Property Rent
            </RentTitle>
            <ViewOptionContainer>
                <Box sx={{
                    display: 'flex',
                }}>
                    <CalendarIcon />
                    <ViewOptionText>
                        Last 30 Days
                    </ViewOptionText>
                </Box>
                <Box sx={{
                    display: 'flex',
                }}>
                    <OwnerIcon />
                    <ViewOptionText>
                        Last 30 Days
                    </ViewOptionText>
                </Box>
                <Box sx={{
                    display: 'flex',
                }}>
                    <HomeIcon />
                    <ViewOptionText>
                        Select Property
                    </ViewOptionText>
                </Box>
            </ViewOptionContainer>
            <Box sx={{
                marginTop: '10px',
            }}>
                <ViewAllButton>
                    View All {dataNum} Properties
                </ViewAllButton>
            </Box>

            <Box sx={{
                marginTop: '20px',
            }}>
                <RentAccordionView data={rentData} link={'/pmRentDetail'} />
            </Box>
        </MainContainer>
    )
}
export default PMRent;