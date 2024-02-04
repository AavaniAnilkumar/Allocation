




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, TextField, Checkbox, FormControlLabel,Paper,Container, Typography,Grid,hideStartDate } from '@material-ui/core';
import './TimeCycle.css';
import BASE_URL from '../config';
import { Backdrop } from '@mui/material';
const TimeCycle = () => {
  const [timeCycles, setTimeCycles] = useState([]);
  const [newTimeCycle, setNewTimeCycle] = useState({
    time_cycle_name: '',
    start_date: '',
    end_date: '',
    is_active: false,
  });
  const [selectedTimeCycle, setSelectedTimeCycle] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showTimeCycleDetailsModal, setShowTimeCycleDetailsModal] = useState(false);

  useEffect(() => {
    fetchTimeCycles();
  }, []);

  const fetchTimeCycles = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/time-cycle/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setTimeCycles(response.data);
    } catch (error) {
      console.error('Error fetching time-cycles:', error);
    }
  };

  const createTimeCycle = async () => {
    try {
      await axios.post(`${BASE_URL}/api/time-cycle/`, newTimeCycle, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setNewTimeCycle({
        time_cycle_name: '',
        start_date: '',
        end_date: '',
        is_active: false,
      });
      setShowAddModal(false);
      fetchTimeCycles();
    } catch (error) {
      console.error('Error creating time-cycle:', error);
    }
  };

  const deleteTimeCycle = async (timecycleId) => {
    try {
      console.log('Deleting time cycle with ID:', timecycleId);
      await axios.delete(`${BASE_URL}/api/time-cycle/${timecycleId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      console.log('Time cycle deleted successfully');
      fetchTimeCycles();
    } catch (error) {
      console.error('Error deleting time-cycle:', error);
    }
  };
  

  const updateTimeCycle = async () => {
    try {
      await axios.put(`${BASE_URL}/api/time-cycle/${selectedTimeCycle.id}/`, selectedTimeCycle, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setShowUpdateModal(false);
      fetchTimeCycles();
    } catch (error) {
      console.error('Error updating time-cycle:', error);
    }
  };

  const viewTimeCycleDetails = async (timecycleId) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/time-cycle/${timecycleId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setSelectedTimeCycle(response.data);
      setShowTimeCycleDetailsModal(true);
    } catch (error) {
      console.error('Error fetching time-cycle details:', error);
    }
  };

  const editTimeCycle = () => {
    setShowTimeCycleDetailsModal(false);
    setShowUpdateModal(true);
  };

  return (
    <div className='timecycle-container'>
      {/* Add New time-cycle Button */}
      <Button className='add-timecycle-button' variant="contained" color="primary" onClick={() => setShowAddModal(true)}>
        Add TimeCycle
      </Button>

      {/* Add New time-cycle Modal */}
      <Modal open={showAddModal} onClose={() => setShowAddModal(false)} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
  <Paper>
    <Container maxWidth="sm">
      <Typography variant="h5">Add New TimeCycle</Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="TimeCycle Name"
              fullWidth
              value={newTimeCycle.time_cycle_name}
              onChange={(e) => setNewTimeCycle({ ...newTimeCycle, time_cycle_name: e.target.value })}
              placeholder="Enter TimeCycle name"
            />
          </Grid>

          <Grid item xs={12}>
  <TextField
    label="Start date"
    type="date"
    fullWidth
    value={newTimeCycle.start_date}
    onChange={(e) => setNewTimeCycle({ ...newTimeCycle, start_date: e.target.value })}
    placeholder="Enter start date"
    InputLabelProps={{ shrink: true }}
    
  />
</Grid>

          <Grid item xs={12}>
            <TextField
              label="End Date"
              type="date"
              fullWidth
              value={newTimeCycle.end_date}
              onChange={(e) => setNewTimeCycle({ ...newTimeCycle, end_date: e.target.value })}
              placeholder="Enter end date"
              InputLabelProps={{shrink: true}}
             
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={newTimeCycle.is_active}
                  onChange={(e) => setNewTimeCycle({ ...newTimeCycle, is_active: e.target.checked })}
                />
              }
              label="Is Active"
            />
          </Grid>
          {/* Additional form inputs */}
        </Grid>
        <Button variant="contained" color="secondary" onClick={() => setShowAddModal(false)}>
          Close
        </Button>
        <Button variant="contained" color="primary" onClick={createTimeCycle}>
          Add TimeCycle
        </Button>
      </form>
    </Container>
  </Paper>
</Modal>

      {/* time-cycle List */}
      <div>
        <table className='timecycle-table'>
          <thead>
            <tr>
              <th>Time Cycle Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {timeCycles.map((timeCycle) => (
              <tr className='timecycle-row' key={timeCycle.id}>
                <td>{timeCycle.time_cycle_name}</td>
                <td>{timeCycle.start_date}</td>
                <td>{timeCycle.end_date}</td>
                <td>
                  <Button variant="outlined" color="primary" onClick={() => viewTimeCycleDetails(timeCycle.id)}>
                    View Details
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => deleteTimeCycle(timeCycle.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* time-cycle Details Modal */}
      <Modal open={showTimeCycleDetailsModal} onClose={() => setShowTimeCycleDetailsModal(false)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="modal-paper" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' ,backgroundColor: 'white' , padding: '20px'}}>
          <h2>TimeCycle Details</h2>
          <p>Name: {selectedTimeCycle?.time_cycle_name}</p>
          <p>Start Date: {selectedTimeCycle?.start_date}</p>
          <p>End Date: {selectedTimeCycle?.end_date}</p>
          <p>Active: {selectedTimeCycle && selectedTimeCycle.is_active ? 'Active' : 'Inactive'}</p>
          <Button variant="contained" color="secondary" onClick={() => setShowTimeCycleDetailsModal(false)}>
            Close
          </Button>
          <Button variant="contained" color="primary" onClick={editTimeCycle}>
            Edit
          </Button>
        </div>
      </Modal>

      {/* Update time-cycle Modal */}
      <Modal open={showUpdateModal} onClose={() => setShowUpdateModal(false)}style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="modal-paper" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', marginLeft: '500px' }}>
          <h2>Update TimeCycle</h2>
          <TextField
            label="TimeCycle Name"
            type="text"
            fullWidth
            value={selectedTimeCycle?.time_cycle_name || ''}
            onChange={(e) => setSelectedTimeCycle({ ...selectedTimeCycle, time_cycle_name: e.target.value })}
            placeholder="Enter TimeCycle name"
          />
          {/* Other form inputs */}
          <TextField
            label="Start Date"
            type="date"
            fullWidth
            value={selectedTimeCycle?.start_date || ''}
            onChange={(e) => setSelectedTimeCycle({ ...selectedTimeCycle, start_date: e.target.value })}
            placeholder="Enter start date"
          />
          <TextField
            label="End Date"
            type="date"
            fullWidth
            value={selectedTimeCycle?.end_date || ''}
            onChange={(e) => setSelectedTimeCycle({ ...selectedTimeCycle, end_date: e.target.value })}
            placeholder="Enter end date"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedTimeCycle?.is_active}
                onChange={(e) =>
                  setSelectedTimeCycle({ ...selectedTimeCycle, is_active: e.target.checked })
                }
              />
            }
            label="Is Active"
          />
          <Button variant="contained" color="secondary" onClick={() => setShowUpdateModal(false)}>
            Close
          </Button>
          <Button variant="contained" color="primary" onClick={updateTimeCycle}>
            Update TimeCycle
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TimeCycle;
