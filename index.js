
//detecting button press ---->

for(var i=0; i<(document.querySelectorAll(".drum").length); i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){    // addEventListener sets up a fn to be called whenever a
                                                                                // specified event is delivered to the target. ex) if you click, it calls the fn, or if you press a key, it calls the fn.

  var buttonInnerHTML = this.innerHTML;        //"this" tells you what button was triggered and "this.innerHTML" tells the alphabet of the button!

   makeSound(buttonInnerHTML);
});
}

//detection keyboard press ---->
                                                         //using eventListener to detect a key press on keyboard and notice that were adding it on the entire document rather than nay specific class or id! 
document.addEventListener("keypress", function(event){   //keypress wont be camel cased cuz addEventListener me aise hi hota h!
                                                         // parameter "event" helps us to tap into the event that triggered the eventListener
                                                         //check MDNdocs on properties of "keypress"
 makeSound(event.key);                                   //"key" represents the key value of the event
});

function makeSound(key){

  switch (key) {
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();                               // to run the audio file we have
      break;

      case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
        break;

        case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
          break;

          case "d":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
            break;

            case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
              break;

              case "k":
              var crash = new Audio('sounds/crash.mp3');
              crash.play();
                break;

                case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                  break;
    default:

  }


}
