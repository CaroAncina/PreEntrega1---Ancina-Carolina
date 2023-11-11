import React from 'react'
import "../src/styles/main.css"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIWeKS0lrR1qcw7HLpL5JbHYZoZ2xu7QM",
  authDomain: "antojitos-ecommerce.firebaseapp.com",
  projectId: "antojitos-ecommerce",
  storageBucket: "antojitos-ecommerce.appspot.com",
  messagingSenderId: "594070214907",
  appId: "1:594070214907:web:0856d553e8c237976db85e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
