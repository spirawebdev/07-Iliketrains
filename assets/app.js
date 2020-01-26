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
  //  Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  var database = firebase.database();
  console.log(database);
  
  //moment.js variables
 

  var currentTime = moment().format('HH:mm');
  


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

    //first time
    var firstPerfectTime = moment(firstTrain, "HH:mm");

    // start time and end time
    var mins = moment.utc(moment(firstPerfectTime, "HH:mm").diff(moment(currentTime, "HH:mm"))).format("HH:mm")
    var minsY = moment.utc(moment(firstPerfectTime, "HH:mm").diff(moment(currentTime, "HH:mm"))).format("m")
    console.log("This is current time " + currentTime)
    console.log("This is first train time " + firstTrain)
    console.log("This is mins " + mins)
     
    // Trying to find Remaining Time
    var timeRemaining = minsY % frequencyMin ;
    console.log("This is the time Remaining after mins/freq " + timeRemaining)
    // Attempting to locate A Frequency
    var trainTime = timeRemaining - minsY;
    console.log("This is the train time " + trainTime)
  
    // Oncoming
    var finalTrain = moment().add(trainTime, "minutes");
    var oncoming = moment(finalTrain).format("hh:mm");
    
    
      firebase.database().ref().set({
        tn: trainName,
        di: destinationInfo,
        fm : frequencyMin,
        oc: oncoming,
        tt: trainTime
      });
    
     //Display Info inside table
     $('tbody').append().html('<th ' + 'scope="row">' + trainName + '</th>' + '<td>'+ destinationInfo + '</td>' + '<td>'+ frequencyMin + '</td>' + '<td>'+ oncoming + '</td>' + '<td>'+ trainTime + '</td>');
     
    

  
  });

 });