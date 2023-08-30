import React, { useEffect, useState } from 'react';
import { Paper, Box, Modal, Stack, ThemeProvider, Button, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CashflowData from './CashflowData';
import theme from '../../theme/theme';
import RevenueTable from './RevenueTable';
import ExpectedRevenueTable from './ExpectedRevenueTable'
import SelectMonthComponent from '../SelectMonthComponent';
import ExpenseTable from './ExpenseTable';
import ExpectedExpenseTable from './ExpectedExpenseTable';
import MixedChart from '../Graphs/OwnerCashflowGraph';
import SelectProperty from '../Leases/SelectProperty';
import AddRevenueIcon from '../../images/AddRevenueIcon.png'

const CashflowOwner = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('Cashflow');
    const [revenueDropdown, setRevenueDropdown] = useState(false);
    const [expenseDropdown, setExpenseDropdown] = useState(false);

    const [showSelectMonth, setShowSelectMonth] = useState(false);
    let date = new Date();
    let currentMonth = date.toLocaleString("default", { month: "long" });
    let currentYear = date.getFullYear().toString();
    console.log("currentMonth ",currentMonth, currentYear)
    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);

    const [selectedProperty, setSelectedProperty] = useState({});

    const [totalRevenueByMonth, setTotalRevenueByMonth] = useState(0);
    const [expectedRevenueByMonth, setExpectedRevenueByMonth] = useState(0);
    const [totalExpenseByMonth, setTotalExpenseByMonth] = useState(0);
    const [expectedExpenseByMonth, setExpectedExpenseByMonth] = useState(0);

    const [totalRevenueByType, setTotalRevenueByType] = useState({});
    const [expectedRevenueByType, setExpectedRevenueByType] = useState({});
    const [totalExpenseByType, setTotalExpenseByType] = useState({});
    const [expectedExpenseByType, setExpectedExpenseByType] = useState({});

    const [revenueList, setRevenueList] = useState([]);
    const [expenseList, setExpenseList] = useState([]);
    const [revenueCashflowByMonth, setRevenueCashflowByMonth] = useState([]);

    const [revenue, setRevenue] = useState(null);
    const [revenueSummary, setRevenueSummary] = useState(null);
    const [expense, setExpense] = useState(null);
    const [expenseSummary, setExpenseSummary] = useState(null);
    console.log("cashflow revenue ", revenue);
    console.log("cashflow expense ", expense);
    console.log("cashflow revenueSummary ", revenueSummary, month);
    console.log("cashflow expenseSummary ", expenseSummary);

    const [openSelectProperty, setOpenSelectProperty] = useState(false);
    const handleClose = () => {
        setOpenSelectProperty(false);
    };
    const handleOpen = () => {
        setOpenSelectProperty(true);
    };

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    
    const handleRevenueDropdown = () => {
        setRevenueDropdown(!revenueDropdown);
    }
    const handleExpenseDropdown = () => {
        setExpenseDropdown(!expenseDropdown);
    }
    
    useEffect(() => {
     console.log("selectedProperty selectedProperty", selectedProperty)   
    },[selectedProperty])
    return (
        <ThemeProvider theme={theme}>
            <CashflowData year={year} month={month} filter={false} role={'Owner'} userID={'100-000003'} setTotalRevenueByMonth={setTotalRevenueByMonth} setExpectedRevenueByMonth={setExpectedRevenueByMonth} setTotalExpenseByMonth={setTotalExpenseByMonth} setExpectedExpenseByMonth={setExpectedExpenseByMonth} setTotalRevenueByType={setTotalRevenueByType} setExpectedRevenueByType={setExpectedRevenueByType} setTotalExpenseByType={setTotalExpenseByType} setExpectedExpenseByType={setExpectedExpenseByType} setRevenueList={setRevenueList} setExpenseList={setExpenseList} setRevenueCashflowByMonth={setRevenueCashflowByMonth} selectedProperty={selectedProperty || null}></CashflowData>
          <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%', // Take up full screen width
            }}
          >
            <Paper
              style={{
                marginTop: '30px',
                padding: theme.spacing(2),
                backgroundColor: activeButton === 'Cashflow' ? theme.palette.primary.main : theme.palette.primary.secondary,
                width: '85%', // Occupy full width with 25px margins on each side
                [theme.breakpoints.down('sm')]: {
                  width: '80%',
                },
                [theme.breakpoints.up('sm')]: {
                  width: '50%',
                },
              }}
            >
                <Stack
                direction="row"
                justifyContent="center"
                >
                    <Typography sx={{color: theme.typography.primary.black, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.largeFont}}>
                    {month} {year} Cashflow
                    </Typography>
                </Stack>
                <Box
                    component="span"
                    m={2}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Button sx={{ textTransform: 'capitalize' }} onClick={()=>setShowSelectMonth(true)}>
                        <CalendarTodayIcon sx={{color: theme.typography.common.blue, fontWeight: theme.typography.common.fontWeight, fontSize:theme.typography.smallFont}}/>
                        <Typography 
                        sx={{color: theme.typography.common.blue, fontWeight: theme.typography.common.fontWeight, fontSize:theme.typography.smallFont}}
                        >
                        Select Month / Year
                        </Typography>
                    </Button>
                    <SelectMonthComponent month={month} showSelectMonth={showSelectMonth} setShowSelectMonth={setShowSelectMonth} setMonth={setMonth} setYear={setYear}></SelectMonthComponent>
                    <Button sx={{ textTransform: 'capitalize' }} onClick={handleOpen}>
                        <HomeWorkIcon sx={{color: theme.typography.common.blue, fontWeight: theme.typography.common.fontWeight, fontSize:theme.typography.smallFont, margin:'5px'}}/>
                        <Typography sx={{color: theme.typography.common.blue, fontWeight: theme.typography.common.fontWeight, fontSize:theme.typography.smallFont}}>
                        Select Property
                        </Typography>
                    </Button>
                </Box>
               <Box
                    component="span"
                    m={3}
                    padding={3}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    onClick={()=>{handleButtonClick('Cashflow')}}
                    style={{
                        backgroundColor: activeButton === 'Cashflow' ? theme.palette.custom.blue : theme.palette.custom.grey,
                        borderRadius: '5px'
                }}
                >
                    <Typography 
                    sx={{color: theme.typography.primary.black, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.largeFont}}
                    >
                        Cashflow
                    </Typography>
                    <Typography sx={{color: theme.typography.primary.black, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.largeFont}}>
                        ${
                        totalRevenueByMonth ?
                            (totalRevenueByMonth - totalExpenseByMonth).toFixed(2) : '0.00'
                        }
                    </Typography>
                </Box>
                <Box
                    component="span"
                    m={3}
                    padding={3}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    onClick={()=>{handleButtonClick('ExpectedCashflow')}}
                    style={{
                        backgroundColor: activeButton === 'Cashflow' ? theme.palette.custom.grey : theme.palette.custom.yellowHighlight,
                        borderRadius: '5px',
                }}
                >
                    <Typography 
                    sx={{color: theme.typography.primary.black, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.largeFont}}
                    >
                        Expected Cashflow
                    </Typography>
                    <Typography sx={{color: theme.typography.primary.black, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.largeFont}}>
                        ${
                        expectedRevenueByMonth && expectedExpenseByMonth ?
                        (expectedRevenueByMonth - expectedExpenseByMonth).toFixed(2) : '0.00'
                        }
                    </Typography>
                </Box>
                <Accordion 
                sx={{
                    backgroundColor: activeButton === 'Cashflow' ? theme.palette.primary.main : theme.palette.primary.secondary,
                    boxShadow: 'none'}}>
                <Box
                    component="span"
                    m={3}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{color: theme.typography.common.blue, fontWeight: theme.typography.common.fontWeight}}>
                    {activeButton === 'Cashflow' ? '' : 'Expected'} {month} Revenue
                    </Typography>
                </AccordionSummary>
                <Typography sx={{color: theme.typography.common.blue, fontWeight: theme.typography.common.fontWeight}}>
                    $ {activeButton === 'Cashflow' ?
                        (
                            totalRevenueByMonth?
                            totalRevenueByMonth.toFixed(2) : '0.00'
                        ):(
                            expectedRevenueByMonth?
                            expectedRevenueByMonth.toFixed(2) : '0.00'
                        )}
                    </Typography>
                </Box>
                <AccordionDetails>
                {activeButton === 'Cashflow' ?
                    (
                        <RevenueTable revenue={revenue} revenueSummary={revenueSummary} totalRevenueByType={totalRevenueByType} revenueList={revenueList}></RevenueTable>
                    ):(
                        <ExpectedRevenueTable revenue={revenue} revenueSummary={revenueSummary} expectedRevenueByType={expectedRevenueByType} revenueList={revenueList}></ExpectedRevenueTable>
                    )}
                </AccordionDetails>
                </Accordion>
                <Accordion 
                sx={{
                    backgroundColor: activeButton === 'Cashflow' ? theme.palette.primary.main : theme.palette.primary.secondary,
                    boxShadow: 'none'}}>
                <Box
                    component="span"
                    m={3}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{color: theme.typography.common.blue, fontWeight: theme.typography.common.fontWeight}}>
                       {activeButton === 'Cashflow' ? '' : 'Expected'} {month} Expense
                    </Typography>
                </AccordionSummary>
                <Typography sx={{color: theme.typography.common.blue, fontWeight: theme.typography.common.fontWeight}}>
                       $ {activeButton === 'Cashflow' ?
                        (
                            totalExpenseByMonth?
                            totalExpenseByMonth : '0.00'
                        ) : 
                        (
                            expectedExpenseByMonth?
                            expectedExpenseByMonth : '0.00'
                        )}
                    </Typography>
                </Box>
                <AccordionDetails>
                {activeButton === 'Cashflow' ?
                    (
                        <ExpenseTable expense={expense} expenseSummary={expenseSummary} totalExpenseByType={totalExpenseByType} expenseList={expenseList}></ExpenseTable>
                    )
                    :(
                        <ExpectedExpenseTable expense={expense} expenseSummary={expenseSummary} expectedExpenseByType={expectedExpenseByType} expenseList={expenseList}></ExpectedExpenseTable>
                    )}
                </AccordionDetails>
                </Accordion>
                <Stack
                direction="row"
                justifyContent="center"
                >
                    <Typography sx={{color: theme.typography.common.blue, fontWeight: theme.typography.common.fontWeight, fontSize:theme.typography.largeFont}}>
                    Cashflow and Revenue by Month
                    </Typography>
                </Stack>
                <Stack
                direction="row"
                justifyContent="center"
                height={300}
                >
               <MixedChart revenueSummary={revenueSummary} expenseSummary={expenseSummary} revenueCashflowByMonth={revenueCashflowByMonth}></MixedChart>
                </Stack>
                </Paper>
                <Paper
                    style={{
                        margin: '2px',
                        padding: theme.spacing(2),
                        boxShadow: "none",
                        width: '85%', // Occupy full width with 25px margins on each side
                        [theme.breakpoints.down('sm')]: {
                          width: '80%',
                        },
                        [theme.breakpoints.up('sm')]: {
                          width: '50%',
                        },
                      }}
                >
                <Box
                component="span"
                m={2}
                marginTop={15}
                marginBottom={30}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                >
                    <Button 
                        sx={{color: theme.typography.primary.black, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.smallFont, backgroundColor: theme.palette.primary.main, borderRadius: 3, textTransform: 'none'}}
                        onClick={()=>{navigate('/addRevenue')}}> <img src={AddRevenueIcon}></img> Revenue</Button>
                    <Button 
                        sx={{color: theme.typography.primary.black, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.smallFont, backgroundColor: theme.palette.primary.main, borderRadius: 3, textTransform: 'none'}}
                        onClick={()=>{navigate('/addExpense')}}> <img src={AddRevenueIcon}></img> Expense</Button>
                    <Button 
                        sx={{color: theme.typography.primary.black, fontWeight: theme.typography.primary.fontWeight, fontSize:theme.typography.smallFont, backgroundColor: theme.palette.primary.main, borderRadius: 3, textTransform: 'none'}}
                        onClick={()=>{navigate('/addUtility')}}> <img src={AddRevenueIcon}></img> Utility</Button>
                </Box>
                </Paper>
          </Box>
          <Modal sx={{
                overflowY: 'scroll',
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
                open={openSelectProperty}
                disableScrollLock={false}
            >
                <Box sx={{
                    position: 'absolute',
                    width: '80%',
                    height: '80%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <SelectProperty closeTab={handleClose} setSelectedProperty={setSelectedProperty} />
                </Box>

            </Modal>
        </ThemeProvider>
      );
    };
    

export default CashflowOwner;
