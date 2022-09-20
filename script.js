const maleInput = document.getElementById('male'),
      femaleInput = document.getElementById('female'),
    // характеристики
      ageInput = document.getElementById('age'),
      heightInput = document.getElementById('height'),
      weigthInput = document.getElementById('weigth'),
    // активность 
      minActive = document.getElementById('min_active'),
      lowActive = document.getElementById('low_active'),
      middleActive = document.getElementById('middle_active'),
      highActive = document.getElementById('high_active'),
      maxActive = document.getElementById('max_active'),
    // кнопки
      countBtn = document.querySelector('.count'),
      clearBtn = document.querySelector('.clear'),
      outputBox = document.querySelector('.output_box'),
      outputText = document.getElementById('output_text');

const activeList = [minActive, lowActive, middleActive, highActive, maxActive];
const activeValues = [1.2, 1.375, 1.55, 1.725, 1.9];
    
// BMR = 88,36 + (13,4 × вес в кг) + (4,8 × рост в см) – (5,7 × возраст в годах). <-- male
// BMR = 447,6 + (9,2 × вес в кг) + (3,1 × рост в см) – (4,3 × возраст в годах). <-- female

function countCaloriesMale(weigth, height, age) {
    let calories = 88.36 + (13.4 * parseInt(weigth.value)) + (4.8 * parseInt(height.value)) - (5.7 * parseInt(age.value));
    for (let i = 0; i < activeList.length; i++) {
        let item = activeList[i]
        for (let j = 0; j < activeValues.length; j++) {
            let value = activeValues[j]
            if (item.checked && i === j) {
                calories *= value
            }
        }
    }
    return Math.round(calories);
}

function countCaloriesFemale(weigth, height, age) {
    let calories = 447.6 + (9.2 * parseInt(weigth.value)) + (3.1 * parseInt(height.value)) - (4.3 * parseInt(age.value));
    for (let i = 0; i < activeList.length; i++) {
        let item = activeList[i]
        for (let j = 0; j < activeValues.length; j++) {
            let value = activeValues[j]
            if (item.checked && i === j) {
                calories *= value
            }
        }
    }
    return Math.round(calories);
}


countBtn.addEventListener('click', (event) => {
    event.preventDefault();
    outputBox.classList.remove('hidden');
    activeList.forEach(item => {
        if (!maleInput.checked || weigthInput.value != '' || heightInput.value != '' || ageInput.value != '' || !item.checked) {
            let maleResult = countCaloriesMale(weigthInput, heightInput, ageInput);
            outputText.innerHTML = `Ваша норма калорий: ${maleResult}`;
        }
        else if (!femaleInput.checked || weigthInput.value != '' || heightInput.value != '' || ageInput.value != '' || !item.checked) {
            let femaleResult = countCaloriesFemale(weigthInput, heightInput, ageInput);
            outputText.innerHTML = `Ваша норма калорий: ${femaleResult}`;
        } else {
            outputText.innerHTML = `Недостаточно данных`;
        }
    })
})

clearBtn.addEventListener('click', (event) => {
    outputBox.classList.add('hidden')
    event.preventDefault();
    maleInput.checked = false;
    femaleInput.checked = false;
    const activeList = [minActive, lowActive, middleActive, highActive, maxActive]
    activeList.forEach(item => {
        item.checked = false;
    })
    ageInput.value = weigthInput.value = heightInput.value = '';
})


