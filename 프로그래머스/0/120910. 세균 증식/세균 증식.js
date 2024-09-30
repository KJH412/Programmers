function solution(n, t) {
    var answer = 0;
    
    for(let i=1; i<=t; i++){
       n *= 2;
    }
    answer = n;
    return answer;
}