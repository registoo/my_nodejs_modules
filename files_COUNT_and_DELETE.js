const fs = require('fs')
let num = 0  // для подсчёта файлов

const search = (base) => {         // base should be a string
  const files = fs.readdirSync(base)
  files.forEach((item)=>{
    const currentDir = base + '\\' + item
    const state = fs.statSync(currentDir)
    if(state.isDirectory()){
      search(currentDir)
    } else {
      num += 1
      console.log(`${num}. ${currentDir} is removed`)
      fs.unlinkSync(currentDir)  //удаление файла
    }
  })
  fs.rmdirSync(base)  //удаление директории
  console.log(`PATH. ${base} is removed`)
}

module.exports = search
