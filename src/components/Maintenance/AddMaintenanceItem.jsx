import { 
    Typography, 
    Box, 
    Stack,
    Paper,
    Button,
    ThemeProvider,
    Form,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Grid,
    Input,
    Container,
    Radio,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    UploadFile,
    InputAdornment
} from "@mui/material";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormHelperText from '@mui/material/FormHelperText';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ImageUploader from '../ImageUploader';

import theme from '../../theme/theme';
import dataURItoBlob from '../utils/dataURItoBlob'
import { type } from "@testing-library/user-event/dist/type";

// function dataURItoBlob(dataURI) {
//     // Split the input to get the mime type and the data itself
//     const [typeInfo, base64] = dataURI.split(",");
    
//     // Decode the base64 string
//     const byteString = atob(base64);
    
//     // Create a Uint8Array to hold the binary data
//     const arrayBuffer = new ArrayBuffer(byteString.length);
//     const intArray = new Uint8Array(arrayBuffer);
    
//     for (let i = 0; i < byteString.length; i++) {
//         intArray[i] = byteString.charCodeAt(i);
//     }
    
//     // Create a Blob from the ArrayBuffer
//     const blob = new Blob([intArray], { type: typeInfo });
    
//     return blob;
// }

export default function AddMaintenanceItem({}){
    const location = useLocation();
    let navigate = useNavigate();
    const [propertyId, setPropertyId] = useState('200-000029')
    const [property, setProperty] = useState('');
    const [issue, setIssue] = useState('');
    const [toggleGroupValue, setToggleGroupValue] = useState('tenant');
    const [toggleAlignment, setToggleAlignment] = useState('low');
    const [cost, setCost] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedImageList, setSelectedImageList] = useState([]);



    const handlePropertyChange = (event) => {
        console.log("handlePropertyChange", event.target.value)
        setProperty(event.target.value);
    };

    const handleIssueChange = (event) => {
        console.log("handleIssueCategoryChange", event.target.value)
        setIssue(event.target.value);
    };

    const handleCostChange = (event) => {
        console.log("handleCostChange", event.target.value)
        setCost(event.target.value);
    };

    const handleTitleChange = (event) => {
        console.log("handleTitleChange", event.target.value)
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        console.log("handleDescriptionChange", event.target.value)
        setDescription(event.target.value);
    };

    const handlePriorityChange = (event, newToggleGroupValue) => {
        console.log("handlePriorityChange", event.target.value)
        console.log("handleToggleGroupChange", newToggleGroupValue)
        setToggleGroupValue(newToggleGroupValue);
        setToggleAlignment(newToggleGroupValue);
    };

    const handleCompletedChange = (event, newToggleGroupValue) => {
        console.log("handleToggleGroupChange", newToggleGroupValue)
        setToggleGroupValue(newToggleGroupValue);
        setToggleAlignment(newToggleGroupValue);
    };

    const handleBackButton = () => {
        console.log("handleBackButton")
        navigate(-1);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;

        formData.append("maintenance_property_id", propertyId);
        formData.append("maintenance_title", title);
        formData.append("maintenance_desc", description);
        formData.append("maintenance_request_type", issue);
        formData.append("maintenance_request_created_by", "600-000003");
        formData.append("maintenance_priority", toggleAlignment);
        formData.append("maintenance_can_reschedule", 1);
        formData.append("maintenance_assigned_business", null);
        formData.append("maintenance_assigned_worker", null);
        formData.append("maintenance_scheduled_date", null);
        formData.append("maintenance_scheduled_time", null);
        formData.append("maintenance_frequency", "One Time");
        formData.append("maintenance_notes", null);
        formData.append("maintenance_request_created_date", formattedDate); // Convert to ISO string format
        formData.append("maintenance_request_closed_date", null);
        formData.append("maintenance_request_adjustment_date", null);

        for (let i = 0; i < selectedImageList.length; i++) {
            console.log("selectedImageList[i].file", selectedImageList[i].data_url)
            const imageBlob = dataURItoBlob(selectedImageList[i].data_url);
            console.log(imageBlob)
            if(i === 0){
                console.log("i === 0")
                formData.append("img_cover", imageBlob);
            } else if (i > 0){
                console.log("i > 0")
                formData.append("img_" + (i-1), imageBlob);
            }
        }


        for (let [key, value] of formData.entries()) {
            console.log(key, value);    
        }


        const postData = async () => {
            try {
                const response = await fetch("https://l0h6a9zi1e.execute-api.us-west-1.amazonaws.com/dev/maintenanceRequests", {
                    method: "POST",
                    body: formData,
                })
                const data = await response.json();
                console.log("data response", data)
            } catch (err){  
                console.error("Error: ", err.message)
            }
        }
        postData();

        setSelectedImageList([])
        setProperty('')
        setIssue('')
        setToggleGroupValue('')
        setToggleAlignment('')
        setCost('')
        setTitle('')
        setDescription('')
        navigate('/maintenance');
    }


    return (
        <ThemeProvider theme={theme}>
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '100%', // Ensure the box spans the full viewport width
                    height: '100vh', // Ensure the box spans the full viewport height
                    paddingTop: "30px"
                }}
            >
                <Paper
                    style={{
                        // margin: '30px',
                        padding: theme.spacing(2),
                        backgroundColor: theme.palette.form.main,
                        width: '85%', // Occupy full width with 25px margins on each side
                        [theme.breakpoints.down('sm')]: {
                            width: '80%',
                        },
                        [theme.breakpoints.up('sm')]: {
                            width: '50%',
                        },
                        paddingTop: '10px',
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                    >
                        <Box
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography sx={{color: theme.typography.primary.black, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.largeFont}}>
                                Add Maintenance
                            </Typography>
                        </Box>
                        <Box position="absolute" left={0}>
                            <Button onClick={() => handleBackButton()}>
                                <ArrowBackIcon sx={{color: theme.typography.common.blue, fontSize: "30px", margin:'5px'}}/>
                            </Button>
                        </Box>
                    </Stack>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        padding="25px"
                    >
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            autoComplete="off"
                        >
                             <Grid container spacing={6}>
                                {/* Select Field for Property */}
                                <Grid item xs={12}>
                                    <Typography sx={{color: theme.typography.common.blue, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.mediumFont}}>
                                        Property
                                    </Typography>
                                    <FormControl 
                                        fullWidth
                                        sx={{
                                            backgroundColor: 'white',
                                            borderColor: 'black',
                                        }}
                                        size="small"
                                    >
                                        {/* <InputLabel>Select Property</InputLabel> */}
                                        <Select onChange={handlePropertyChange}>
                                            <MenuItem value={"6123 Corte de la Reina"}>6123 Corte de la Reina</MenuItem>
                                            <MenuItem value={"9501 Kempler Drive"}>9501 Kempler Drive</MenuItem>
                                            <MenuItem value={"9107 Japonica Court"}>9107 Japonica Court</MenuItem>
                                            <MenuItem value={propertyId}>5640 W. Sunset Road</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                {/* Select Field for Issue and Cost Estimate */}
                                <Grid item xs={6}>
                                    <Typography sx={{color: theme.typography.common.blue, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.mediumFont}}>
                                        Issue
                                    </Typography>
                                    <FormControl 
                                        fullWidth
                                        sx={{
                                            backgroundColor: 'white',
                                            borderColor: 'black',
                                            borderRadius: '7px',
                                        }}
                                        size="small" 
                                    >
                                        {/* <InputLabel>Select Issue Category</InputLabel> */}
                                        <Select onChange={handleIssueChange}>
                                            <MenuItem value={"Plumbing"}>Plumbing</MenuItem>
                                            <MenuItem value={"Electrical"}>Electrical</MenuItem>
                                            <MenuItem value={"Appliance"}>Appliance</MenuItem>
                                            <MenuItem value={"HVAC"}>HVAC</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography sx={{color: theme.typography.common.blue, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.mediumFont}}>
                                        Estimated Cost
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        sx={{
                                            backgroundColor: 'white',
                                            borderColor: 'black',
                                            borderRadius: '7px',
                                        }}
                                        size="small"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">$</InputAdornment>
                                            ),
                                        }}
                                        onChange={handleCostChange}
                                    />
                                </Grid>

                                {/* Text Field for Title */}
                                <Grid item xs={12}>
                                    <Typography sx={{color: theme.typography.common.blue, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.mediumFont}}>
                                        Title
                                    </Typography>
                                    <TextField 
                                        onChange={handleTitleChange} 
                                        sx={{
                                            backgroundColor: 'white',
                                            borderColor: 'black',
                                            borderRadius: '7px',
                                        }}
                                        size="small"
                                        fullWidth
                                    />
                                </Grid>

                                {/* Priority Toggle Field */}
                                <Grid item xs={12}>
                                    <Typography sx={{color: theme.typography.common.blue, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.mediumFont}}>
                                        Priority
                                    </Typography>
                                    <ToggleButtonGroup
                                        exclusive
                                        fullWidth
                                        onChange={handlePriorityChange}
                                        aria-label="Priority"
                                        size="small"
                                        sx={{
                                            '& .MuiToggleButton-root.Mui-selected': {
                                            backgroundColor: 'lightblue', // Selected background color
                                            color: 'white', // Selected text color
                                        },
                                        }}
                                    >
                                        <ToggleButton 
                                            value="Low"
                                            sx={{
                                                backgroundColor: theme.palette.priority.low,
                                                borderRadius: '20px',
                                                color: 'white',
                                                marginRight: "10px",
                                                '&.Mui-selected': {
                                                borderColor: "black",
                                                backgroundColor: theme.palette.priority.low,
                                                },
                                                '&:hover': {
                                                borderColor: "white",
                                                backgroundColor: theme.palette.priority.low,
                                                },
                                            }}>
                                            Low
                                        </ToggleButton>
                                        <ToggleButton 
                                            value="Medium"
                                            sx={{
                                                backgroundColor: theme.palette.priority.medium,
                                                borderRadius: '20px',
                                                color: 'white',
                                                marginRight: "10px",
                                                '&.Mui-selected': {
                                                borderColor: "black",
                                                backgroundColor: theme.palette.priority.medium,
                                                },
                                                '&:hover': {
                                                borderColor: "white",
                                                backgroundColor: theme.palette.priority.medium,
                                                },
                                            }}>
                                            Medium
                                        </ToggleButton>
                                        <ToggleButton 
                                            value="High"
                                            sx={{
                                                backgroundColor: theme.palette.priority.high,
                                                borderRadius: '20px',
                                                color: 'white',
                                                marginRight: "10px",
                                                '&.Mui-selected': {
                                                borderColor: "black",
                                                backgroundColor: theme.palette.priority.high,
                                                },
                                                '&:hover': {
                                                borderColor: "white",
                                                backgroundColor: theme.palette.priority.high,
                                                },
                                            }}>
                                            High
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>

                                {/* Text Field for Description */}
                                <Grid item xs={12}>
                                    <Typography sx={{color: theme.typography.common.blue, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.mediumFont}}>
                                        Description
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        // label="Description"
                                        size="small"
                                        multiline
                                        onChange={handleDescriptionChange}
                                        sx={{ 
                                            width: '100%',
                                            backgroundColor: 'white'
                                        }}
                                    />
                                </Grid>

                                {/* Radio Button for Already Completed */}
                                <Grid item xs={12}>
                                    <Typography sx={{color: theme.typography.common.blue, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.mediumFont}}>
                                        Already Completed?
                                    </Typography>
                                    <FormControl component="fieldset">
                                        <RadioGroup column onChange={handleCompletedChange}>
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>

                                {/* File Upload Field */}
                                <Grid item xs={12}>
                                    <ImageUploader selectedImageList={selectedImageList} setSelectedImageList={setSelectedImageList}/>
                                </Grid>

                                {/* Submit Button */}
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" type="submit" sx={{backgroundColo: "#9EAED6"}}>
                                        <Typography sx={{color: theme.typography.common.blue, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.mediumFont}}>
                                                Add Maintenance
                                        </Typography>
                                        <input type="file" hidden/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Stack>
                </Paper>
            </Box>
        </ThemeProvider>
    )
}