import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function TenantProfileEdit(props) {

    const [profileData, setProfileData] = useState([]);
    useEffect(()=>{
        axios.get('https://l0h6a9zi1e.execute-api.us-west-1.amazonaws.com/dev/tenantProfile/350-000002')
        .then((res)=>{
            console.log(res.data.Profile[0]);
            setProfileData(res.data.Profile[0]);
        });
    }, []);
    return (
        <Box sx={{
            fontFamily: 'Source Sans Pro',

        }}>
            <Box sx={{
                backgroundColor: '#3D5CAC',
                minHeight: '100px',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: '15px',
                    paddingLeft: '25px',
                    paddingRight: '25px',
                }}>
                    <Box>
                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.2963 0.75C8.2963 0.335786 8.63208 0 9.0463 0H18.213C18.6272 0 18.963 0.335786 18.963 0.75V1.02778C18.963 1.44199 18.6272 1.77778 18.213 1.77778H9.0463C8.63208 1.77778 8.2963 1.44199 8.2963 1.02778V0.75ZM0 7.86111C0 7.4469 0.335786 7.11111 0.75 7.11111H18.213C18.6272 7.11111 18.963 7.4469 18.963 7.86111V8.13889C18.963 8.5531 18.6272 8.88889 18.213 8.88889H0.75C0.335786 8.88889 0 8.5531 0 8.13889V7.86111ZM0.75 14.2222C0.335786 14.2222 0 14.558 0 14.9722V15.25C0 15.6642 0.335787 16 0.750001 16H9.91667C10.3309 16 10.6667 15.6642 10.6667 15.25V14.9722C10.6667 14.558 10.3309 14.2222 9.91667 14.2222H0.75Z" fill="white" />
                        </svg>
                    </Box>
                    <Box sx={{
                        fontSize: '25px',
                        fontWeight: 'bold',
                        color: '#FFFFFF',
                    }}>
                        Tenant Profile
                    </Box>
                    <Box sx={{
                        width: '19px',

                    }}>

                    </Box>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItem: 'center',
                padding: '12px',

                position: 'relative',
                bottom: '56px',
            }}>
                <Box sx={{
                    height: '112px',
                    width: '112px',
                    backgroundColor: '#bbb',
                    borderRadius: '50%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    boxShadow: '0px 4px 4px #00000032',
                    zIndex: '2',
                }}></Box>

                <Box sx={{
                    backgroundColor: '#F2F2F2',
                    borderRadius: '10px',

                    position: 'relative',
                    bottom: '50px',
                    paddingTop: '55px',
                    zIndex: '1',
                }}>
                    <Box sx={{
                        fontSize: '14px',
                        color: '#3D5CAC',
                        marginBottom: '10px',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <Box>
                                Owner
                            </Box>
                            <Box sx={{
                                marginLeft: '10px',
                                marginRight: '10px',
                            }}>
                                &#x2022;
                            </Box>
                            <Box sx={{
                                fontWeight: 'bold',
                            }}>
                                Tenant
                            </Box>
                            <Box sx={{
                                marginLeft: '10px',
                                marginRight: '10px',
                            }}>
                                &#x2022;
                            </Box>
                            <Box>
                                Manager
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <ProfileAccordion>
                            <ProfileAccordionSummary>
                                Personal Details
                            </ProfileAccordionSummary>
                            <ProfileAccordionDetail>
                                <ProfileTextInputField>Name</ProfileTextInputField>
                                <ProfileTextInputField>Gmail</ProfileTextInputField>
                                <ProfileTextInputField>Phone #</ProfileTextInputField>
                            </ProfileAccordionDetail>
                        </ProfileAccordion>
                    </Box>

                    <Box>
                        <ProfileAccordion>
                            <ProfileAccordionSummary>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <Box>
                                        Identification Details
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#A52A2A',
                                        borderRadius: '10px',
                                        fontSize: '9px',
                                        fontWeight: '600',
                                        color: '#FFFFFF',
                                        width: '60px',
                                        height: '13px',
                                        marginRight: '20px',
                                    }}>
                                        Incomplete
                                    </Box>
                                </Box>


                            </ProfileAccordionSummary>
                            <ProfileAccordionDetail>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 2,
                                }}>
                                    <Box sx={{
                                        flexGrow: 1,
                                    }}>
                                        <ProfileTextInputField>SSN #</ProfileTextInputField>
                                        <ProfileTextInputField>License #</ProfileTextInputField>
                                    </Box>
                                    <Box sx={{
                                        flexGrow: 1,
                                    }}>
                                        <ProfileTextInputField>Licence State</ProfileTextInputField>
                                    </Box>

                                </Box>
                            </ProfileAccordionDetail>
                        </ProfileAccordion>
                    </Box>

                    <Box>
                        <ProfileAccordion>
                            <ProfileAccordionSummary>
                                Current Job Details
                            </ProfileAccordionSummary>
                            <ProfileAccordionDetail>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 2,
                                }}>
                                    <ProfileTextInputField>Current Salary</ProfileTextInputField>
                                    <ProfileTextInputField>Salary Frequency</ProfileTextInputField>
                                </Box>
                                <ProfileTextInputField>Job title</ProfileTextInputField>
                                <ProfileTextInputField>Company Name</ProfileTextInputField>
                            </ProfileAccordionDetail>
                        </ProfileAccordion>
                    </Box>

                    <Box>
                        <ProfileAccordion>
                            <ProfileAccordionSummary>
                                Current Address
                            </ProfileAccordionSummary>
                            <ProfileAccordionDetail>
                                <ProfileTextInputField>Address</ProfileTextInputField>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 2,
                                }}>
                                    <Box sx={{
                                        flexGrow: 1,
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: 2,
                                        }}>
                                            <ProfileTextInputField>Unit #:</ProfileTextInputField>
                                            <ProfileTextInputField>City</ProfileTextInputField>
                                        </Box>

                                        <ProfileTextInputField>Zip Code</ProfileTextInputField>
                                    </Box>
                                    <Box sx={{
                                        flexGrow: 1,
                                    }}>
                                        <ProfileTextInputField>State</ProfileTextInputField>
                                    </Box>
                                </Box>
                            </ProfileAccordionDetail>
                        </ProfileAccordion>
                    </Box>

                    <Box>
                        <ProfileAccordion>
                            <ProfileAccordionSummary>
                                Additional details
                            </ProfileAccordionSummary>
                            <ProfileAccordionDetail>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 2,
                                }}>
                                    <ProfileTextInputField>lease start date</ProfileTextInputField>
                                    <ProfileTextInputField>lease end date</ProfileTextInputField>
                                </Box>
                                <Box sx={{
                                    width: '40%',
                                }}>
                                    <ProfileTextInputField>Monthly Rent</ProfileTextInputField>
                                </Box>

                                <ProfileTextInputField>Property Manager Name</ProfileTextInputField>
                                <ProfileTextInputField>Property Manager phone</ProfileTextInputField>
                            </ProfileAccordionDetail>
                        </ProfileAccordion>
                    </Box>

                    <Box>
                        <ProfileAccordion>
                            <ProfileAccordionSummary>
                                Who plans to live in the unit
                            </ProfileAccordionSummary>
                            <ProfileAccordionDetail>
                                <Box>
                                    {/* <ProfileTenantTable title={"Adults"} headers={["Name", "Last Name", "Relation", "DOB (YY/MM/DD)"]} widths={['25%', '25%', '25%', '25%']}/>
                                    <ProfileTenantTable title={"Children"} headers={["Name", "Last Name", "Relation", "DOB (YY/MM/DD)"]} widths={['25%', '25%', '25%', '25%']}/>
                                    <ProfileTenantTable title={"Pets"} headers={["Name", "Breed", "Type", "Weight"]} widths={['25%', '25%', '25%', '25%']}/>
                                    <ProfileTenantTable title={"Vehicles"} headers={["Make", "Model", "Type", "Lisense", "State"]} widths={['20%', '20%', '20%', '20%', '20%']}/> */}
                                    <ProfileTenantTable title={"Adults"} headers={["Name", "Last Name", "Relation", "DOB (YY/MM/DD)"]} />
                                    <ProfileTenantTable title={"Children"} headers={["Name", "Last Name", "Relation", "DOB (YY/MM/DD)"]} />
                                    <ProfileTenantTable title={"Pets"} headers={["Name", "Breed", "Type", "Weight"]} />
                                    <ProfileTenantTable title={"Vehicles"} headers={["Make", "Model", "Type", "Lisense", "State"]} />
                                </Box>
                            </ProfileAccordionDetail>
                        </ProfileAccordion>
                    </Box>

                    <Box>
                        <ProfileAccordion>
                            <ProfileAccordionSummary>
                                Tenant Documents
                            </ProfileAccordionSummary>
                            <ProfileAccordionDetail>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        backgroundColor: '#3D5CAC',
                                        borderRadius: '10px',
                                        width: '150px',
                                        height: '32px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: '16px',
                                        color: '#FFFFFF',
                                        marginBottom: '14px',
                                    }}>
                                        <Box>
                                            Add Documents
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.375 9.2085L10.625 9.2085" stroke="white" stroke-linecap="round" />
                                                <path d="M6.375 6.375L9.20833 6.375" stroke="white" stroke-linecap="round" />
                                                <path d="M6.375 12.0415L9.20833 12.0415" stroke="white" stroke-linecap="round" />
                                                <path d="M13.4584 9.20833V9.91667C13.4584 11.7464 13.4584 12.6613 13.0727 13.3466C12.8035 13.8248 12.4082 14.2201 11.93 14.4893C11.2448 14.875 10.3299 14.875 8.50008 14.875V14.875C6.6703 14.875 5.75541 14.875 5.07018 14.4893C4.59192 14.2201 4.19667 13.8248 3.92746 13.3466C3.54175 12.6613 3.54175 11.7464 3.54175 9.91667V6.375C3.54175 5.21147 3.54175 4.6297 3.70096 4.16068C4.00075 3.27751 4.69426 2.58401 5.57743 2.28421C6.04645 2.125 6.62821 2.125 7.79175 2.125V2.125" stroke="white" />
                                                <path d="M12.75 2.125L12.75 6.375" stroke="white" stroke-linecap="round" />
                                                <path d="M14.875 4.25L10.625 4.25" stroke="white" stroke-linecap="round" />
                                            </svg>
                                        </Box>
                                    </Box>
                                    <DocumentCard data={{ title: "Drivers license   ", date: "Jun 22, 23" }} />
                                    <DocumentCard data={{ title: "Drivers license   ", date: "Jun 22, 23" }} />
                                </Box>
                            </ProfileAccordionDetail>
                        </ProfileAccordion>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}

