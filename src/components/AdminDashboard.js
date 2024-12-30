import React, { useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import UserManagement from './UserManagement';
import FieldManagement from './FieldManagement';
import SubmissionInsights from './SubmissionInsights';
import AddUserForm from './AddUserForm';  // Ensure this is imported correctly

function AdminDashboard() {
    const [isAddUserOpen, setIsAddUserOpen] = useState(false);

    const handleAddUserOpen = () => setIsAddUserOpen(true);
    const handleAddUserClose = () => setIsAddUserOpen(false);

    return (
        <Container maxWidth="xl">
            <Typography variant="h4" gutterBottom>
                Admin Dashboard
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="start" justifyContent="space-between" mb={2}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleAddUserOpen}
                    style={{ marginBottom: 20 }}
                >
                    Add New User
                </Button>
                <UserManagement />
                <FieldManagement />
                <SubmissionInsights />
            </Box>
            <AddUserForm open={isAddUserOpen} onClose={handleAddUserClose} />
        </Container>
    );
}

export default AdminDashboard;
