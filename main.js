console.log(customers)

// create in the html the space to hold the information
// create the css structure

// create a variable to access all the information custumer.js
// how to access a specific information (array ) from customer - inside results
// create a space to hold my information

// put the actual information inside the space - textarea
// i dont know where the photo should go

let staff = document.getElementById("staff") // reference to element that going to hold everything - web page

for (var i = 0; i < customers.results.length; i++) {
  let person_container = document.createElement("div") // space to hold my information - only the place for 1 staff
  let staff_name = document.createElement("a") // - creates the space to - 1st set of information -
  let personal_information = document.createElement("div")
  let image = document.createElement("img")
  image.src = customers.results[i].picture.large

  staff_name.innerHTML = customers.results[i].name.first // accesing (right side) (left side ) assigning info to the "a" "div" - taken the specific information for customers.js
  personal_information.innerHTML = customers.results[i].email + "<br>" + customers.results[i].location.street

  person_container.appendChild(staff_name) // 1st piece of information and put it inside the space -
  person_container.appendChild(personal_information)
  staff.appendChild(person_container) // puts physically the information in the space
  person_container.appendChild(image)
}
