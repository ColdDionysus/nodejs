const uc = require('upper-case')


const display = (string) => {
    

    const newStriing = uc.upperCase(string)

    
    return newStriing
}

console.log(display("This  is new"))