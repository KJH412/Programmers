function solution(s) {
    var answer = '';

    const num = s.split(" "); // ["1","2","3","4"]
    const arr = num.map(Number);
    
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    answer = min + " " +  max;
    
    return answer;
}