# phase-five-project
## Class Schedule App
The app is used to centralize information to enable the user browse through the respective modules in the class catalog

## Features
Our app will have user authentication this is where the user can sign up and log in to the app.
Our user upon registering and signing in to the app can view the dashboard .
For the TMs they can post schedule, check weeks schedule. (CRUD operations).
The Tms can see available schedules, post announcements and send out invites.
Our app also has the light mode and dark mode features.
Students can check session details
Students can view announcements
Students can add comments.
Students can also update profile.

## Process
Create rails app 
Link it with Github repo
create a client folder for the front end side.
create a react app with npx create-react-app classSync
Start the server with npm start

## Language used 
React for front end.
Ruby on Rails for the back end.
Database PostgreSQL

## Task distribution
Models - Terrence
Controllers - Antony
Sign in - Perez Kazungu
Landing Page - Mary Kihara

## Models

User it will have the name, password , Role is the user a TM or student, and the avatar/ Username
Course it will have the name of the course eg SDF-FT04, start, end and the description
Announcement it will have the userId and the content.
Comment it will have the courseId, announcementId and the content.


