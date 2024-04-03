const express = require('express');
const mysql = require('mysql'); 
const { graph, dijkstra } = require('./graph');
const { bookCab, estimateCost } = require('./cabBooking');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Your_UserId',
    password: 'Your_Password',
    database: 'cab_booking_system'
});

// Connect to MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const cabCategories = [
    { type: 'Mini', price: 10 },
    { type: 'Sedan', price: 15 },
    { type: 'SUV', price: 20 },
    { type: 'SUV + ', price: 25 },
    { type: 'Premium', price: 30 }
];

app.post('/book-cab', (req, res) => {
    const { email, source, destination, cabCategory } = req.body;
    const shortestPath = dijkstra(graph, source, destination);
    let timeTaken = 0;
    for (let i = 0; i < shortestPath.length - 1; i++) {
        const from = shortestPath[i];
        const to = shortestPath[i + 1];
        timeTaken += graph[from][to];
    }
    const selectedCabCategory = cabCategories.find(category => category.type === cabCategory);
    const cost = selectedCabCategory ? selectedCabCategory.price * timeTaken : undefined;

    // Insert booking details into database
    const sql = `INSERT INTO Cab_Bookings (customer_email, source, destination, cab_category, shortest_path, time_taken, cost) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [email, source, destination, cabCategory, shortestPath.join(' -> '), timeTaken, cost];
    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting into Cab_Bookings:', err);
            res.status(500).json({ message: 'An error occurred while processing your request. Please try again.' });
            return;
        }
        console.log('Booking inserted into database');
        const responseData = {
            message: 'Cab booked successfully',
            shortestPath,
            timeTaken,
            cost,
            cabCategories
        };
        res.json(responseData);
    });
});

app.get('/cab-details', (req, res) => {
    const cabDetails = {
        name: 'Example Cab Company',
        rates: cabCategories
    };
    res.json(cabDetails);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
