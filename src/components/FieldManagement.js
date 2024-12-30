import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { updateFieldSettings } from '../services/api'; // Implement this function

function FieldManagement() {
    const [settings, setSettings] = useState({
        fileSizeLimit: '',
        fileType: '',
        mandatoryFields: ''
    });

    const handleChange = (e) => {
        setSettings({ ...settings, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        await updateFieldSettings(settings);
        alert('Settings updated successfully!');
    };

    return (
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
                label="File Size Limit (MB)"
                name="fileSizeLimit"
                value={settings.fileSizeLimit}
                onChange={handleChange}
                variant="outlined"
            />
            <TextField
                label="Allowed File Types"
                name="fileType"
                value={settings.fileType}
                onChange={handleChange}
                variant="outlined"
            />
            <TextField
                label="Mandatory Fields"
                name="mandatoryFields"
                value={settings.mandatoryFields}
                onChange={handleChange}
                variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
                Save Settings
            </Button>
        </Box>
    );
}

export default FieldManagement;
