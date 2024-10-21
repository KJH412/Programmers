function solution(my_string, n) {
    var answer = '';
    
    for(let i=0; i<my_string.length; i++){ //5 "hello"
        for(let j=1; j<=n; j++){ //n번 반복하여 i번째 문자 n번 더함
            answer += my_string[i]
        }
    }
    return answer;
}