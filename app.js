var number = 1
console.log(number)

function prev_number() {
  if (number > 1) {
    number--;
    main()
  }
}


function next_number() {
  if (number < 99999) {
    number++
    main();
  }
}


function main() {
  number = Math.floor(number)
  var x = number % 3;
  var y = number % 5;
  var z = number % 150;
  var messageA = "FIZZ"
  var messageB = "BUZZ"

  hideShowButtons()

  if (z == 0) {
    document.getElementById("main_display").innerHTML = "<img src='./yellow_car.avif' alt='yellow_car'>";
    document.getElementById("car").style.display = "block";
  }
  else if (x == 0 && y == 0) {
    console.log(number + "-" + messageA + " " + messageB);
    document.getElementById("main_display").innerHTML = messageA + " " + messageB;
    document.getElementById("main_display").style.color = "black";
    document.getElementById("main_display").classList.add("anim");
  } else if (x == 0) {
    console.log(number + "-" + messageA);
    document.getElementById("main_display").innerHTML = messageA;
    document.getElementById("main_display").style.color = "#00ff0d";
    document.getElementById("main_display").classList.remove("anim");
  } else if (y == 0) {
    console.log(number + "-" + messageB);
    document.getElementById("main_display").innerHTML = messageB;
    document.getElementById("main_display").style.color = "#00ff0d";
    document.getElementById("main_display").classList.remove("anim");
  } else {
    console.log(number);
    document.getElementById("main_display").innerHTML = number;
    document.getElementById("main_display").style.color = "black";
    document.getElementById("main_display").classList.remove("anim");
  }
}

function hideShowButtons() {
  if (number <= 1) {
    document.getElementById("previous_button").style.visibility = "hidden";
    document.getElementById("next_button").style.visibility = "visible";
  }
  else if (number >= 99999) {
    document.getElementById("next_button").style.visibility = "hidden";
    document.getElementById("previous_button").style.visibility = "visible";
  }
  else {
    document.getElementById("previous_button").style.visibility = "visible";
    document.getElementById("next_button").style.visibility = "visible";
  }
}


function inputNumber() {
  var numberInput = document.getElementById("number_input").value
  if (numberInput > 99999) {
    number = 99999
  }
  // if I use numberInput < 1 for this else if, any input or empty input becomes 1
  // < 0 works, no idea why it's better
  //but like thi enables user to input 0, I don't want that
  else if (numberInput < 0) {
    number = 1
  } else if (numberInput.length == 0) {
    clearInput()
  }
  else {
    number = numberInput;
  }
  hideChooseNumber()
  main()
}



function showChooseNumber() {
  document.getElementById("row_2").style.display = "none";
  document.getElementById("row_3").style.display = "flex";
  document.getElementById("number_input").focus();
  listenEnter()
}

function listenEnter() {
  var inputButtonEvent = document.getElementById("number_input");
  inputButtonEvent.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      document.getElementById("number_input_button").click();
    }
  });
}


function hideChooseNumber() {
  document.getElementById("row_2").style.display = "block";
  document.getElementById("row_3").style.display = "none";
  clearInput()

}

function clearInput() {
  var getValue = document.getElementById("number_input");
  if (getValue.value != "") {
    getValue.value = "";
  }
}


window.onload = function () {
  document.onkeydown = function (event) {
    switch (event.keyCode) {
      case 37:
        prev_number()
        break;
      case 39:
        next_number()
        break;
        case 40:
        showChooseNumber()
        break;
    }
  };
}

function hearts() {
  number = 150
  main()
}