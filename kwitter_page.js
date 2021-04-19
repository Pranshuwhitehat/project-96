<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCWWHKlNLM5xCREjwyiTjOCbPTfzw85OV0",
    authDomain: "project-93-6e4bf.firebaseapp.com",
    databaseURL: "https://project-93-6e4bf-default-rtdb.firebaseio.com",
    projectId: "project-93-6e4bf",
    storageBucket: "project-93-6e4bf.appspot.com",
    messagingSenderId: "1042280045884",
    appId: "1:1042280045884:web:09979b5d6ca63e95485239"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log("Room_name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div></hr>";
 document.getElementById("output").innerHTML += row;

//End code
 } });  }); }
getData();
function send() {
    msg = document.getElementById("msg").value
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
   
    document.getElementById("msg").value = "";
   }
   