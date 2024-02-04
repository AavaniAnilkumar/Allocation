import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const ProspectForm = () => {
  const [questions, setQuestions] = useState([
    { srNo: 1, subject: 'Knowledge About ERP Systems', yes: null, no: null, supportNeeded: null, remarks: '' },
    {srNo: 2, subject: 'Do you have a clarity of your Business process requirements?',yes:null,no:null,supportNeeded:null,remarks:''},
    // {srNo: 3, subject:'Did you document the process as below? Process currently as is for a.Procure to pay cycle (Purchase Cycle)b.Order to Cash Cycle (Sales Cycle)c.Hire to Retire (HR & Payroll Cycle)d.Record to Report (Finance & Accounting)e.Manufacturing Process f.Contracting and Services Distribution and Warehouse Management',yes:null,no:null,supportNeeded:null,remarks:''},
    {
      srNo: 3,
      subject: (
        <div>
          Did you document the process as below? Process currently as is for
          <div>a. Procure to pay cycle (Purchase Cycle)</div>
          <div>b. Order to Cash Cycle (Sales Cycle)</div>
          <div>c. Hire to Retire (HR & Payroll Cycle)</div>
          <div>d. Record to Report (Finance & Accounting)</div>
          <div>e. Manufacturing Process</div>
          <div>f. Contracting and Services Distribution and Warehouse Management</div>
        </div>
      ),
      yes: null,
      no: null,
      supportNeeded: null,
      remarks: ''
    },

    // {srNo: 4, subject:'Do your team have a clear understanding about the integrations and reporting requirements for? a.Procurement process and integrations to Sales, Inventory, Manufacturing, Contracting, Project Management, Accounting and Financial reporting. b.Sales Process and integrations to Procurement, Inventory, Manufacturing, Contracting, Project Management, Accounting and Financial reporting c.Manufacturing Process and integrations to Procurement, Sales, Inventory, Project Management Accounting and Financial reporting d.Contracting and Services integrations to Procurement, Sales, Inventory, Project Management, Accounting and Financial reporting. e.HR and Payroll process and its integrations to Project Management, Accounting and Financial process.', yes:null,no:null,supportNeeded:null,remarks:''},
    {
      srNo: 4,
      subject: (
        <div>
            Do your team have a clear understanding about the integrations and reporting requirements for?
          <div>a. Procurement process and integrations to Sales, Inventory, Manufacturing, Contracting, Project Management, Accounting and Financial reporting.</div>
          <div>b. Sales Process and integrations to Procurement, Inventory, Manufacturing, Contracting, Project Management, Accounting and Financial reporting</div>
          <div>c. Manufacturing Process and integrations to Procurement, Sales, Inventory, Project Management Accounting and Financial reporting</div>
          <div>d. Contracting and Services integrations to Procurement, Sales, Inventory, Project Management, Accounting and Financial reporting.</div>
          <div>e. HR and Payroll process and its integrations to Project Management, Accounting and Financial process.</div>
        </div>
      ),
      yes: null,
      no: null,
      supportNeeded: null,
      remarks: ''
    },
    // {srNo: 5, subject:'Do you have a dedicated team to be part of the Project from start to end as required below? a.Project Sponsor: for Approving and driving the implementation. b. Project Manager/Project Lead: Planning,directing, staffing and managing the project. c.Project Analyst: Collecting, documenting, analyzing the business process. d. Business Process Experts: Who carry out business process and provide recommendations. ', yes:null,no:null,supportNeeded:null,remarks:''},
    {
      srNo: 5,
      subject: (
        <div>
            Do you have a dedicated team to be part of the Project from start to end as required below?
          <div>a. Project Sponsor: for Approving and driving the implementation.</div>
          <div>b. Project Manager/Project Lead: Planning,directing, staffing and managing the project.</div>
          <div>c. Project Analyst: Collecting, documenting, analyzing the business process.</div>
          <div>d. Business Process Experts: Who carry out business process and provide recommendations. </div>
        </div>
      ),
      yes: null,
      no: null,
      supportNeeded: null,
      remarks: ''
    },

    // {srNo: 6, subject:'Do you have clear information about? a.The project budgets b.By when you would you like to start the project.',yes:null,no:null,supportNeeded:null,remarks:''}
    {
      srNo: 6,
      subject: (
        <div>
          Do you have clear information about?
          <div>a. The project budgets</div>
          <div>b. By when you would you like to start the project</div>
        </div>
      ),
      yes: null,
      no: null,
      supportNeeded: null,
      remarks: ''
    },
    {srNo: 7,subject:'Current Software details that’s within your organization',yes:null,no:null,supportNeeded:null,remarks:''},
    // Add other questions as needed
    {
      srNo: 8,
      subject: (
        <div>
        Your Concern’s with respect to your software that is in place.   
        <div>Example</div>
        <div> Financial pain points: Current solution is costing too much to access and maintain.</div>
          <div>Productivity pain points: Current solution may be too time consuming and you are looking for a solution that makes work more streamlined.</div>
          <div>Process pain points: Looking to improve internal processes such as lead generation, hiring, app integrations or social media campaigns.</div>
          <div>Support pain points: Customer support is scattered and not available at all. You are looking to solve support pain points by installing a hotline for urgent issues, a help desk, chat bots or a knowledge base for more common, less urgent issues.</div>
        </div>
      ),
      yes: null,
      no: null,
      supportNeeded: null,
      remarks: ''
    },
    {srNo: 9,subject:'Any Questions to us can be put in the remarks for our further analysis and as a next step towards a long-term business partner Journey.',yes:null,no:null,supportNeeded:null,remarks:''},

  ]);

  const handleRadioChange = (index, option) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index] = {
        ...updatedQuestions[index],
        yes: option === 'yes' ? true : null,
        no: option === 'no' ? true : null,
      };
      return updatedQuestions;
    });
  };

  const handleSupportNeededChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index] = { ...updatedQuestions[index], supportNeeded: value };
      return updatedQuestions;
    });
  };

  const handleRemarksChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index] = { ...updatedQuestions[index], remarks: value };
      return updatedQuestions;
    });
  };
  const [selectedDate, setSelectedDate] = useState(null);


  return (

    <div className='main-div' style={{backgroundColor: 'wheat'}}>
      <TableContainer component={Paper} style={{margin:'auto',width:'100%',marginTop: '50px'}}>
        <Typography variant="h5" style={{marginLeft: '550px' }}>Lead Information</Typography>
      <form style={{marginTop: '50px'}}>
        {/* <Table> */}
        <Table style={{ width: '70%', margin: 'auto' }}> {/* Adjust the width as per your requirement */}

          <TableBody>
           
             <TableCell>
                <TextField label="Lead No" variant="filled" color="success" focused  style={{width:'300px'}} />
             <br/><br />
                {/* <TextField label="Date " variant="filled" color="success" focused style={{width:'300px'}}/> */}

                <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MM/dd/yyyy" // You can customize the date format
                placeholderText="Select a date"
                isClearable
                className="custom-date-picker" 
                style={{ width: '300px', borderColor: '#4caf50', borderRadius: '4px' }}
               />              
             <br/><br />
                <TextField label="Prospect Name" variant="filled" color="success" focused style={{width:'300px'}}/>
             <br/><br />
              
                <TextField label="Prospect Address" variant="filled" color="success" focused style={{width:'300px'}}/>
            </TableCell>
              <TableCell>
                <TextField label="Contact Person" variant="filled" color="success" focused style={{width:'300px'}}/>
              <br/> <br />
              
                <TextField label="Contact No" variant="filled" color="success" focused style={{width:'300px'}} />
             
             <br/> <br />
                <TextField label="Business Verticals" variant="filled" color="success" focused style={{width:'300px'}}/>
              
              <br/> <br/>
                <TextField label="Email Address" variant="filled" color="success" focused style={{width:'300px'}}/>
              </TableCell>
          </TableBody>
        </Table>
      </form>
    
    
      <Typography variant="h5" style={{ textAlign: 'center', marginTop: '60px' }}>Questions</Typography>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650 }} aria-label="simple table"> 
          <TableHead>
          <TableRow>
            <TableCell>Sr.no.</TableCell>
            <TableCell >Subject</TableCell>
            <TableCell >Yes</TableCell>
            <TableCell >No</TableCell>
            <TableCell >Support Needed (Yes/No)</TableCell>
            <TableCell >Remarks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((question, index) => (
            <TableRow key={index} >
              <TableCell >{question.srNo}</TableCell>
              <TableCell>{question.subject}</TableCell>
              <TableCell align='right'> 
                <RadioGroup
                  value={question.yes}
                  onChange={() => handleRadioChange(index, 'yes')}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                  />
                </RadioGroup>
              </TableCell>
              <TableCell align='right'>
                <RadioGroup
                  value={question.no}
                  onChange={() => handleRadioChange(index, 'no')}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                  />
                </RadioGroup>
              </TableCell>
              <TableCell align='right'>
                <RadioGroup
                  value={question.supportNeeded}
                  onChange={() => handleSupportNeededChange(index, 'yes')}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                  />
                </RadioGroup>
              </TableCell>
              <TableCell align='right'>
                <TextField
                  value={question.remarks}
                  onChange={(e) => handleRemarksChange(index, e.target.value)}
                  variant="outlined"
                  fullWidth
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody></Table>
       
      </TableContainer>

      
      
      
      
      
      
      <hr />
      <br />
      
      
      
      
      
      
      
      
      
      {/* Client Information Section */}
      <Typography variant="h5" style={{ textAlign: 'center' }}>Client Information Area</Typography>
      {/* <Table> */}
      <Table style={{ width: '70%', margin: 'auto' }}> {/* Adjust the width as per your requirement */}

        <TableHead>
          <TableRow>
            <TableCell>
            
            <TextField label="Client Representative Name" variant="filled"  style={{width: '300px'}}/>
              
            {/* <TextField label="Client Representative Designation:" fullWidth variant="outlined" margin="normal" style={{width:'300px'}} /> */}
            <TextField label="Client Representative Designation " variant="filled" style={{width: '300px', marginLeft: '50px'}} />
            <br /> <br />
            <TextField label="Type of Decision Maker:"  variant='filled' style={{width:'300px'}}/>
          
            <TextField label="Contact Details:" variant='filled' style={{width:'300px', marginLeft: '50px'}}/>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {/* Add corresponding TextField components for input */}
          </TableRow>
        </TableBody>
      </Table>

      {/* Loyal IT Solutions Section */}
      <Typography variant="h5" style={{ textAlign: 'center' }}>Loyal IT Solutions Area</Typography>
      {/* <Table> */}

      <Table style={{ width: '70%', margin: 'auto' }}> {/* Adjust the width as per your requirement */}
        <TableHead>
          <TableRow>
            <TableCell>
            <TextField label="Contacted by:" variant='filled' style={{width:'300px'}} />
            <br/> <br />
           
            <TextField label="Replied Date:" variant='filled' style={{width:'300px'}}/>
            </TableCell>
            <TableCell>           
                 <TextField label="Contacted Date:"  variant='filled' style={{width:'300px'}} />
            
            <br/> <br />
                <TextField label="Next Meeting Date:" variant='filled' style={{width:'300px'}} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {/* Add corresponding TextField components for input */}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
};

export default ProspectForm;

