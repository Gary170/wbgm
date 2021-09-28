
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBFtj67j6SIYZk07HfvslF49BcQvjenM34",
    authDomain: "whatsp-d330c.firebaseapp.com",
    databaseURL: "https://whatsp-d330c-default-rtdb.firebaseio.com/",
    projectId: "whatsp-d330c",
    storageBucket: "whatsp-d330c.appspot.com",
    messagingSenderId: "736201777920",
    appId: "1:736201777920:web:5d5572b83839a1e43289e5",
    measurementId: "G-WG840RNZC5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });
          localStorage.setItem("room_name", room_name);

            window.location= "kwitter_page.html";
    }

    function getData() 
    {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
          console.log("Room name is " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
          //End code
          });});}
    getData();
    
    function redirectToRoomName(name)
    {
      console.log("Name = "+ name);
        localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
    }

      function logout()
      {
        localStorage.removeItem("user_name");
        localStorage.removeItem("user_name");
                  window.location = "index.html";
      }