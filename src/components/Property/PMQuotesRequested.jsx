import { 
    ThemeProvider, 
    Typography,
    Box,
    Tabs,
    Tab,
    Paper,
    Card,
    CardHeader,
    Slider,
    Stack,
    Button,
    Grid,
} from "@mui/material";
import documentIcon from "../../images/Subtract.png"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import theme from '../../theme/theme';
import refundIcon from './refundIcon.png';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";

export default function PMQuotesRequested({}){
    const location = useLocation();
    let navigate = useNavigate(); 

    const contractsFeeData = location.state.contractsFeeData;
    const property = location.state.propertyData;
    const index = location.state.index;

    const statusList = ["New Quotes", "Contracts"];
    const statusColor = ['#3D5CAC', '#160449'];
    const [tabStatus, setTabStatus] = useState(0);
    function getColor(status) {
        return statusColor[status];
    }
   
//     const address =  (property[index].business_locations!==null||property[index].business_locations!==undefined)
//     ?property[index].business_locations:"";
//    // console.log("propertyLocation "+JSON.parse(address)[0].city)

//     const dataValue = {
//         city: (address!==null||address!==undefined||address!=="") ?JSON.parse(address)[0].city:"",
//         miles: (address!==null||address!==undefined||address!=="")?JSON.parse(address)[0].miles:""
//     }
    const address = property[index].business_locations
  //  console.log("propertyLocation "+JSON.parse(address)[0].city)

  let dataValue = {};

  if(address!=null && address!=undefined){
    dataValue = {
        city: JSON.parse(address)[0].city,
        miles: JSON.parse(address)[0].miles
    }
  }else{
    dataValue = {
        city: "No data",
        miles: "No data"
    }
  }

    const [data, setData] = useState(property[index]);

    function handleAccept(obj){

        try {
    
            const headers = { 
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Credentials":"*"
            };
    
            const input = {
                contract_uid:obj.contract_uid,
                contract_status:"ACTIVE"
            };
    
            console.log(input.contract_uid);
            console.log(input.contract_status);
    
            const response = axios.put("https://l0h6a9zi1e.execute-api.us-west-1.amazonaws.com/dev/contracts",
            input,
            headers);
            console.log("PUT result", response);
            if (response.code === 200) {
                return true;
            }
        } catch (error){
            console.log("error", error)
            return false;
        }
    }
    
    function handleDecline(obj){
        
        try {
    
            const headers = { 
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Credentials":"*"
            };
    
            const input = {
                contract_uid:obj.contract_uid,
                contract_status:"REJECTED"
             };
    
             console.log(input.contract_uid);
             console.log(input.contract_status);
    
            const response = axios.put("https://l0h6a9zi1e.execute-api.us-west-1.amazonaws.com/dev/contracts",
            input,
            headers);
            console.log("PUT result", response);
            if (response.code === 200) {
                return true;
            }
        } catch (error){
            console.log("error", error)
            return false;
        }
    }
    

    return( 
        <ThemeProvider theme={theme}>
            <Box
            style={{
                display: 'flex',
                justifyContent: 'center',
                // alignItems: 'center',
                width: '100%', // Take up full screen width
                minHeight: '100vh', // Set the Box height to full height
                marginTop: theme.spacing(2), // Set the margin to 20px
            }}
            >
                <Paper
                    style={{
                        margin: '30px',
                        backgroundColor: theme.palette.primary.main,
                        width: '100%', // Occupy full width with 25px margins on each side
                        paddingTop: '10px',
                    }}
                >
                     <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            paddingBottom: "0px"
                        }}
                    >
                        <Box
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography sx={{color: theme.typography.primary.black, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.largeFont}}>
                               Search for Properties Manager
                            </Typography>
                        </Box>
                        <Box position="absolute" right={30}>
                            <Button >
                                <SearchIcon />
                            </Button>
                        </Box>
                    </Stack>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box onClick={()=>{navigate("/properties")}}>
                            <Button  sx={{textTransform: 'none', color: theme.typography.common.blue, fontWeight: theme.typography.common.fontWeight, fontSize: '16px', "&:hover, &:focus, &:active": {background: theme.palette.primary.main}}}>

                                {/* <UTurnLeftIcon sx={{color: theme.typography.common.blue, fontSize: "30px", margin:'5px', transform: 'rotate(90deg)', fontWeight: theme.typography.common.fontWeight}}/> */}
                                <img src={refundIcon} style={{width: '25px', height: '25px', margin:'5px'}}/>
                                <Typography>
                                    Return to Viewing All Properties
                                </Typography>
                            </Button>
                        </Box>
                    </Stack>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box sx={{ 
                            borderBottom: 0,
                            width: '75%',
                        }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        color: '#F2F2F2',
                        fontWeight: 'bold',
                        fontSize: '10px',
                        textAlign: 'center',
                    }}>
                        <NavTab color={statusColor[0]}>
                            <Box onClick={() => setTabStatus(0)}>
                                {statusList[0]}
                            </Box>
                            
                        </NavTab>
                        <NavTab color={statusColor[1]}>
                            <Box onClick={() => setTabStatus(1)}>
                                {statusList[1]}
                            </Box>
                        </NavTab>
                    </Box>
                    <Box sx={{
                        position: 'relative',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '10px',
                        bottom: '40px',
                    }}>
                        <Box sx={{
                            backgroundColor: getColor(tabStatus),
                            height: '14px',
                            borderRadius: '9px 9px 0px 0px',
                        }}></Box>
                        <Box sx={{
                            padding: '13px',
                        }}>

                            {
                                contractsFeeData.length>0 && contractsFeeData.map(data=>{
                                   
                                    return data.contract_status=="SENT" &&  <div>
                                        <DocumentCard data={data}/>
                                        <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        position="relative"
                        sx={{ padding: '8px', paddingTop: '8%' }}
                    >
                        <Button 
                variant="contained"
                sx={{
                    textTransform: 'none',
                    background: '#A52A2A',
                    color: theme.palette.background.default,
                    width: `40%`,
                    height: `85%`,
                    top: `10%`,
                    borderRadius: '10px 10px 10px 10px',
                    fontSize: `10px`
                }} onClick={()=>{handleDecline(data)}}>
                    Decline
                    </Button>
                    <Button 
                variant="contained"
                sx={{
                    textTransform: 'none',
                    background: '#76B148',
                    color: theme.palette.background.default,
                    width: `40%`,
                    height: `85%`,
                    top: `10%`,
                    borderRadius: '10px 10px 10px 10px',
                    fontSize: `10px`
                }} onClick={()=>{handleAccept(data)}}>
                    Accept
                    </Button>
                    </Stack>
                                        </div>;
                                })
                            }
                            </Box>
                            
                            </Box>
                        </Box>
                    </Stack>
                </Paper>
            </Box>
        </ThemeProvider>
    )
}

