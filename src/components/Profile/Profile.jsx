import { Box, ThemeProvider, createTheme } from '@mui/system';

import ChaseIcon from './ChaseIcon.png';
import VenmoIcon from './VenmoIcon.png';

const theme = createTheme({
    palette: {
        background: {
            basic: '#000000',
            gray: '#F2F2F2',
            blue: '#3D5CAC'
        },
        text: {
            primary: '#3D5CAC',
            secondary: '#F2F2F2',
        },
    },
});
function Profile() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                "font-family": 'Source Sans Pro',
                color: 'text.primary',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'background.blue',
                    padding: '2%',
                    minHeight: '80px',
                    boxShadow: '0px 4px 4px #00000032',
                }}>
                    <Box sx={{
                        marginLeft: '0px',
                        marginRight: 'auto',
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9838 2.54161C14.0711 2.71093 14.0928 2.92777 14.1361 3.36144C14.2182 4.1823 14.2593 4.59274 14.4311 4.81793C14.649 5.10358 15.0034 5.25038 15.3595 5.20248C15.6402 5.16472 15.9594 4.90352 16.5979 4.38113C16.9352 4.10515 17.1038 3.96716 17.2853 3.90918C17.5158 3.83555 17.7652 3.84798 17.9872 3.94419C18.162 4.01994 18.3161 4.17402 18.6243 4.4822L19.5178 5.37567C19.8259 5.68385 19.98 5.83794 20.0558 6.01275C20.152 6.23478 20.1644 6.48415 20.0908 6.71464C20.0328 6.89612 19.8948 7.06478 19.6188 7.4021C19.0964 8.0406 18.8352 8.35984 18.7975 8.64056C18.7496 8.99662 18.8964 9.35102 19.182 9.56893C19.4072 9.74072 19.8176 9.78176 20.6385 9.86385C21.0722 9.90722 21.2891 9.92891 21.4584 10.0162C21.6734 10.1272 21.841 10.3123 21.9299 10.5373C22 10.7145 22 10.9324 22 11.3682V12.6319C22 13.0676 22 13.2855 21.93 13.4626C21.841 13.6877 21.6734 13.8729 21.4583 13.9838C21.289 14.0711 21.0722 14.0928 20.6386 14.1361L20.6386 14.1361C19.818 14.2182 19.4077 14.2592 19.1825 14.4309C18.8967 14.6489 18.7499 15.0034 18.7979 15.3596C18.8357 15.6402 19.0968 15.9593 19.619 16.5976C19.8949 16.9348 20.0328 17.1034 20.0908 17.2848C20.1645 17.5154 20.152 17.7648 20.0558 17.9869C19.98 18.1617 19.826 18.3157 19.5179 18.6238L18.6243 19.5174C18.3162 19.8255 18.1621 19.9796 17.9873 20.0554C17.7652 20.1516 17.5159 20.164 17.2854 20.0904C17.1039 20.0324 16.9352 19.8944 16.5979 19.6184L16.5979 19.6184C15.9594 19.096 15.6402 18.8348 15.3595 18.7971C15.0034 18.7492 14.649 18.896 14.4311 19.1816C14.2593 19.4068 14.2183 19.8173 14.1362 20.6383C14.0928 21.0722 14.0711 21.2891 13.9837 21.4585C13.8728 21.6735 13.6877 21.8409 13.4628 21.9299C13.2856 22 13.0676 22 12.6316 22H11.3682C10.9324 22 10.7145 22 10.5373 21.9299C10.3123 21.841 10.1272 21.6734 10.0162 21.4584C9.92891 21.2891 9.90722 21.0722 9.86385 20.6385C9.78176 19.8176 9.74072 19.4072 9.56892 19.182C9.35101 18.8964 8.99663 18.7496 8.64057 18.7975C8.35985 18.8352 8.04059 19.0964 7.40208 19.6189L7.40206 19.6189C7.06473 19.8949 6.89607 20.0329 6.71458 20.0908C6.4841 20.1645 6.23474 20.152 6.01272 20.0558C5.8379 19.9801 5.6838 19.826 5.37561 19.5178L4.48217 18.6243C4.17398 18.3162 4.01988 18.1621 3.94414 17.9873C3.84794 17.7652 3.8355 17.5159 3.90913 17.2854C3.96711 17.1039 4.10511 16.9352 4.3811 16.5979C4.90351 15.9594 5.16471 15.6402 5.20247 15.3594C5.25037 15.0034 5.10357 14.649 4.81792 14.4311C4.59273 14.2593 4.1823 14.2182 3.36143 14.1361C2.92776 14.0928 2.71093 14.0711 2.54161 13.9838C2.32656 13.8728 2.15902 13.6877 2.07005 13.4627C2 13.2855 2 13.0676 2 12.6318V11.3683C2 10.9324 2 10.7144 2.07008 10.5372C2.15905 10.3123 2.32654 10.1272 2.54152 10.0163C2.71088 9.92891 2.92777 9.90722 3.36155 9.86384H3.36155H3.36156C4.18264 9.78173 4.59319 9.74068 4.81842 9.56881C5.10395 9.35092 5.2507 8.99664 5.20287 8.64066C5.16514 8.35987 4.90385 8.04052 4.38128 7.40182C4.10516 7.06435 3.96711 6.89561 3.90914 6.71405C3.83557 6.48364 3.848 6.23438 3.94413 6.01243C4.01988 5.83754 4.17403 5.68339 4.48233 5.37509L5.37565 4.48177L5.37566 4.48177C5.68385 4.17357 5.83795 4.01947 6.01277 3.94373C6.23478 3.84753 6.48414 3.8351 6.71463 3.90872C6.89612 3.9667 7.06481 4.10472 7.4022 4.38076C8.04061 4.9031 8.35982 5.16427 8.64044 5.20207C8.99661 5.25003 9.35113 5.10319 9.56907 4.81742C9.74077 4.59227 9.78181 4.18195 9.86387 3.36131C9.90722 2.92776 9.9289 2.71098 10.0162 2.5417C10.1271 2.32658 10.3123 2.15898 10.5374 2.07001C10.7145 2 10.9324 2 11.3681 2H12.6318C13.0676 2 13.2855 2 13.4627 2.07005C13.6877 2.15902 13.8728 2.32656 13.9838 2.54161ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#F2F2F2" />
                        </svg>
                    </Box>

                    <Box sx={{
                        color: 'text.secondary',
                        fontSize: '18px',
                        fontWeight: 'bold',
                    }}>
                        Owner Profile
                    </Box>
                    <Box sx={{
                        marginLeft: 'auto',
                        marginRight: '0px%',
                        width: 24,
                        height: 24,
                    }}></Box>
                </Box>
                <Box sx={{
                    position: 'relative',
                    bottom: '90px',
                    padding: '25px',
                }}>
                    <Box sx={{
                        height: '121px',
                        width: '121px',
                        backgroundColor: '#bbb',
                        borderRadius: '50%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        boxShadow: '0px 4px 4px #00000032'
                    }}>

                    </Box>
                    <Box sx={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}>
                        <TextBox>
                            Paul McCartney
                        </TextBox>
                    </Box>
                    <Box sx={{
                        fontSize: '14px',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <Box sx={{
                                fontWeight: 'bold',
                            }}>
                                Owner
                            </Box>
                            <Box sx={{
                                marginLeft: '10px',
                                marginRight: '10px',
                            }}>
                                &#x2022;
                            </Box>
                            <Box>
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
                    <GrayBox>
                        <FlexBox direction="column">
                            <TextBox fontSize={'16px'} fontWeight={'bold'} decoration={'underline'}>
                                abbeyroad1969@gmail.com
                            </TextBox>
                            <TextBox fontSize={'12px'}>
                                Email
                            </TextBox>
                            <TextBox fontSize={'16px'} fontWeight={'bold'}>
                                (408)555-4823
                            </TextBox>
                            <TextBox fontSize={'12px'}>
                                Phone Number
                            </TextBox>
                        </FlexBox>
                    </GrayBox>
                    <GrayBox>
                        <FlexBox direction="column">
                            <TextBox fontSize={'16px'} fontWeight={'bold'}>
                                Accout Details
                            </TextBox>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '2px',
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '50px',
                                    height: '25px',
                                }}>
                                    <svg width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.44755 0.00189367C3.20488 0.00218967 2.96221 0.00378882 2.71956 0.00669021C2.47903 0.0146838 2.23369 0.0274734 1.99477 0.0706385C1.63369 0.127529 1.29132 0.269081 0.995821 0.483647C0.700323 0.698214 0.460145 0.979664 0.295046 1.30484C0.182801 1.52546 0.112246 1.74928 0.0705546 1.99229C0.0256562 2.2289 0.0112246 2.4719 0.00641405 2.71171C0.00313136 2.82306 0.000993227 2.93444 0 3.04584L0 21.5221C0 21.634 0.00320703 21.7427 0.00481054 21.8531C0.0112246 22.0929 0.0256562 22.3375 0.0689511 22.5757C0.112246 22.8155 0.184404 23.0409 0.29665 23.2615C0.517766 23.6955 0.871537 24.0482 1.30686 24.2687C1.52815 24.3806 1.75264 24.4526 1.99637 24.4957C2.23369 24.5389 2.47743 24.5533 2.71796 24.5597L3.05149 24.5645H35.4328L35.7648 24.5597C36.0053 24.5533 36.2506 24.5389 36.4896 24.4957C36.7301 24.4526 36.9562 24.3822 37.1759 24.2703C37.6123 24.0501 37.9668 23.6966 38.1877 23.2615C38.2999 23.0409 38.3721 22.8171 38.4138 22.5741C38.4571 22.3375 38.4715 22.0945 38.4779 21.8546C38.4811 21.7427 38.4827 21.634 38.4827 21.5221L38.4843 21.1288V3.04424C38.4843 2.93233 38.4811 2.82362 38.4779 2.7133C38.4749 2.47116 38.4534 2.2296 38.4138 1.99069C38.337 1.50925 38.1096 1.06431 37.764 0.71947C37.4185 0.374628 36.9724 0.147532 36.4896 0.0706385C36.2499 0.031243 36.0076 0.00986665 35.7648 0.00669021C35.5227 -0.000142411 35.2805 -0.00174191 35.0384 0.00189367H3.44755ZM3.44755 0.820433H35.4248C35.5306 0.820433 35.6349 0.823631 35.7407 0.82523C35.9251 0.831624 36.1416 0.841216 36.342 0.876388C36.5168 0.908362 36.6627 0.956324 36.8022 1.02667C37.0835 1.16902 37.3121 1.3969 37.4549 1.67734C37.5283 1.82227 37.5792 1.97753 37.6056 2.13777C37.6409 2.33441 37.6505 2.55024 37.6553 2.73569C37.6585 2.8396 37.6601 2.94352 37.6601 3.05063V21.5189C37.6601 21.6228 37.6601 21.7268 37.6553 21.8323C37.6505 22.0161 37.6409 22.2319 37.604 22.4318C37.5693 22.667 37.4783 22.8905 37.3388 23.0833C37.1993 23.2762 37.0152 23.4327 36.8022 23.5397C36.6578 23.6125 36.5032 23.6632 36.3436 23.69C36.1458 23.7213 35.9459 23.7384 35.7455 23.7411L35.4248 23.7459H3.0563C2.95046 23.7459 2.84303 23.7427 2.74201 23.7411C2.5406 23.7385 2.33963 23.7214 2.14069 23.69C1.96591 23.658 1.81999 23.61 1.67888 23.5397C1.39759 23.3979 1.16939 23.1698 1.02785 22.889C0.954585 22.744 0.903765 22.5888 0.877122 22.4286C0.845276 22.2313 0.828125 22.032 0.825809 21.8323C0.823659 21.7273 0.82259 21.6223 0.822602 21.5173V3.04903C0.822602 2.94512 0.822602 2.8396 0.825809 2.73409C0.832223 2.55184 0.841844 2.33761 0.877122 2.13457C0.909192 1.96191 0.957297 1.81643 1.02785 1.67574C1.17073 1.39577 1.39931 1.16843 1.68048 1.02667C1.82565 0.954302 1.98072 0.903665 2.14069 0.876388C2.34113 0.841216 2.5576 0.830026 2.74201 0.82523C2.84624 0.822032 2.95207 0.822032 3.0563 0.820433H3.44755ZM11.0001 6.73566C10.519 6.76124 9.92896 7.0538 9.58901 7.46467C9.28274 7.81638 9.01175 8.39192 9.0823 8.93228C9.62429 8.98025 10.1647 8.6621 10.5062 8.26402C10.8349 7.85156 11.0594 7.3 11.0001 6.73726V6.73566ZM14.5391 7.40711V16.1888H15.9052V13.188H17.7974C19.526 13.188 20.7398 12.0066 20.7398 10.2912C20.7398 8.58057 19.55 7.40552 17.8407 7.40552L14.5391 7.40711ZM15.9052 8.55659H17.4799C18.6649 8.55659 19.3416 9.18968 19.3416 10.2976C19.3416 11.4039 18.6649 12.0434 17.4751 12.0434H15.9052V8.55659ZM10.8478 9.0362C10.1262 9.05219 9.51685 9.48384 9.16408 9.48384C8.78725 9.48384 8.2132 9.06178 7.59103 9.07297C7.18632 9.08304 6.79131 9.19858 6.44528 9.4081C6.09926 9.61761 5.81428 9.9138 5.61871 10.2672C4.77366 11.7188 5.39582 13.8723 6.21842 15.0553C6.6177 15.6405 7.09875 16.2847 7.73214 16.2608C8.33025 16.2384 8.56597 15.8739 9.29236 15.8739C10.0204 15.8739 10.232 16.2608 10.8638 16.2496C11.5212 16.2384 11.9333 15.6644 12.331 15.0777C12.7896 14.4111 12.9772 13.7668 12.9885 13.7332C12.9772 13.7204 11.7217 13.2408 11.7105 11.8004C11.6976 10.5949 12.6966 10.021 12.7431 9.98583C12.1787 9.1545 11.3 9.06178 10.9953 9.0378C10.9462 9.03472 10.897 9.03526 10.8478 9.0362ZM24.003 9.67089C22.4155 9.67089 21.4277 10.523 21.354 11.6789H22.5999C22.7154 11.1065 23.1916 10.742 23.9549 10.742C24.7598 10.742 25.2425 11.1673 25.2425 11.8787V12.3727L23.4835 12.475C21.9585 12.5614 21.0974 13.2488 21.0974 14.3679C21.0974 15.519 21.9762 16.2975 23.2333 16.2975C24.0768 16.2975 24.8881 15.8483 25.2601 15.1353H25.2906V16.1888H26.5542V11.7764C26.5542 10.4926 25.56 9.67089 24.003 9.67089ZM27.1138 9.78599L29.4325 16.1952C29.4325 16.2 29.3154 16.5789 29.3154 16.5901C29.115 17.2456 28.7863 17.503 28.1753 17.503C28.0647 17.503 27.845 17.503 27.7472 17.479V18.5437C27.8434 18.5613 28.1753 18.5741 28.2844 18.5741C29.6153 18.5741 30.2503 18.0753 30.7987 16.523L33.204 9.78599H31.8121L30.1893 14.9962H30.1653L28.5409 9.7844L27.1138 9.78599ZM25.2425 13.2856V13.7908C25.2425 14.6237 24.5209 15.2568 23.6005 15.2568C22.8918 15.2568 22.4283 14.8923 22.4283 14.3311C22.4283 13.7844 22.8741 13.4358 23.6614 13.3831L25.2425 13.2856Z" fill="#160449" />
                                    </svg>
                                </Box>
                                <TextBox fontSize={'14px'}>
                                    <Box sx={{
                                        width: '200px',
                                    }}>
                                        abbeyroad1969@gmail.com
                                    </Box>
                                </TextBox>
                                <Box sx={{
                                    width: '50px',
                                    height: '25px',
                                }}></Box>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '2px',
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '50px',
                                    height: '25px',
                                }}>
                                    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.2498 2.41668C17.1317 1.12026 15.1104 0.564453 12.5246 0.564453H5.02C4.76417 0.564463 4.51672 0.657308 4.32216 0.826297C4.1276 0.995286 3.99868 1.22933 3.95859 1.48636L0.833792 21.6458C0.771682 22.0433 1.07429 22.4033 1.47039 22.4033H6.10349L7.26706 14.8959L7.23095 15.131C7.31385 14.6003 7.76002 14.2089 8.28836 14.2089H10.49C14.8151 14.2089 18.2018 12.4219 19.191 7.25249C19.2204 7.0996 19.2458 6.95079 19.2678 6.80541C19.143 6.73815 19.143 6.73815 19.2678 6.80541C19.5624 4.89474 19.2658 3.59416 18.2498 2.41668Z" fill="#27346A" />
                                        <path d="M9.03987 6.11712C9.16653 6.05577 9.30506 6.02398 9.44535 6.02407H15.3289C16.0256 6.02407 16.6754 6.07019 17.2692 6.1674C17.4354 6.19436 17.6007 6.22653 17.7649 6.26389C17.9976 6.31613 18.2277 6.38007 18.4542 6.45547C18.7461 6.55465 19.018 6.67015 19.2679 6.80541C19.5624 4.89401 19.2658 3.59416 18.2498 2.41668C17.131 1.12026 15.1104 0.564453 12.5246 0.564453H5.01936C4.49094 0.564453 4.0414 0.955778 3.95859 1.48636L0.833793 21.6451C0.771682 22.0432 1.07429 22.4027 1.46975 22.4027H6.10349L8.51754 6.83055C8.54128 6.67749 8.60122 6.53259 8.69221 6.40831C8.78319 6.28403 8.9025 6.1841 9.03987 6.11712Z" fill="#27346A" />
                                        <path d="M19.1913 7.25274C18.202 12.4214 14.8154 14.2092 10.4902 14.2092H8.28796C7.75962 14.2092 7.31337 14.6006 7.23128 15.1312L5.78371 24.4658C5.72963 24.8137 5.99412 25.129 6.34014 25.129H10.2457C10.4695 25.1289 10.6858 25.0476 10.8559 24.8998C11.026 24.752 11.1387 24.5473 11.1736 24.3225L11.2117 24.12L11.9478 19.3745L11.9952 19.1122C12.0301 18.8875 12.1428 18.6828 12.3129 18.5349C12.4829 18.3871 12.6993 18.3058 12.923 18.3058H13.5075C17.2909 18.3058 20.2533 16.7422 21.119 12.2204C21.4804 10.3307 21.2934 8.75298 20.3375 7.6448C20.0476 7.30915 19.6875 7.03194 19.2681 6.80566C19.2454 6.95178 19.2207 7.09985 19.1913 7.25274Z" fill="#2790C3" />
                                        <path d="M18.2329 6.38595C18.0786 6.34013 17.9229 6.29956 17.766 6.26432C17.6017 6.22758 17.4364 6.19562 17.2703 6.16849C16.6758 6.07062 16.0265 6.02442 15.3291 6.02442H9.44636C9.30597 6.02409 9.16733 6.05616 9.04088 6.11821C8.90336 6.18498 8.78391 6.28485 8.69289 6.40916C8.60186 6.53348 8.54199 6.67849 8.51847 6.83164L7.26808 14.8963L7.23196 15.1314C7.31422 14.6008 7.76039 14.2093 8.28881 14.2093H10.4911C14.8162 14.2093 18.2028 12.4223 19.192 7.25292C19.2215 7.10003 19.2462 6.95188 19.2689 6.80584C19.0184 6.67132 18.7472 6.55508 18.4552 6.45656C18.3815 6.43171 18.3073 6.40817 18.2329 6.38595Z" fill="#1F264F" />
                                    </svg>
                                </Box>
                                <TextBox fontSize={'14px'}>
                                    <Box sx={{
                                        width: '200px',
                                    }}>
                                        abbeyroad1969@gmail.com
                                    </Box>
                                </TextBox>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '50px',
                                    height: '25px',
                                }}></Box>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '2px',
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '50px',
                                    height: '25px',
                                }}>
                                    <img src={VenmoIcon} alt="Venmo Icon" width="25" height="25" />
                                </Box>
                                <TextBox fontSize={'14px'}>
                                    <Box sx={{
                                        width: '200px',
                                    }}>
                                        @abbeyroad1969
                                    </Box>
                                </TextBox>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '50px',
                                    height: '25px',
                                }}></Box>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '2px',
                            }}>
                                <Box sx={{
                                    width: '50px',
                                    height: '25px',
                                }}>
                                    <img src={ChaseIcon} alt="Chase Icon" width="46" height="25" />
                                </Box>
                                <TextBox fontSize={'14px'}>
                                    <Box sx={{
                                        width: '200px',
                                    }}>
                                        Account #: **-****-*******-238
                                    </Box>
                                </TextBox>
                                <Box sx={{
                                    width: '50px',
                                    height: '25px',
                                }}></Box>
                            </Box>
                        </FlexBox>

                    </GrayBox>
                    <GrayBox>
                        <FlexBox direction="row">
                            <Box>
                                <TextBox fontSize={'16px'} fontWeight={'bold'}>
                                    ***-**-****
                                </TextBox>
                                <TextBox fontSize={'12px'}>
                                    SSN
                                </TextBox>
                            </Box>
                            <Box>
                                <TextBox fontSize={'16px'} fontWeight={'bold'}>
                                    No EIN Provided
                                </TextBox>
                                <TextBox fontSize={'12px'}>
                                    EIN
                                </TextBox>
                            </Box>
                        </FlexBox>
                    </GrayBox>
                    <Box sx={{
                        borderRadius: "10px",
                        boxShadow: '0px 4px 4px #00000032'
                    }}>
                        <GrayBox>
                            <TextBox fontSize={'15px'} fontWeight={'bold'}>
                                Edit Profile and Password
                            </TextBox>
                        </GrayBox>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

function GrayBox(props) {
    return (
        <Box sx={{
            backgroundColor: 'background.gray',
            borderRadius: "10px",
            marginTop: "18px",
            padding: '6px',
        }}>
            {props.children}
        </Box>
    );
}

function FlexBox(props) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: props.direction,
            justifyContent: 'space-evenly',
        }}>
            {props.children}
        </Box>
    );
}

function TextBox(props) {
    return (
        <Box sx={{
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: 'center',
            fontSize: props.fontSize,
            fontWeight: props.fontWeight,
            textDecoration: props.decoration,
        }}>
            {props.children}
        </Box>
    );
}
export default Profile;