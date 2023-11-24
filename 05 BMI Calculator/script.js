const form = document.getElementById('bmiForm');

const userHeight = document.getElementById('height');
const userWeight = document.getElementById('weight');

form.addEventListener('submit', (event)=> {
    // preventing for automaticaly submiting
    event.preventDefault()

    // Taking user height and weight
    const height = parseFloat(userHeight.value);
    const weight = parseFloat(userWeight.value);


    if (!isNaN(height) && !isNaN(weight)) {
        
        // Calculate BMI
        const bmi = calculateBMI(height, weight)


        // show result
        DisplayReslut(bmi)


    } else {
        alert('Please enter valid values of height and weight')
    }

})

function calculateBMI(height, weight) {
    // convert height in meters
    const heightInMeters = height / 100 ;

    return ( weight / (heightInMeters * heightInMeters )).toFixed(2)
}

function DisplayReslut(bmi) {

    const bmiValueElement = document.querySelector('#BMIvalue')

    // Display bmi result
    bmiValueElement.textContent = bmi;
}