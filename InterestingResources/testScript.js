const formatNumber = x => {
    let number = '' + x;
    let beforeComma = `${number.split('.')[0]}`;
    // console.log(beforeComma)
    // console.log('beforeComme ' + beforeComma);
    let afterComma = number.indexOf(".") ? `${number.split('.')[1]}`:none;
    // console.log('beforeComma is a ' + typeof beforeComma)
    // console.log(beforeComma.length);
    let start = (beforeComma.length)%3;
    let formattedNumber = '';

    if (beforeComma.length<3) {return number}

    if (start && beforeComma.length>3) {
        formattedNumber = beforeComma.slice(0,start)+',';
        beforeComma = beforeComma.slice(start);
    };

    for (let i = 0 ; i<beforeComma.length;i++) {
        let val = beforeComma[i];
        if ((i+1)%3==0 && (i+1)<beforeComma.length) {
            formattedNumber += `${val},`;
        } else {
            formattedNumber += `${val}`;
        };
    }

    formattedNumber += '.'+afterComma;
    return formattedNumber; 
}

console.log(formatNumber(146484.45));
console.log(formatNumber(1464584.45));
console.log(formatNumber(14645558.45));
console.log(formatNumber(84.45));
console.log(formatNumber(884.45));
console.log(formatNumber(1884.45))


const shopForBeans = () => {
    return new Promise((resolve, reject) => {
      const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
      setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * beanTypes.length);
        let beanType = beanTypes[randomIndex];
        console.log(`2. I bought ${beanType} beans because they were on sale.`);
        resolve(beanType);
      }, 1000);
    });
  }
   
  async function getBeans() {
    console.log(`1. Heading to the store to buy beans...`);
    let value = await shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
  }
   
  getBeans();
  console.log("Describe what happens with this `console.log()` statement as well.");
