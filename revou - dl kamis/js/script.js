let button = document.getElementById("btn");
let resetButton = document.getElementById("reset-btn");

button.addEventListener('click', () => {
    const weight = parseInt(document.getElementById('berat').value);
    const usia = parseInt(document.getElementById('usia').value);
    const height = parseInt(document.getElementById('tinggi').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false, usia_status = false;

    if (weight === '' || isNaN(weight) || weight <= 0){
        document.getElementById('weight_error').innerHTML = 'Harap masukkan berat badan yang valid!';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if (usia === '' || isNaN(usia) || usia <= 0){
        document.getElementById('usia_error').innerHTML = 'Harap masukkan usia yang valid!';
    } else {
        document.getElementById('usia_error').innerHTML = '';
        usia_status = true;
    }

    if (height === '' || isNaN(height) || height <= 0){
        document.getElementById('height_error').innerHTML = 'Harap masukkan tinggi badan yang valid!';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    if (height_status && weight_status && usia_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.5){
            result.innerHTML = "Kalkulasi BMI Anda: " + bmi + " | Anda kekurangan berat badan";
        } else if(bmi >= 18.5 && bmi < 24.9){
            result.innerHTML = "Kalkulasi BMI Anda: " + bmi + " | Anda normal (ideal)";
        } else if(bmi >= 25 && bmi < 29.9){
            result.innerHTML = "Kalkulasi BMI Anda: " + bmi + " | Anda kelebihan berat badan";
        } else if(bmi >= 30){
            result.innerHTML = "Kalkulasi BMI Anda: " + bmi + " | Anda kegemukan (obesitas)";
        }
    } else {
        alert("Terdapat eror pada form!");
        result.innerHTML = '';
    }
});

resetButton.addEventListener('click', () => {
    document.getElementById('berat').value = '';
    document.getElementById('usia').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('weight_error').innerHTML = '';
    document.getElementById('usia_error').innerHTML = '';
    document.getElementById('height_error').innerHTML = '';
    document.getElementById('output').innerHTML = '';
});
