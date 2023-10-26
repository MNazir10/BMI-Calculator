const weight = document.querySelector(".weight");
const heightFt = document.querySelector(".height-f");
const heightIn = document.querySelector(".height-in");
const output = document.querySelector(".output");
const _status = document.querySelector(".status");


function checkBMIStatus(BMI){
    // console.log(BMI);
    let status = '';
    if(BMI <= 18.4) status = "Underweight";
    else if(BMI >= 18.5 && BMI <= 24.9) status = "Normal";
    else if(BMI > 24.9 && BMI <= 39.9) status = "Overweight";
    else if (BMI > 39.9) status = "Obese";
    else status = 'Invalid';
    console.log(status);
    _status.textContent = `You are ${status}`;
    
}

function submit(){
    const foot = heightFt.value * 0.3048;
    const inches = heightIn.value * 0.0254;
    const totalHeightSq = (foot + inches) * (foot + inches);
    const BMI = (weight.value / totalHeightSq).toFixed(2);
    output.textContent = `Your Body Mass Index is ${BMI}`;
    checkBMIStatus(BMI);   
}