function ProfileAccordion(props) {

    return (
        <Accordion sx={{
            color: '#160449',
            fontWeight: '600',
            backgroundColor: '#F2F2F2',
            boxShadow: 'none',
        }}>
            {props.children}
        </Accordion>
    );
}
function ProfileAccordionSummary(props) {
    return (
        <AccordionSummary
            expandIcon={
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75 7.125L9.5 11.875L14.25 7.125" stroke="#3D5CAC" stroke-width="2.5" />
                </svg>
            }>
            <Box sx={{
                fontSize: '16px',
                width: '100%',
            }}>
                {props.children}
            </Box>
        </AccordionSummary>
    );
}
function ProfileAccordionDetail(props) {
    return (
        <AccordionDetails>
            <Box sx={{
                fontSize: '12px',
            }}>
                {props.children}
            </Box>
        </AccordionDetails>
    );
}

function ProfileTextInputField(props) {
    const inputStyle = {
        border: 'none',
        backgroundColor: '#D9D9D980',
        width: '100%',
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        paddingLeft: '5px',
        borderRadius: '5px',
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '7px',
            width: '100%',
        }}>
            <Box sx={{
                marginRight: '8px',
                whiteSpace: 'nowrap',
            }}>
                {props.children}:
            </Box>
            <input type='text' style={inputStyle} />
        </Box>
    );
}
function DocumentCard(props) {
    const title = props.data.title;
    const date = props.data.date;
    return (
        <Box sx={{
            backgroundColor: '#D9D9D980',
            boxShadow: '0px 1px 4px #00000040',
            marginBottom: '9px',
            padding: '10px',
            width: '100%',
            fontSize: '15px',
        }}>
            <Box sx={{
                fontWeight: 'bold',
                color: '#160449',
            }}>
                {title}
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                fontWeight: 'Normal',
                color: '#00000080',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    Added: {date}
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '7px',
                    }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" fill="#3D5CAC" />
                            <path d="M19.3375 9.7875C18.6024 7.88603 17.3262 6.24164 15.6667 5.05755C14.0072 3.87347 12.0372 3.20161 9.99998 3.125C7.9628 3.20161 5.99272 3.87347 4.33323 5.05755C2.67374 6.24164 1.39758 7.88603 0.662478 9.7875C0.612833 9.92482 0.612833 10.0752 0.662478 10.2125C1.39758 12.114 2.67374 13.7584 4.33323 14.9424C5.99272 16.1265 7.9628 16.7984 9.99998 16.875C12.0372 16.7984 14.0072 16.1265 15.6667 14.9424C17.3262 13.7584 18.6024 12.114 19.3375 10.2125C19.3871 10.0752 19.3871 9.92482 19.3375 9.7875ZM9.99998 14.0625C9.19649 14.0625 8.41105 13.8242 7.74297 13.3778C7.0749 12.9315 6.5542 12.297 6.24672 11.5547C5.93924 10.8123 5.85879 9.99549 6.01554 9.20745C6.17229 8.4194 6.55921 7.69553 7.12736 7.12738C7.69551 6.55923 8.41938 6.17231 9.20742 6.01556C9.99547 5.85881 10.8123 5.93926 11.5546 6.24674C12.297 6.55422 12.9314 7.07492 13.3778 7.743C13.8242 8.41107 14.0625 9.19651 14.0625 10C14.0608 11.0769 13.6323 12.1093 12.8708 12.8708C12.1093 13.6323 11.0769 14.0608 9.99998 14.0625Z" fill="#3D5CAC" />
                        </svg>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#3D5CAC" />
                        </svg>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

function ProfileTenantTable(props) {
    const title = props.title;
    const headers = props.headers;
    // const widthList = props.widths;
    const tableStyle = {
        width: '100%',
        textAlign: 'left',
    };

    return (
        <Box>
            <Box sx={{
                fontSize: '12px',
                fontWeight: 'bold',
                paddingLeft: '10px',

            }}>
                {title}
            </Box>
            <Box sx={{
                fontSize: '10px',
                fontWeight: '600',
            }}>
                <table style={tableStyle}>
                    <tr>
                        {headers.map((text) => (
                            <ProfileTableHeader text={text} />
                        ))}
                    </tr>
                    <tr>
                        {headers.map((header, i) => (
                            // <ProfileTableCell style={widthList[i]} />
                            <ProfileTableCell />
                        ))}
                    </tr>
                    <tr>
                        {headers.map((header, i) => (
                            // <ProfileTableCell style={widthList[i]} />
                            <ProfileTableCell />
                        ))}
                    </tr>
                    <tr>
                        {headers.map((header, i) => (
                            // <ProfileTableCell style={widthList[i]} />
                            <ProfileTableCell />
                        ))}
                    </tr>
                </table>
            </Box>
        </Box>
    );
}
function ProfileTableHeader(props) {
    const tableHeaderStyle = {
        paddingLeft: '10px',
    }
    return (
        <th style={tableHeaderStyle}>
            {props.text}
        </th>
    );
}
function ProfileTableCell(props) {
    const cellWidth = props.style;
    const cellStyle = {
        width: cellWidth,
    }
    const inputStyle = {
        border: 'none',
        backgroundColor: '#D9D9D980',
        width: '85%',
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        paddingLeft: '5px',
        paddingRight: '5px',
        borderRadius: '5px',
    };
    return (
        <td style={cellStyle}>
            <input type='text' style={inputStyle} />
        </td>
    );
}
export default TenantProfileEdit;