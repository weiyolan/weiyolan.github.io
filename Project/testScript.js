
let number = "159845.598";
// console.log(number.split(''));

const formatNumber = number => {
let beforeComma = `${number.split('.')[0]}`;
console.log('beforeComme ' + beforeComma);
let afterComma = number.indexOf(".") ? `${number.split('.')[1]}`:none;
console.log('beforeComma is a ' + typeof beforeComma)
let start = (beforeComma.length())%3;

if (beforeComma.length()<3) {return number}

if (start && beforeComma.length()>3) {
    let formattedNumber = beforeComma.slice(0,start)+',';
    beforeComma = beforeComma.slice(start);
} else {
    let formattedNumber = '';
};

for (let i = 0 ; i<beforeComma.length();i++) {
    let val = beforeComma[i];
    if ((i+1)%3==0) {
        formattedNumber += `${val},`;
    } else {
        formattedNumber += `${val}`;
    };
}

formattedNumber += afterComma;
return formattedNumber; 

}

console.log(formatNumber(number));








// const formatNumber = number => {



//   }