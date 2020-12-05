
const places = () => {

    placesList = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu", "Pokhara", "Palpa"]
    const emp = [""]

   const lengthOfPlaces = placesList.length


  placesList.forEach((place) =>{
  
    console.log(place)
    
    document.write(place + "<br>")
    // window.document.getElementById("plac").innerHTML="<ul>" +  emp.push() + "</ul>" 
    console.log(emp.push)
  })


  // for (var j = 0; j < lengthOfPlaces; j++) {
  //     document.write(placesList[j] + "<br>")
  //      document.getElementById("plac").innerHTML="<li>" +  placesList[j] + "</li>"
  // }

   
  document.write("My favourite places: " + lengthOfPlaces + "<br>")

document.write("<br>")

    console.log(lengthOfPlaces)

    placesList.splice(3, 1)
   

    for (var j = 0; j < lengthOfPlaces-1; j++) {
        document.write(placesList[j] + "<br>")
    }
  document.write("Excluding Kathmandu: " + placesList.length)

}

places()