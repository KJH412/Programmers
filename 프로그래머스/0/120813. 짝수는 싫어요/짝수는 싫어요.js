function solution(n) {
    var answer = [];
    
    for(let i=0; i<=n; i++){
        if ( i%2 == 1){ //홀수
             answer.push(i);
        }
    }
    
    return answer;
}