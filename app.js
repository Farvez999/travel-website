var busObject = {
    vehical: 'Bus',
    imgUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    fareParKilo: 2,
    capacity: 40,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti itaque laboriosam adipisci molestiae cupiditate, asperiores voluptas provident. Architecto, culpa sunt.'

}

var carObject = {
    vehical: 'Car',
    imgUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    fareParKilo: 4,
    capacity: 4,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti itaque laboriosam adipisci molestiae cupiditate, asperiores voluptas provident. Architecto, culpa sunt.'

}

var bikeObject = {
    vehical: 'Bike',
    imgUrl: 'https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWtlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    fareParKilo: 3,
    capacity: 2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti itaque laboriosam adipisci molestiae cupiditate, asperiores voluptas provident. Architecto, culpa sunt.'

}

const serviceArray = [busObject, carObject, bikeObject];

function displayService(service) {
    const mainSection = document.getElementById('main-section');
    const stringField = JSON.stringify(service);
    const div = document.createElement('div');
    div.innerHTML = `
<div class="card mt-3 mx-auto" style="max-width: 800px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${service.imgUrl}"
                        class="img-fluid rounded-start h-100" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Transport Mood ${service.vehical}</h5>
                        <p class="card-text">${service.description}</p>
                        <p class="card-text"><small class="text-muted">Fare fer kilo :${service.fareParKilo} </small> <small class="text-muted">Capacity :${service.capacity}</small></p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='handelBooking(${stringField})' data-bs-target="#staticBackdrop">
  BOOK NOW
</button>
                    </div>
                </div>
            </div>
        </div>
`
    mainSection.appendChild(div);
}
// displayService(busObject);
// displayService(carObject);
// displayService(bikeObject);
function displayAllArtical(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        displayService(element)
    }
}
displayAllArtical(serviceArray);

function handelBooking(obj) {
    const modalBody = document.getElementById('modal-body');
    const stringField = JSON.stringify(obj);
    modalBody.innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
    <img src="${obj.imgUrl}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Vehical Mood ${obj.vehical}</h5>
    <p class="card-text">${obj.description}</p>
    <p class="card-text"><small class="text-muted">Fare fer kilo :${obj.fareParKilo} </small> <small class="text-muted">Capacity :${obj.capacity}</small></p>
    
    <p>Fare: <small class="text-muted" id='fare'></small></p>
    <p>Tax: <small class="text-muted" id='tax'></small></p>
    <p>Total Cost: <small class="text-muted" id='total-cost'></small></p>
    
    <form class="d-flex" role="search">
    <div class="d-flex flex-column">
    <input class="form-control m-2" type="number" id='distance-input'} placeholder="Kilo meter ?" aria-label="Search">
    <input class="form-control m-2" type="number" id='quantity-input'} placeholder="Koita gari ?" aria-label="Search">
    
    <button class="btn btn-outline-success" type="button" onclick='calculateCost(${stringField})'>Submit</button>
    </form>
    </div>
  </div>
</div>
    `
}

function calculateCost(object) {
    console.log('click')
    const distanceInput = document.getElementById('distance-input').value;
    const quantityInput = document.getElementById('quantity-input').value;

    const fareDiv = document.getElementById('fare');
    fareDiv.innerHTML = distanceInput * quantityInput * object.fareParKilo;
}

document.getElementById("search-btn").addEventListener("click", function () {
    const value = document.getElementById("search-value").value;

    for (let i = 0; i < serviceArray.length; i++) {
        const element = serviceArray[i];
        if (value.toLowerCase()
            == element.vehical.toLowerCase()) {
            document.getElementById("main-section").innerHTML = ""
            displayService(element)
            return;
        }

    }

    alert("nothing found with your input")


})
