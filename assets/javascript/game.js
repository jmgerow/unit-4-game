// game.js

var wins = 0;
var losses = 0;
var targetNumber = 0;
var score = 0;



$(document).ready(function() {

 // generates random value from 30 to 90 for targetNumber

    targetNumber = Math.floor(Math.random() * 70) + 20;

 // for loops to generate crystal-image and assign random value to each crystal
  for (var i = 0; i < 1; i++) {

    var imageCrystalBlue = $("<img>");

    imageCrystalBlue.addClass("crystal-image");

    imageCrystalBlue.attr("src", "assets/images/blue.jpg");

    imageCrystalBlue.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);

    $("#crystals").append(imageCrystalBlue);
  }
  for (var i = 0; i < 1; i++) {

    var imageCrystalGreen = $("<img>");

    imageCrystalGreen.addClass("crystal-image");

    imageCrystalGreen.attr("src", "assets/images/green.jpg");

    imageCrystalGreen.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);

    $("#crystals").append(imageCrystalGreen);
  }
  for (var i = 0; i < 1; i++) {

    var imageCrystalPurple = $("<img>");

    imageCrystalPurple.addClass("crystal-image");

    imageCrystalPurple.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);

    imageCrystalPurple.attr("src", "assets/images/purple.jpg");

    $("#crystals").append(imageCrystalPurple);
  }
  for (var i = 0; i < 1; i++) {

    var imageCrystalRed = $("<img>");

    imageCrystalRed.addClass("crystal-image");

    imageCrystalRed.attr("src", "assets/images/red.jpg");

    imageCrystalRed.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
  
    $("#crystals").append(imageCrystalRed);
  }

  // assigns click value
  $(".crystal-image").on("click", function() {


    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    score += crystalValue;

  
   // logic to determine win/loss and rest 
    if (score === targetNumber) {
      wins ++;
      score = 0;
      targetNumber = Math.floor(Math.random() * 70) + 20;
      imageCrystalBlue.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
      imageCrystalGreen.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
      imageCrystalPurple.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
      imageCrystalRed.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
    }

    else if (score >= targetNumber) {
      losses ++;
      score = 0;
      targetNumber = Math.floor(Math.random() * 70) + 20;
      imageCrystalBlue.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
      imageCrystalGreen.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
      imageCrystalPurple.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
      imageCrystalRed.attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
    }
    // writes to html
    document.getElementById("target-number").innerHTML = ("Target = " + targetNumber);
    document.getElementById("score").innerHTML = ("Total = " + score);
    document.getElementById("wins").innerHTML = ("Wins = " + wins);
    document.getElementById("losses").innerHTML = ("Losses = " + losses);
    
  });
    // ensures elements are present at game start
    document.getElementById("target-number").innerHTML = ("Target = " + targetNumber);
    document.getElementById("score").innerHTML = ("Total = " + score);
    document.getElementById("wins").innerHTML = ("Wins = " + wins);
    document.getElementById("losses").innerHTML = ("Losses = " + losses);
    


})


