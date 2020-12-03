console.log("here")

const calcCircumfrence = () => {
    const radius = document.getElementById("numb").value
    console.log(radius)
    const circum = 2 * Math.PI * radius
   window.document.write("The circumference is: " + circum)

   
}

calcCircumfrence();