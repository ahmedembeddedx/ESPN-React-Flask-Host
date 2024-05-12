import React, { useState } from 'react';
import axios from 'axios';

export default function DeleteNewsForm({ onClose }) {
    const [newsDate, setNewsDate] = useState('');

    const handleDelete = async () => {
        try {
            // Send a POST request to delete the news
            await axios.post('/api/deletenews', { date: newsDate });
            // Notify the user or close the form
            onClose();
        } catch (error) {
            console.error('Error deleting news:', error);
            // Handle the error
        }
    };

    return (
        <div>
            <h3>Delete News</h3>
            <label className='CrudLabels'>Enter the News Date:</label>
            <input
                type="date"
                value={newsDate}
                className='CrudInputs'
                onChange={(e) => setNewsDate(e.target.value)}
            />
            <br/>
            <button type="submit" onClick={handleDelete} className='b2' style={{fontSize: '15px'}}>Confirm Delete</button>
        </div>
    );
}
