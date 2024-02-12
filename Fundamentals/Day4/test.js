/*
    Create a function to calculate Body Mass Index (BMI)
        ● Formula : BMI = weight (kg) / (height (meter))²
        ● Parameters : weight & height
        ● Return values :
            ○ < 18.5 return “less weight”
            ○ 18.5 - 24.9 return “ideal”
            ○ 25.0 - 29.9 return “overweight”
            ○ 30.0 - 39.9 return “very overweight”
            ○ > 39.9 return “obesity”
*/
let kg = 62
let m2 = 1.73
let cm = (m2 * m2)
let bmi = kg / cm

if (bmi < 18.5){
    console.log('less weight')
}else if(bmi >=18.5 && bmi <= 24.9){
    console.log('ideal')
}else if(bmi >= 25.0 && bmi <= 29.9){
    console.log('overweight')
}else if(bmi >= 30.0 && bmi <= 39.9){
    console.log('very overweight')
}else if(bmi >= 39.9){
    console.log('obesity')
}