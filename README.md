# React Native - A Preparedness Experiment

The purpose of this project is to start getting familiar with React Native. I'm coming into it with only a knowledge of React as an MVC for web browsers. This Readme will serve as a note taking area as well as a step by step through the process. 

## Getting started

First I installed the CLI tools I needed with: 

`npm i -g create-react-native-app`

With that tool ready, I can start this project: 

`create-react-native-app DishConditioning`

At this point, the next step is to run `npm start`. However, when I did, I got a whole bunch of errors, specifically "Unable to start server". The error also recommended a couple lines of code:

`sudo sysctl -w kern.maxfiles=5242880`
and
`sudo sysctl -w kern.maxfilesperproc=524288`

Running that did the trick and the QR code shows up. I already had Expo installed so I was ready to go. Now just time to start hacking at the App.js. 
