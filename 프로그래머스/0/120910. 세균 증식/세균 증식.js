function solution(n, t) {
    var answer = 0;
    //2마리
    //1시간 -> 2*2 = 4마리
    //2 -> 4*2 = 8
    //3 -> 8*2 = 16
    //4 -> 16*2 = 32
    for(let i=1; i<=t; i++){
       n *= 2;
    }
    answer = n;
    return answer;
}