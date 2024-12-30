import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import { getUsers, updateUserRole, deleteUser } from '../services/api'; // API functions need to be implemented

function UserManagement() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await getUsers();
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    const handleRoleChange = async (userId, role) => {
        await updateUserRole(userId, role);
    };

    const handleDeleteUser = async (userId) => {
        await deleteUser(userId);
        setUsers(users.filter(user => user.id !== userId));
    };

    return (
        <Paper style={{ padding: 20, marginTop: 20 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleRoleChange(user.id, 'admin')}>Make Admin</Button>
                                <Button color="error" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default UserManagement;
