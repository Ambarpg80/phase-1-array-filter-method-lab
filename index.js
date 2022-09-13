// Code your solution here
  
function findMatching(array, string){
    
    const result = array.filter(item =>item.toUpperCase() === string.toUpperCase())
        //
        return result   
    }

findMatching();

function fuzzyMatch(array, string){
const result = array.filter(item => item.startsWith(string))
    //console.log(result)
    return result
}

fuzzyMatch();

function matchName(array, string){
const result = array.filter(item => item.name === string)

        return result
}

matchName();