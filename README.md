Basic registration form in React

Goal

The goal is to create basic registration form application with three input field, one for name, second for last name, third for email and one button for registar.

npm start

I created react app with name basic-registration-form and started my project with npm start.

I created App file where I import Input, before that I created Input file where I created text state for all three inputs field. I created div with className container where I created three different input field, they had value and onChange. I also created state for errors and isSubmit and created function for formSubmit and onInputChange, and that I added in form tag and in input tag.

I created validete function for each input field that should show an error if the text is not entered in those input fields. And for that I put errors in p tag at the bottom. In the end I created button for registration. I created css named index.css where I did some style for this application.