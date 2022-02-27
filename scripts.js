$(document).ready(function () {
  $(document).ready(function () {
    let keysLower = $("#keyboard-lower-container");
    let keysUpper = $("#keyboard-upper-container");
    let sentences = [
      "ten ate neite ate nee enet ite ate inet ent eate",
      "Too ato too nOt enot one totA not anot tOO aNot",
      "oat itain oat tain nate eate tea anne inant nean",
      "itant eate anot eat nato inate eat anot tain eat",
      "nee ene ate ite tent tiet ent ine ene ete ene ate",
    ];
    let sentencesIndex = 0;
    let charIndex = 0;
    let totalWords = 54;
    let currentSentence = sentences[sentencesIndex];
    let currentChar = currentSentence[charIndex];
    let mistakes = 0;
    let startTime = Date.now();

    $("#sentence").append(currentSentence);
    $("#target-letter").append(currentChar);

    keysUpper.hide();

    $(document).keypress(function (event) {
      $("#" + event.keyCode).addClass("style"); // Highlight .style property set

      if (event.keyCode === currentSentence.charCodeAt(charIndex)) {
        $("#feedback").append('<div class="glyphicon glyphicon-ok"></div>'); //Correct key pressed = check
      } else {
        $("#feedback").append('<div class="glyphicon glyphicon-remove"></div>'); //Incorrect key pressed = X
        mistakes++;
      }
      charIndex++;
      currentChar = currentSentence[charIndex];

      $("#target-letter").text(currentChar);
      $("#yellow-block").css("left", "+=17.5px");

      if (charIndex === currentSentence.length) {
        sentencesIndex++;
        if (sentencesIndex === sentences.length) {
          $("body").off();
          let endTime = Date.now();
          let minutes = (endTime - startTime) * 60000;
          let wpm = Math.round((totalWords / minutes) - (mistakes * 2));

          $(".glyphicon").remove();
          let results = "Congrats! You typed " + wpm + " words per minute.";
          $("#feedback").append(results);
          $("#feedback").append('<button class="btn btn-info">Play Again</button>');
          $(".btn").on();
          $(".btn").click(function () {
            location.reload();
          });
          return;
        }
        currentSentence = sentences[sentencesIndex];
        $("#sentence").text(currentSentence);
        charIndex = 0;
        currentChar = currentSentence[charIndex];
        $("#target-letter").text(currentChar);
        $("#yellow-block").css("left", "0");
        $(".glyphicon").remove();
      }
    });

    $(document).keyup(function (event) {
      if (event.key == "Shift") {
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();
      } else {
        $("#" + event.key.charCodeAt(0)).css("background-color", "#yellow");
      }
    });

    $(document).keydown(function (event) {
      //Shit-key toggles upper/lowwer keyboard
      if (event.keyCode === 16) {
        keysUpper.show();
        keysLower.hide();
      }
    });
    $(document).keyup(function (event) {
      if (event.keyCode === 16) {
        keysUpper.hide();
        keysLower.show();
      }
      $(".style").removeClass("style"); // Returns Key to initial color
    });
  });
});
