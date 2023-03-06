// when user type in his name in the input field it should appear in the card

var i = 0;

$(".hidden").hide();

//Card Name
$(".nameInput").on(`input`, function () {
  var input = $(this);
  var val = input.val();

  console.log(val);

  if (/[a-z,A-Z]+$\s*/.test(val)) {
    $(".nameOnCard").text(val);
    console.log("correct");
  } else {
    console.log("wrong");
  }
});

// each 4 numbers add space  only 4 groups of numbers

//Card Number
$(".cardNumInput").on(`input`, function () {
  // if (/^\d+/.test($(this).val))
  // {}

  var val;
  var input = $(this);
  val = input.val();

  console.log(val.length + "val length");

  console.log(val);
  if (/\d+$/.test(val)) {
    $(".cardNumber").text(val);
  }

  $(document).keydown(function (e) {
    if (e.key === `backSpace`) {
      i = 0;
    }
  });

  console.log(i);
  i++;
  if (i == 4) {
    input.val(input.val() + " ");
    i = 0;
  }

  // dont allow any strings to be entered or char just numbers

  if (/^\d{4}\s\d{4}\s\d{4}\s\d{4}/.test(val) && val.length === 19) {
    $(".cardNumInput").removeClass("notDone");

    $(".cardNumInput").addClass("done");
  } else if (val.length >= 19) {
    $(".cardNumInput").removeClass("done");
    $(".cardNumInput").addClass("notDone");
    alert(
      "error you have entered more than 16 number or you have entered a character instead of a number please reenter card"
    );
    i = 0;
  }
});

//Exp.Date Month Number
$(".dateInputM").on(`input`, function () {
  var val;
  // var input = $(this);
  val = $(this).val();
  // var val = input.val();
  console.log(val);
  console.log(val.length);

  console.log(val);
  $(".expDateMonth").text(val);

  if (/^\d{2}$/.test(val)) {
    console.log("correct");
    $(`.dateInputM`).addClass("done");
    $(`.dateInputM`).removeClass("notDone");
  } else {
    console.log("false");
    $(`.dateInputM`).removeClass("done");
    $(`.dateInputM`).addClass("notDone");
  }
});
// Exp.Date Year Number
$(".dateInputY").on(`input`, function () {
  var input = $(this);
  var val = input.val();
  console.log(val);
  $(".expDateYear").text(val);

  if (/^\d{2}$/.test(val)) {
    console.log("correct");
    $(`.dateInputY`).addClass("done");
    $(`.dateInputY`).removeClass("notDone");
  } else {
    console.log("false");
    $(`.dateInputY`).removeClass("done");
    $(`.dateInputY`).addClass("notDone");
  }
});

// Pin Number
$(".cvcInput").on(`input`, function () {
  var input = $(this);
  var val = input.val();

  console.log(val);
  $(".pinNumber").text(val);

  if (/^\d{3}$/.test(val)) {
    console.log("correct");
    $(`.cvcInput`).addClass("done");
    $(`.cvcInput`).removeClass("notDone");
  } else {
    console.log("false");
    $(`.cvcInput`).removeClass("done");
    $(`.cvcInput`).addClass("notDone");
  }
});

$(".confirmButton").on("click", () => {
  console.log("hey");

  $(`.completed`).remove();
  $(`.hidden`).show();
});

// when user type in number in the input field it should appear in the card

//when user type in EXP date year number in the input field it should appear in the card

//when user type in EXP date Month number in the input field it should appear in the card

//when user type in cvc  number in the input field it should appear in the card

// do the logic in the input field name , exp date , mm/yy / cvc
// make website responsive
