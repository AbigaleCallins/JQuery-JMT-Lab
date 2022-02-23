$(document).ready(function () {
  let sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate",
  ];
  let charIndex = 0;
  let sentenceIndex = 0;

  let currentSentence = sentences[0];
  let currentChar = currentSentence[0];
  let nextChar = currentSentence[charIndex];
  // Upper-keyboard hidden on load-up
  $("#keyboard-upper-container").hide();

  //Shift keydown will toggle upper/lower keyboard fuction
  $(document).keydown(function (shift) {
    if (shift.which === 16) { // Tuggles upper keyboard with shift-key down
      $("#keyboard-lower-container").hide();
      $("#keyboard-upper-container").show();
    }
  });

  $(document).keyup(function (shift) { // Tuggles lower keyboard with shift-key up
    if (shift.which === 16) {
      $("#keyboard-lower-container").show();
      $("#keyboard-upper-container").hide();
      $(currentKey).css({ "background-color": "yellow" });

    }
  });

  // The event keypress only counts  regluar keys.
  $(document).keypress(function (e) {
    console.log(currentSentence.charAt(charIndex))
    if (currentSentence.charCodeAt(charIndex) === e.keyCode) { // 
      let currentKey = $("#" + e.charCode);
      let styleObject = $(currentKey).prop("style");
      styleObject.removeProperty("background-color");
      $("#yellow-block").css("left", "+=20");
      charIndex++;
      nextChar = currentSentence[charIndex];
      $("#target-letter").append(nextChar);
    }
    
    
    // $("#target-letter").append(currentChar);
    // $("#sentence").append(currentSentence);


    // if (e.which === charIndex.charCodeAt(0)) {
    //   $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
    // }
  });

  $("#sentence").append(currentSentence);
  $("#target-letter").append(currentChar);
});
