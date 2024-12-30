import React, { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { getSubmissions, exportData } from '../services/api'; // These functions need to be defined

function SubmissionInsights() {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const fetchSubmissions = async () => {
            const response = await getSubmissions();
            setSubmissions(response.data);
        };
        fetchSubmissions();
    }, []);

    const handleExport = async () => {
        await exportData();
    };

    return (
        <Paper style={{ padding: 20, marginTop: 20 }}>
            <Button onClick={handleExport} variant="contained" color="primary" style={{ marginBottom: 20 }}>
                Export to CSV
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Submission ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {submissions.map((submission) => (
                        <TableRow key={submission.id}>
                            <TableCell>{submission.id}</TableCell>
                            <TableCell>{submission.date}</TableCell>
                            <TableCell>{submission.status}</TableCell>
                            <TableCell>{submission.details}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default SubmissionInsights;
