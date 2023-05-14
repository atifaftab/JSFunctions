const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


//  FOREACH

companies.forEach(function (company) {
    console.log(company.name +" "+ company.start);
})

companies.forEach(function (company){
    console.log(company.category);
})

// FILTER

//age more than 21

// old
// const adult = ages.filter(function (age) {
//     if (age >= 21)
//         return true;
// })

//new
const adult = ages.filter(age=> age>21);
console.log(adult)

console.log(ages.filter(age => age<20))

console.log("companies starts after 1990 and belongs to Finance category");
console.log(companies.filter(company => company.start > 1980 && company.category ==='Finance'))

//company's category is retail
const retail = companies.filter(company => company.category === "Retail")
console.log(retail);

//company started in 1980s
const startWith80 = companies.filter(company => (company.start >=1980 && company.start<1990))
console.log(startWith80)

//company that lasted more than 10 years
//old
// const lasted10Years = companies.filter(company => {
//     if(((company.end)-(company.start))>=10){
//         return true;
//     }
// })

//new 
const lasted10Years = companies.filter(company => (company.end - company.start) >= 10)
console.log(lasted10Years)

//   MAP

//create array of company names
const companyName = companies.map(company => 
    `${company.name} - [${company.category} ${company.start} ${company.end}]`
)
console.log(companyName)

//square root of age array
const ageSquareRoot = ages.map(age => Math.sqrt(age))

//multiply by 2
const ageTimesTqo = ages.map(age => age*2)

//multiple map
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2)
console.log(ageMap)

//  SORT

// sort companies by start date

const sortedByStart = companies.sort((a, b) => a.start > b.start ? 1 : -1)
console.log(sortedByStart)

const sortedByStart1 = companies.sort((a, b) => a.start - b.start)
console.log(sortedByStart1)

// sort ages

//accensding
const sortAgeASC = ages.sort((a,b) => a - b)
console.log(sortAgeASC);

//desending
const sortAge = ages.sort((a,b) => b - a)
console.log(sortAge);


//  REDUCE

// sum of ages

let sum = 0;
for(let i =0; i<ages.length; i++){
    sum += ages[i]
 }

//  arrow function 
const sumArrow = ages.reduce((total, age) => total + age)
console.log(sumArrow)

//total years if all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log(totalYears)


//combined

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 30)
    .sort((a, b) => a-b)
    .reduce((total, age) => total + age, 0)

console.log(combined)