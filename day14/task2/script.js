let selectedRow=null;

function showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector('.main');
    container.insertBefore(div, main);
    setTimeout(() =>  document.querySelector(".alert").remove(), 3000);
}

function clearFields() {
    document.querySelector("#first-name").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#address").value = "";
    document.querySelector("#pincode").value = "";
    document.querySelector("#gender").value = "";

    // Clear checkbox selections
    const foodCheckboxInputs = document.querySelectorAll('input[name="Food"]:checked');
    foodCheckboxInputs.forEach(checkbox => {
        checkbox.checked = false;
    });

    document.querySelector("#state").value = "";
    document.querySelector("#country").value = "";
}

document.querySelector('#survey-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const firstName=document.querySelector("#first-name").value;
    const lastName=document.querySelector("#lastName").value;
    const address=document.querySelector("#address").value;
    const pincode=document.querySelector("#pincode").value;
    const gender=document.querySelector("#gender").value;

    // Map numerical values to their corresponding string values for food choices
    const foodMap = {
        "1": "Sandwich",
        "2": "Pizza",
        "3": "Burger",
        "4": "Fries",
        "5": "Ice Cream"
    };

    // Fetch selected food items from checkboxes
    const foodCheckboxInputs = document.querySelectorAll('input[name="Food"]:checked');
    let selectedFood = [];
    foodCheckboxInputs.forEach(checkbox => {
        selectedFood.push(foodMap[checkbox.value]);
    });

    const state=document.querySelector("#state").value;
    const country=document.querySelector("#country").value;

    if(firstName==="" || lastName==="" || address==="" || pincode==="" || gender=="" || selectedFood.length === 0 || state === "" || country === ""){
        showAlert("Please fill all the fields","danger");
    } else {
        if(selectedRow == null) {
            const list=document.querySelector('#input_list');
            const row=document.createElement('tr');

            row.innerHTML=`
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${selectedFood.join(', ')}</td>
            <td>${state}</td>
            <td>${country}</td>
            <td>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Data Added","success");
        } 

    }
    

});

// Adjust the event listener for  show data in input field so that the user can edit


// Adjust the event listener for deleting data to handle the delete button
document.querySelector('#input_list').addEventListener('click',(e)=>{
    target=e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Data Deleted","danger");
    }
    clearFields();
});