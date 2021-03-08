module.exports = function toReadable (number) {
    let a = ['','one','two','three','four', 'five','six','seven','eight','nine','ten'];

    let d = ['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']

    let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    let c = 'hundred';
    let str = '';
    if (number === 0) {
        return 'zero';
    }
    if(number < 11) {
      return a[number];
    }
    if(number > 10 && number < 20) {
      return d[number % 10];
    }
    if(number >= 20 && number < 100) {
      let tens = Math.floor(number / 10);
      let ones = number % 10;
      str = `${b[tens]} ${a[ones]}`;
      return str.trim();
    }
    if(number === 100) {
      return 'one hundred';
    }
    if(number > 100 &&  number < 1000) {
      let hundreds = Math.floor(number / 100);
      let remains = number % 100;
      if(remains < 11) {
        str =`${a[hundreds]} ${c} ${a[remains]}`;
        return str.trim();
      }
      if(remains > 10 && remains < 20) {
      str = `${a[hundreds]} ${c} ${d[number % 10]}`;
      return str.trim();
      }
      let tens = Math.floor(remains / 10);
      let ones = remains % 10;
      str = `${a[hundreds]} ${c} ${b[tens]} ${a[ones]}`;
      return str.trim();
    }
}
