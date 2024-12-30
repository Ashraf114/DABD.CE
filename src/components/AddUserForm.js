import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions, DialogTitle, TextField, Button } from '@mui/material';
import { addUser } from '../services/api';

function AddUserForm({ open, onClose }) {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        role: ''
    });

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async () => {
        try {
            await addUser(userData);
            alert('User added successfully!');
            onClose();  // Close modal on success
        } catch (error) {
            alert('Failed to add user: ' + error.response.data.message);
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add New User</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="username"
                    label="Username"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="role"
                    label="Role"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddUserForm;
