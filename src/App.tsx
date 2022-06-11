import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { firebaseApp } from "./common/useFirebase";
import RequestList from "./pages/List";
import Video from "./pages/Video";
import "firebase/messaging";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

function App() {
  const firebaseMessaging = firebaseApp.messaging();
  // firebaseMessaging.getToken()
  // firebaseApp.auth().onAuthStateChanged(user => {
  //   if (user) {
  //     localStorage.setItem("authUser", JSON.stringify(user))
  //   } else {
  //     localStorage.removeItem("authUser")
  //   }
  // })

  firebaseMessaging.requestPermission()
  .then(function() {
    console.log('허가!');
    return firebaseMessaging.getToken();
  })
  .then(function(tocken) {
    console.log(tocken);
  })
  .catch(function(err) {
    console.log('fcm에러 : ', err);
  });
// tocken : cr5iHDpU2QSpBuZzwSrRKZ:APA91bF81oQlPRoqc78OfgR3au1fKVOJdIs8Z4Yy9b6ksjZrCz2tTF5yHDXqs9A5Pw8XFdp_VSsfBnrXRfDb7nlM8L0FzI6QHb-wYNJGlZnpZfwthHdKRhkUUTmH86wzd3JeQpPWUY9J
// server key=AAAACpvzWQ0:APA91bGnQHzKJIBs8UVQKfxG38r5Clm5XoO6FH0R1cP42NH2AAusUuVWanAe0wAYRrKx8QtI6ghIN_y7aunEedOVQwVqyqgNj5XuDtAeGxT05VKSN93B3MZczqA4bLxKqAv9HiETzEGP

firebaseMessaging.onMessage(function(payload){
  // console.log(payload);
  console.log(payload.notification.title);
  console.log(payload.notification.body);
});

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <span style={{ margin: "10px" }}>
            <Link to="/">RequestList</Link>
          </span>
          <span style={{ margin: "10px" }}>
            <Link to="/video">Video</Link>
          </span>
        </div>
        <Routes>
          <Route path="/" element={<RequestList />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

