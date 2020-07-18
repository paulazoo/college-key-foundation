# College Key Foundation Frontend

## General

[collegekeyfoundation.org](https://www.collegekeyfoundation.org) - non-profit devoted to helping FGLI students achieve their academic potential.

Website frontend for the College Key Foundation, written in React JS by Paula Zhu.

## Set Up

You will need a .env file to store API and WS urls

The first time you run this locally, you will need to run `npm i` to install dependencies

Then `npm start` to start the server on http://localhost:3000/

## Public Pages

### Landing

_ROUTE: https://www.collegekeyfoundation.org/_

- Landing page
- You can sign up for the newsletter email list at the bottom

### About

_ROUTE: https://www.collegekeyfoundation.org/about-us_

- About us page, includes three tabs
  - Mission and Purpose
  - Our Story
  - Meet the Team

### FellowshipProgram

_ROUTE: https://www.collegekeyfoundation.org/fellowship-program_

- Information about the fellowship program

### Apply

_ROUTE: https://www.collegekeyfoundation.org/apply_

- Page for starting an application for either mentee or mentor

### MenteesPage

_ROUTE: https://www.collegekeyfoundation.org/mentees_

- Page for submitting a mentee application

### MentorsPage

_ROUTE: https://www.collegekeyfoundation.org/mentors_

- Page for submitting a mentor application

### Terms

_ROUTE: https://www.collegekeyfoundation.org/terms_

- Terms and privacy policy

### LoginPage

_ROUTE: https://www.collegekeyfoundation.org/login_

- Login page
- Login with google
- If your email is not already accepted as a mentee or mentor you can not login
- collegekeyfoundation@gmail.com has already been accepted and can login



## Private Pages

### Dashboard

_ROUTE: https://www.collegekeyfoundation.org/dashboard_

- Dashboard page
- Redirects here immediately after loggin in
- Shows who your respective mentees or mentors are if you've already been matched
- Also shows events:
  - upcoming public events open to the entire foundation
  - upcoming private events where you have been specifically have been invited
  - upcoming past events

### Profile

_ROUTE: https://www.collegekeyfoundation.org/profile_

- See and edit your personal account profile details
- If you are a mentor, school and graduation year fields will also show up

### Master

_ROUTE: https://www.collegekeyfoundation.org/master_

- The secret master controller page of the application
  - Only accessible to collegekeyfoundation@gmail.com and paulazhu@college.harvard.edu accounts
  - Otherwise will give `YOU ARE UNAUTHORIZED`
- Add accepted emails for both mentees and mentors
- Match together mentees with mentors
  - Mentees will only have one matched mentor at a time
- Search and view all mentees and mentors
  - Searching for one mentor or mentee will also show up their respective mentees/mentors
  - Click their profile picture to see all their account information
- See all emails signed up for the newsletter email list
- Create an event (NOT YET IMPLEMENTED)