function NavTab(props) {
    const color = props.color;
    return (
        <Box sx={{
            backgroundColor: color,
            width: '50%',
            height: '60px',
            borderRadius: '10px',
        }}>
            <Box sx={{
                marginTop: '5px',
            }}>
                {props.children}
            </Box>
        </Box>
    )

}


function DocumentCard(props) {

    const obj = props.data
    console.log(JSON.stringify(obj))

    let navigate = useNavigate(); 
    
    const textStyle = {
        textTransform: 'none',
        color: theme.typography.propertyPage.color,
        fontWeight: theme.typography.light.fontWeight,
        fontSize:theme.typography.smallFont,
    };

    
    return (
        <Box sx={{
            backgroundColor: '#D6D5DA',
            borderRadius: '10px',
            padding: '5px',
            marginBottom: '10px',
            fontSize: '13px',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                
            }}>
                <Box sx={{
                    fontWeight: 'bold',
                }}>
                   Name
                </Box>
                </Box>                
                <Box>
                <Typography sx={textStyle}> Area of service:{obj.city} +-{obj.miles} miles</Typography>
                </Box>
                <Box>
                <Typography sx={textStyle}> Estimated Fees </Typography>
                    
                </Box>
                {obj!==null && obj.fees!==null && obj.fees.map((fee) =>{
                  return( <FeesTextCard fee={fee}/>)
                })}
             
                <Box onClick={()=>{navigate("/viewDocument",{
                    state: {
                        documents : obj.documents
                    }
                }
                )}}>
                View Documents <img src={documentIcon} style={{width: '15px', height: '20px', margin:'0px', paddingRight: "15px"}}/>
                </Box>
               
        </Box>
    );
}


function FeesTextCard(props) {

    let fee = props.fee;
   return(<Typography>{fee.fee_name}:{fee.charge}{fee.fee_type}</Typography>)
  }
  
