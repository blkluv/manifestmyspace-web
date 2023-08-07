import { Accordion, AccordionDetails, AccordionSummary, Backdrop, Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import SelectProperty from "./SelectProperty";

function Leases(props) {
    // Select Property Tab
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const [leaseStatus, setLeaseStatus] = useState([]);
    useEffect(() => {
        axios.get("https://l0h6a9zi1e.execute-api.us-west-1.amazonaws.com/dev/ownerDashboard/100-000003")
            .then((res) => {
                // console.log(res.data.LeaseStatus);
                setLeaseStatus(res.data.LeaseStatus);
            });
    }, []);

    return (
        <Box>
            <Box sx={{
                fontFamily: 'Source Sans Pro',
                backgroundColor: '#F2F2F2',
                fontSize: '14px',
                color: '#3D5CAC',
                justifyContent: 'center',
                padding: '10px',
                paddingLeft: '20px',
                paddingRight: '20px',
            }}>
                <Box sx={{
                    color: '#160449',
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: 'bold',
                }}>
                    Leases Expiring and Move-Outs
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontWeight: 'bold',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            alignItems: 'center',
                            marginRight: '2px',
                        }}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3.125" y="6.25" width="18.75" height="15.625" rx="2" stroke="#3D5CAC" stroke-width="2" />
                                <path d="M3.125 10.25C3.125 8.36438 3.125 7.42157 3.71079 6.83579C4.29657 6.25 5.23938 6.25 7.125 6.25H17.875C19.7606 6.25 20.7034 6.25 21.2892 6.83579C21.875 7.42157 21.875 8.36438 21.875 10.25V10.4167H3.125V10.25Z" fill="#3D5CAC" />
                                <path d="M7.29166 3.125L7.29166 6.25" stroke="#3D5CAC" stroke-width="2" stroke-linecap="round" />
                                <path d="M17.7083 3.125L17.7083 6.25" stroke="#3D5CAC" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </Box>
                        <Box>
                            Next 1 Year
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            alignItems: 'center',
                            marginRight: '2px',
                        }}>
                            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.49423 10.97C5.20833 11.6165 5.20833 12.3519 5.20833 13.8228V18.4166C5.20833 20.4594 5.20833 21.4807 5.81852 22.1153C6.37694 22.6961 7.24682 22.7454 8.89583 22.7495V17.3333C8.89583 16.2201 9.77331 15.25 10.9375 15.25H14.0625C15.2267 15.25 16.1042 16.2201 16.1042 17.3333V22.7495C17.7532 22.7454 18.6231 22.6961 19.1815 22.1153C19.7917 21.4807 19.7917 20.4594 19.7917 18.4166V13.8228C19.7917 12.3519 19.7917 11.6165 19.5058 10.97C19.2199 10.3236 18.6829 9.84493 17.6091 8.88768L16.5674 7.9591C14.6265 6.22888 13.656 5.36377 12.5 5.36377C11.344 5.36377 10.3735 6.22888 8.43255 7.9591L7.39088 8.88768C6.31704 9.84493 5.78012 10.3236 5.49423 10.97ZM14.1042 22.7499V17.3333C14.1042 17.2974 14.091 17.2737 14.0782 17.2604C14.0719 17.2538 14.067 17.2512 14.0653 17.2505L14.0652 17.2504C14.0644 17.2501 14.0642 17.25 14.0625 17.25H10.9375C10.9358 17.25 10.9355 17.2501 10.9348 17.2504L10.9347 17.2505C10.933 17.2512 10.9281 17.2538 10.9218 17.2604C10.909 17.2737 10.8958 17.2974 10.8958 17.3333V22.7499H14.1042Z" fill="#3D5CAC" />
                            </svg>
                        </Box>
                        <Box onClick={handleOpen}>
                            Select Property
                        </Box>
                    </Box>
                </Box>
                <Accordion sx={{
                    backgroundColor: '#A52A2A',
                    color: '#FFFFFF',
                    borderRadius: '10px',
                    marginTop: '15px',
                    marginBottom: '15px',
                    boxShadow: '0px 4px 4px #00000032'
                }}>
                    <AccordionSummary sx={{
                        display: 'flex',
                        fontWeight: 'bold',

                    }}
                        expandIcon={
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#F2F2F2" stroke-width="2.5" />
                            </svg>
                        }>
                        <Box>
                            Move-Outs
                        </Box>
                        <Box sx={{
                            marginLeft: 'auto',
                            marginRight: '5px',
                        }}>
                            5
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            03/19/2023:
                        </Box>
                        <Box sx={{
                            fontWeight: 'bold',
                            borderBottomStyle: 'solid',
                            borderWidth: '1px',
                            width: 'fit-content',
                        }}>
                            103 N. Abel St, Milpitas CA 95035
                        </Box>
                    </AccordionDetails>
                </Accordion>
                {leaseStatus.map((status, i) => (
                    <LeaseMonth key={i} data={status} />
                ))}
            </Box>
            <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}                
            >
                <SelectProperty closeTab={handleClose} />
            </Backdrop>
        </Box>
    )
}

function LeaseMonth(props) {
    const leaseData = props.data;
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '20px',
        }}>
            <Box sx={{
                width: '10%',
                backgroundColor: '#F87C7A',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '5px',
                paddingBottom: '10px',

                fontSize: '15px',
                color: '#160449',
            }}>
                <Box>
                    MAR
                </Box>
                <Box>
                    2023
                </Box>
                <Box sx={{
                    fontWeight: 'bold',
                    marginTop: 'auto',
                    marginBottom: '0px',
                }}>
                    {leaseData.num}
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '90%',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: '10px',
                }}>
                    <Box sx={{
                        marginLeft: '0px',
                        marginRight: 'auto',
                    }}>
                        <Box sx={{
                            fontWeight: 'bold',
                            borderBottomStyle: 'solid',
                            borderWidth: '1px',
                            width: 'fit-content',
                        }}>
                            103 N. Abel St, Milpitas CA 95035
                        </Box>
                        <Box>
                            03/19/2023: Renewed to 03/18/2024
                        </Box>
                    </Box>
                    <Box sx={{
                        marginLeft: 'auto',
                        marginRight: '0px',
                    }}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.20833 14.5833L8.60809 17.1331C9.03678 17.4547 9.64272 17.3811 9.98205 16.9664L18.75 6.25" stroke="#3D5CAC" stroke-width="2.5" stroke-linecap="round" />
                        </svg>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: '10px',
                }}>
                    <Box sx={{
                        marginLeft: '0px',
                        marginRight: 'auto',
                    }}>
                        <Box sx={{
                            fontWeight: 'bold',
                            borderBottomStyle: 'solid',
                            borderWidth: '1px',
                            width: 'fit-content',
                        }}>
                            108 N. Abel St, Milpitas CA 95035
                        </Box>
                        <Box>
                            03/29/2023: Moving out
                        </Box>
                    </Box>
                    <Box sx={{
                        marginLeft: 'auto',
                        marginRight: '0px',
                    }}>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 6.5L6.5 19.5" stroke="#3D5CAC" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.5 6.5L19.5 19.5" stroke="#3D5CAC" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Leases;