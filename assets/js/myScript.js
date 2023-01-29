const urls = [
    "assets\\images\\svgrepo\\fish\\fish1.svg",
    "assets\\images\\svgrepo\\fish\\fish2.svg",
    "assets\\images\\svgrepo\\fish\\fish3.svg",
    "assets\\images\\svgrepo\\fish\\fish4.svg",
    "assets\\images\\svgrepo\\fish\\fish5.svg",
    "assets\\images\\svgrepo\\fish\\fish6.svg",
    "assets\\images\\svgrepo\\fish\\fish7.svg",
    "assets\\images\\svgrepo\\fish\\fish8.svg",
    "assets\\images\\svgrepo\\fish\\fish9.svg",
    "assets\\images\\svgrepo\\fish\\fish10.svg",
    "assets\\images\\svgrepo\\fish\\fish11.svg",
    "assets\\images\\svgrepo\\fish\\fish12.svg",
    "assets\\images\\svgrepo\\fish\\fish13.svg",
    "assets\\images\\svgrepo\\fish\\fish14.svg",
    "assets\\images\\svgrepo\\fish\\fish15.svg",
    "assets\\images\\svgrepo\\fish\\fish16.svg",
    "assets\\images\\svgrepo\\fish\\fish17.svg",
    "assets\\images\\svgrepo\\fish\\fish18.svg",
    "assets\\images\\svgrepo\\fish\\fish19.svg",
    "assets\\images\\svgrepo\\fish\\fish20.svg",
    "assets\\images\\svgrepo\\fish\\fish21.svg",
    "assets\\images\\svgrepo\\fish\\fish22.svg",
    "assets\\images\\svgrepo\\fish\\fish23.svg",
    "assets\\images\\svgrepo\\fish\\fish24.svg",
    "assets\\images\\svgrepo\\fish\\fish25.svg",
    "assets\\images\\svgrepo\\fish\\fish26.svg",
    "assets\\images\\svgrepo\\fish\\fish27.svg",
    "assets\\images\\svgrepo\\fish\\fish28.svg",
    "assets\\images\\svgrepo\\fish\\fish29.svg",
    "assets\\images\\svgrepo\\fish\\fish30.svg",
    "assets\\images\\svgrepo\\fish\\fish31.svg",
    "assets\\images\\svgrepo\\fish\\fish32.svg",
    "assets\\images\\svgrepo\\fish\\fish33.svg",
    "assets\\images\\svgrepo\\fish\\fish34.svg",
    "assets\\images\\svgrepo\\fish\\fish35.svg",
    "assets\\images\\svgrepo\\fish\\fish36.svg",
    "assets\\images\\svgrepo\\fish\\fish37.svg",
    "assets\\images\\svgrepo\\fish\\fish38.svg",
    "assets\\images\\svgrepo\\fish\\fish39.svg",
    "assets\\images\\svgrepo\\fish\\fish40.svg",
    "assets\\images\\svgrepo\\fish\\fish41.svg",
    "assets\\images\\svgrepo\\fish\\fish4.svg",
    "assets\\images\\svgrepo\\fish\\turtle.svg",
    "assets\\images\\svgrepo\\fish\\whale.svg",
    "assets\\images\\svgrepo\\fish\\prawn.svg",
    "assets\\images\\svgrepo\\fish\\octopus.svg",
  ]
  
  var fishNum = 0;
  
    function generate() {
    //   alert(window.innerWidth > 992);
      var url = Math.floor((Math.random())*(urls.length));
      if(fishNum < 100) {
        fishNum += 1; // count fish number
        let locX;
        let locY;
        if(window.innerWidth > 992) {
            locX = Math.round((Math.random()*80)-20);
            locY = Math.round((Math.random()*170)-50);
        } else {
            locX = Math.round(Math.random()*100);
            locY = Math.round((Math.random()*170)-50);
        }
        let tag = document.createElement("img"); //create element
        let text = document.createTextNode("image"+fishNum); //define text
        tag.appendChild(text); //set text to the tag
        tag.setAttribute("id","image"+fishNum); //set id to the tag
        tag.setAttribute("src",urls[url]); //set src to the tag
        tag.setAttribute("alt","from Freepik"); //set alt to the tag
        tag.setAttribute("width","55px"); //set alt to the tag
        tag.setAttribute("style","position:absolute; left:" +locX+ "vw; top:" +locY+ "vh"); //set position
        document.getElementById("img").appendChild(tag); //put tag to the element
        document.getElementById("image"+fishNum).style.border = "none";
        document.getElementById("image"+fishNum).style.boxShadow = "none";
      }
      else {
        alert("Too many sea creatures!!")
      }
    }
  
    function swim() {
      let locX;
      let locY;
      let i = fishNum+1;
      while (0 < i) {
        console.log(i);
        i -=1;
        if(window.innerWidth > 992) {
          locX =  Math.round((Math.random()*80)-20);
          locY =  Math.round((Math.random()*170)-50);
          } else {
          locX = Math.round(Math.random()*100);
          locY = Math.round((Math.random()*170)-50);
          }
        document.getElementById("image"+i).style.left = locX + "vw";
        document.getElementById("image"+i).style.top = locY + "vh";
        document.getElementById("image"+i).style.transition = "all 3s ease"; //animation
      }
    }
  
    function hide() {
      let hideORreveal = document.getElementById("hidebutton").innerHTML
      let i = fishNum+1;
      if(hideORreveal == "Hide") {
        document.getElementById("hidebutton").innerHTML = "Reveal"
        while (0 < i) {
          i -=1;
          let tag = document.getElementById("image" + i); //specigy tag
          tag.style.display = "none";//set display to the tag
          }
        }
      else {
        document.getElementById("hidebutton").innerHTML = "Hide"
        while (0 < i) {
          i -=1;
          let tag = document.getElementById("image" + i); //specigy tag
          tag.style.display = "initial";//set display to the tag
        }
      };
    
    }
  
    function bye() {
      document.getElementById("hidebutton").innerHTML = "Hide";
      let i = fishNum+1;
      fishNum = 0;
      while (0 < i) {
          i -=1;
          let tag = document.getElementById("image" + i).remove(); //specify tag
        }
    }
  
    function fix() {
      if (document.getElementById("AquaFix").innerHTML == "Set Aquarium afloat") {
        document.getElementById("AquaFix").innerHTML = "Fix Aquarium";
        document.getElementById("bq").style.position = "fixed";
        document.getElementById("bq").style.width = "27%";
        document.getElementById("bq").style.top = "200px";
      }
      else {
        document.getElementById("AquaFix").innerHTML = "Set Aquarium afloat";
        document.getElementById("bq").style.position = "sticky";
        document.getElementById("bq").style.width = "50%";
        document.getElementById("bq").style.top = "200px";
      }
    }

    // $("#activate").click(function() {
    //   $('#bq').toggleClass('bq-transform');
    // });

    // function change() {

    // }