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
  
  //moment.js variables
 

  var currentTime = moment().format('HH:mm');
  console.log(currentTime);


 // firebase.database().ref().child('text');
  // Variable For Entries
  




  // Create an onclick function for the submit button

  $('#submitButton').on('click', function() {
    // Assign Variables to every Input
    var trainName = $('#trainName').val();
    var destinationInfo = $('#destinationInfo').val();
    var firstTrain = $('#firstTrain').val();
    var frequencyMin = $('#frequencyMin').val();


    // Do extra calculations

    // start time and end time
    var mins = moment.utc(moment(firstTrain, "HH:mm").diff(moment(currentTime, "HH:mm"))).format("HH:mm")
    console.log(currentTime)
    console.log(firstTrain)
    console.log(mins)
     
    // Trying to find Remaining Time
    var timeRemaining = mins % frequencyMin;
    console.log("This is the time Remaining after mins/freq " + timeRemaining)
    // Attempting to locate A Frequency
    var trainTime = mins - timeRemaining;
    console.log("This is the train time " + trainTime)
  
    
    // Display Info inside table
    $('tbody').append().html('<th ' + 'scope="row">' + trainName + '</th>' + '<td>'+ destinationInfo + '</td>' + '<td>'+ frequencyMin + '</td>' + '<td>'+ firstTrain + '</td>' + '<td>'+ trainTime + '</td>');
    






















  });
















 });