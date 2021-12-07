
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBLiH94sppCrGpxsDdyFbDyw9SckFJYwAk",
      authDomain: "kwiter-2eb18.firebaseapp.com",
      projectId: "kwiter-2eb18",
      storageBucket: "kwiter-2eb18.appspot.com",
      messagingSenderId: "998850328238",
      appId: "1:998850328238:web:c90d06ba5cd8bd38cd5f3f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome "+ user_name + "!";
    

    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name" + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
