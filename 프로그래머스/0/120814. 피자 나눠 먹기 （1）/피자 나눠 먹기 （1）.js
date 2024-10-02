function solution(n) {
    var answer = 0;
    //1판에 7조각
    //1명~7명 1판
    //8명 ~ 14명 2판
    //15명~ 21명 3판
    
    answer =  Math.ceil(n/7)
   
    return answer;
}