#Cab Booking Management System
"Cab Booking Management System: Node.js web app for booking cabs, calculating shortest paths, and estimating costs."

#Overview
The Cab Booking Management System is a web application designed to facilitate the booking of cabs for customers. It provides features such as booking cabs, estimating costs, and displaying available cab categories.

#Features
Cab Booking: Users can book cabs by providing their email, source, destination, and selecting a cab category.
Cost Estimation: The system estimates the cost of the trip based on the selected cab category and the shortest path between the source and destination.
Display Cab Details: Users can view details about available cab categories and their respective rates.
Shortest Path Calculation: The application uses Dijkstra's algorithm to calculate the shortest path between the source and destination.
#Technologies Used
Node.js: Backend server environment.
Express.js: Web framework for Node.js.
MySQL: Relational database management system.
HTML/CSS/JavaScript: Frontend development languages.
npm: Package manager for Node.js.
MySQL Node.js Driver: Used to connect Node.js applications to MySQL databases.
#Setup Instructions
#Clone the repository:
bash
Copy code
git clone https://github.com/your-username/cab-booking-management-system.git
#Install dependencies:
bash
Copy code
cd cab-booking-management-system
npm install
#Set up the MySQL database:
1.Create a MySQL database named cab_booking_system.
2.Import the provided SQL script to create the necessary tables (Cab_Bookings).
3.Update the MySQL connection settings in server.js to match your database configuration.
#Run the server:
Copy code
node server.js
#Access the application:
Open your web browser and visit http://localhost:3000.
#Usage
Fill in the booking form with your email, source, destination, and select a cab category.
Submit the form to book a cab.
View the booking details, including the cab ID, driver name, source, destination, shortest path, time taken, and cost.
Optionally, view available cab categories and their rates.
#Contributors
Your Name Shubham

This project is licensed under the MIT License.
