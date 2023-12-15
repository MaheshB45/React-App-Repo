# React-App-Repo

# Typing Playground
## Features:
- implementing a multi-mode typing test website with the ability to save results for better analysis
- used firebase to login/signup and also used a database to save results
- used various react hooks and context API to implement major functionalities like themes and test modes
- Tools & Technologies - React, Material UI, Firebase, Styled Components
  
## step 1 - dependencies used :
1. firebase
2. random-words
3. react-chartjs-2
4. toastify
5. styled-components
6. Material-UI
7. Material Icons
8. react-select
9. react-toastify
10. google-react-button
11. react-router-dom
12. react-firebase-hooks

## step 2 - creating typing box component
1. generating random words and displaying them
2. creating a hidden input box which is focussed by default

## step-3 - correct or incorrect words
1. referencing each and every word
2. implementing blinking cursor
3. comparing characters to check correct or incorrect
   
## step-4 - correct and incorrect throught paragraph
1. replicate the process of correct and incorrect throughout the paragraph
   
## step-5 - backspace and extra characters
1. handling the extra characters typed
2. implementing backspace functionality
   
## step-6 - implementing timer functionality and useOf useContext

## step-7 - implementing themes

## step-8 - Generating Test Results and Graph

## step-9 - header component
1. Logo
2. Account
   
   i.Login Form
   
   ii.Signup Form
   
## step-10 - Firebase Setup
1. create new project
2. select web application
3. copy config and paste inside firebaseConfig
4. Go to authentication - enable email and google authentications
5. create firestore database in test mode(test mode is preferred for build mode)
   
## step-11 - Firebase authentication
1. createUserWithEmailAndPassword
2. signInWithEmailAndPassword
3. signInWithGoogle
4. signOut
   
## step-12 - save test results to firestore

## step-13 - routing - homepage & userpage

## step-14 - fetching all the test-results of user from firestore and representing them in the form of table and graph if the user is logged in.
