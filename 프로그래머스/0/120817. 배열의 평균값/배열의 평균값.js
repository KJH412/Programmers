function solution(numbers) {
    var answer = 0;
    
    numbers.forEach( n => {
        answer += n; 
        
    })
    
    let result = answer / numbers.length;
    
    return result;
}