const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const includeSuggestions = document.querySelector(".include-suggestions ul");
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber','Custard apple', 'Damson', 'Date', 'Dragonfruit','Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry','Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry','Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul','Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime','Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen','Marionberry', 'Melon', 'Cantaloupe', 'Honeydew','Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine','Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine','Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear','Persimmon', 'Plantain', 'Plum', 'Pineapple','Pomegranate', 'Pomelo', 'Quince', 'Raspberry','Salmonberry', 'Rambutan', 'Redcurrant', 'Salak','Satsuma', 'Soursop', 'Star fruit', 'Strawberry','Tamarillo', 'Tamarind', 'Yuzu'];

function find(string) {
    let result_array = [];
    let lower_string = string.toLowerCase();
    const lower_fruit = fruit.map(v => v.toLowerCase())
    const filteredList= lower_fruit.filter(value => value.includes(lower_string))
    result_array = filteredList.map(value => value[0].toUpperCase() + value.substring(1))
    return result_array;
}

function findHandler(event) {
    console.log("findHandler function called");
    let result_array = find(input.value);
    presentSuggestions(result_array, input.value);
}

function clearField() {
    suggestions.innerHTML = "" 
}

let timer;
function presentSuggestions(result_array, inputValue) {
    clearField();
    const startTimer = () => {timer = setTimeout(() => {clearField()}, 5000); }
    if (inputValue != "") {
        for (res of result_array) {
            let newlist = document.createElement('li');
            newlist.innerText = res;
            suggestions.appendChild(newlist);
        };
    }
    clearTimeout(timer);
    startTimer()
    console.log("updated suggestions list", suggestions)
}

function useSuggestion(event) {
    let clicktext = event.target.innerText;
    input.value = clicktext;
    suggestions.innerHTML = "";
}

input.addEventListener('keyup', findHandler);
suggestions.addEventListener('click', useSuggestion);