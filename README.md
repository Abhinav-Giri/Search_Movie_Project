Project Name & Pitch:-

Search_Movie_App

An application used to search movie from list of movies on user preference, built with React,JavaScript, Node,HTML and CSS.

Project Status:-
Complete

Project Screen Shots:-
![Screenshot (8)](https://user-images.githubusercontent.com/106602128/197339711-360d8041-cf23-4557-a411-14a84d806910.png)

![Screenshot (9)](https://user-images.githubusercontent.com/106602128/197339747-ecfdb6e2-c7c1-4ae6-a219-6771aaf57028.png)

![Screenshot (10)](https://user-images.githubusercontent.com/106602128/197339777-6bd53526-e617-4ec1-82af-91cda96f5764.png)




Installation and Setup Instructions:

Clone down this repository. You will need node and npm installed globally on your machine.

Installation:
npm install

To Start Server:
npm start

To Start Backend Server:
cd back-end
npm install
node index.js

Check on: localhost:4200/getAll or localhost:4200/search

To Visit App:
localhost:3000

Approach:-

First prepared outline of project requirement, display, function that might be required. 
Seached and found suitable data on which operation to be performed.
Created Backend APIs using axios.get to fetch that data.
Created React component named Result.jsx. Motto is to create page layout and have display in box format.
In App.jsx imported component,useState, useEffect,axios.
Used useState to update state of several functions.
Used useEffect to check and run either to get list of movies or seacrhed movies that is defined and called in 2 different functions.
API from backend is called in localhost.
Result:- On seacrhing one can get either movie in box or if no such movie exist in list then error message will be displayed. 

To improve code:- 

Used useState to show Loading while searching name entered and result not displayed.
And error message in case Movie not found.
In ase wrong Api picked, it will display error message.

File Structure:-

back-end folder:- All necessary dependencies installed and  main code written in index.js.
Rest All :- for front end. React component Result.jsx and  imported in App.jsx. In index.js root(App) is entered. 

Conclusion:- 

App helps in searchhing movie by name in list of movies.



