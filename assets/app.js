// Firebase Setup
 $(document).ready(function() {

    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAOjo6FgE4zXlFMsWEeJsiKqiIoyWfkH6g",
    authDomain: "ireallyliketrains-3f99b.firebaseapp.com",
    databaseURL: "https://ireallyliketrains-3f99b.firebaseio.com",
    projectId: "ireallyliketrains-3f99b",
    storageBucket: "ireallyliketrains-3f99b.appspot.com",
    messagingSenderId: "1082815632888",
    appId: "1:1082815632888:web:643789fde8200fd30e320d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


 // firebase.database().ref().child('text');
  // Variable For Entries
  




  // Create an onclick function for the submit button

  $('#submitButton').on('click', function() {
    // Assign Variables to every Input
    var trainName = $('#trainName').val();
    var destinationInfo = $('#destinationInfo').val();
    var firstTrain = $('#firstTrain').val();
    var frequencyMin = $('#frequencyMin').val();
    // Display Info inside table
    $('tbody').append().html('<th ' + 'scope="row">' + trainName + '</th>' + '<td>'+ destinationInfo + '</td>' );
    






















  });
















 });