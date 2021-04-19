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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room_name - " + Room_names);
   row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div></hr>"
   //End code
   });});}
getData();

function addRoom(){
  room_name = document.getElementById("room_name").value;
   firebase,database().ref("/").child(room_name).update({
    purpose : "room_name"
   });

   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("Room_name", name);
  window.location = "kwitter_page.html";
}

function logout () {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name")
  window.location = "kwitter.html";
}
