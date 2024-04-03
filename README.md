# Cab Booking Management System

**"Cab Booking Management System: Node.js web app for booking cabs, calculating shortest paths, and estimating costs."**

## Overview 
![CabBookingWebpage](https://github.com/Shubham-741/Cab-Booking-Management-System/assets/143842645/83c5d5bd-12dc-4a38-a34f-ccd9a30bee16)

The Cab Booking Management System is a web application designed to facilitate the booking of cabs for customers. It provides features such as booking cabs, estimating costs, and displaying available cab categories.

## Features
- **Cab Booking:** Users can book cabs by providing their email, source, destination, and selecting a cab category.
- **Cost Estimation:** The system estimates the cost of the trip based on the selected cab category and the shortest path between the source and destination.
- **Display Cab Details:** Users can view details about available cab categories and their respective rates.
- **Shortest Path Calculation:** The application uses Dijkstra's algorithm to calculate the shortest path between the source and destination.

## Technologies Used
- Node.js: Backend server environment.
- Express.js: Web framework for Node.js.
- MySQL: Relational database management system.
- HTML/CSS/JavaScript: Frontend development languages.
- npm: Package manager for Node.js.
- MySQL Node.js Driver: Used to connect Node.js applications to MySQL databases.

## Setup Instructions
1. **Clone the repository:**

git clone https://github.com/Shubham-741/Cab-Booking-Management-System.git

2. **Install dependencies:**

cd Cab-Booking-Management-System

npm install

3. **Set up the MySQL database:**
- Create a MySQL database named cab_booking_system.
- Import the provided SQL script to create the necessary tables (Cab_Bookings).
- Update the MySQL connection settings in server.js to match your database configuration.
4. **Run the server:**

node server.js

5. **Access the application:**
Open your web browser and visit http://localhost:3000.

## Usage
1. Fill in the booking form with your email, source, destination, and select a cab category.
2. Submit the form to book a cab.
3. View the booking details, including the cab ID, driver name, source, destination, shortest path, time taken, and cost.
4. Optionally, view available cab categories and their rates.

## Contributors
- Shubham

## License
This project is licensed under the MIT License.
