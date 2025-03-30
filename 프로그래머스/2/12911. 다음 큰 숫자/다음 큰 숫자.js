function solution(n) {
    var answer = 0;
    
    for(let i=1; i < n; i++){ 
        let nextNum = n;
        nextNum +=i;
        if(nextNum.toString(2).split('1').length-1 === n.toString(2).split('1').length-1){
            answer = nextNum;
            break;
        }
        
    }
    
    
    return answer;
}
 /* 
    n 다음 큰수를 구하기
    1. n보다 큰 자연수
    2. 2진수로 변환 했을 때 1의 개수가 같을 것
    3. 1,2조건을 만족하는 수 중 가장 작은 수
    */