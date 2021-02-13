

export default function TimeConvert() {
   let date = new Date().toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      return date;
    
}

console.log(TimeConvert())




