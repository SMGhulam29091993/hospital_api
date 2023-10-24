# hospital_api
Design the server side for a hospital Only the API needs to be designed - Tech Stack: Node.js &amp;amp; Mongo DB
**To check the codes switch to the master branch.**


**Hospital API**
Overview
This project involves the design and implementation of an API for managing doctors and patients in a hospital, with a specific focus on testing, quarantine, and well-being of COVID-19 patients. The API caters to two main user roles: Doctors and Patients.

Features
User Types:

Doctors: Authorized to log in and perform patient-related actions.
Patients: Register with their phone number and have reports created by doctors.
Patient Management:

Doctors can register patients using their phone numbers. If the patient already exists, the API returns their information.
After each patient visit, doctors can create a patient report with the following details:
Created by doctor
Status (options: Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit)
Date of the report
API Endpoints
Doctor Routes
Register a Doctor

Endpoint: /doctors/register
Method: POST
Description: Allows doctors to register with a username and password.
Doctor Login

Endpoint: /doctors/login
Method: POST
Description: Authenticates doctors and returns a JWT for subsequent API access.
Patient Routes
Register a Patient

Endpoint: /patients/register
Method: POST
Description: Allows patients to register using their phone number. If the patient already exists, the API returns their information.
Create a Patient Report

Endpoint: /patients/:id/create_report
Method: POST
Description: Permits doctors to create a patient report. Requires authentication via JWT.
Get All Reports of a Patient

Endpoint: /patients/:id/all_reports
Method: GET
Description: Lists all the reports of a patient, ordered from the oldest to the latest. Requires authentication via JWT.
Report Routes
List Reports by Status
Endpoint: /reports/:status
Method: GET
Description: Lists reports of all patients filtered by a specific status. Requires authentication via JWT.
Data Schemas
The project utilizes the following data schemas:

Doctor Schema:

Fields: _id, username, password (hashed), name, specialization
Patient Schema:

Fields: _id, phoneNumber, name, age, gender
Report Schema:

Fields: _id, patient (reference to Patient), doctor (reference to Doctor), status, date
Status: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]
Authentication
JWT (JSON Web Token) is used for authentication.
Protected routes require a valid JWT to access.
Setting up the Project
Clone this repository.
Install the required dependencies using npm install.
Set up the database connection in config/db.js.
Run the application using npm start.
Enhancements
This is a basic implementation of the Hospital API. You can enhance it by adding features like user registration validation, robust error handling, and better JWT security measures for a production-ready application.

Technologies Used
Node.js
MongoDB
Express.js
Passport.js (for authentication)
