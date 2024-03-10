const path=require('path');
console.log(path.sep)//returns the platform specific seperator
const filepath=path.join('/content','subfolder','text.txt')
console.log(filepath)
const base=path.basename(filepath)
console.log(base)
const absolutepath=path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolutepath)