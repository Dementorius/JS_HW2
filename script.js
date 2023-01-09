const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция', 
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};


let resultArr=[];

for (key in citiesAndCountries) {
		resultArr[resultArr.length] = `${key} - это ${citiesAndCountries[key]}`;
}
console.log(resultArr);


// Task 2 


function getArray(){
const amount = 12;
const arr = [];
for(let i = 1; i <= amount; i+=3) {
	const innerArr = [];
	for (let j = i; j<=i+2; j++) {
		  innerArr[innerArr.length] = j;
	}
 arr[arr.length] = innerArr;
	} 

console.log(arr)
   
}

getArray()

// Task 3

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг' , 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thersday', 'Friday', 'Saturday', 'Sunday'],
}


function getNameOfDay(){
    const lang = 'en';
    const day = 7;

				if(lang === 'ru' && day > 0 && day <= 7) {
				return	console.log (namesOfDays.ru[day - 1]);
				} 
				else if (lang === 'en' && day > 0 && day <= 7) {
				return	console.log (namesOfDays.en[day - 1]);
				}

			 console.log ('enter ru or en for lang and day from 1 to 7 for day');
				
    
   
}	

getNameOfDay();


// Task4


function LessDigitsSum () {

let arr = [12, 423, 54, 33, 1, -1, 0.22];
  arr = arr.filter ((n) => {return n > 0 && Number.isInteger(n)})
  
  if (arr.length < 4) {
  	return console.log ('there are less then four digits')
  	
  }


   arr.sort((a, b) => a - b);
   const minSum = arr[0] + arr[1];

   console.log('sum of minimal digits:',minSum);

}

LessDigitsSum ()


// Task 5

function numFromBinary(arr) {
	arr.reverse();
	let result = null;
	for (let i =0; i < arr.length; i++) {
		result += arr[i] * Math.pow(2, i);
		}
 return console.log(`Testing: [${arr.reverse()}] ==> ${result}`);
}

const arr = [1, 0, 1, 0, 0, 1, 1]
numFromBinary(arr)

