function solution(balls, share) {
    var answer = 0;
    
    //balls = n, share = m
    //서로 다른 n개 중 m개를 뽑는 경우의 수 공식 : n! / (n-m)! * m! 
    
    //분자
    let n = factorial(balls);  //n! 값
    //분모 
    let m1 = factorial(balls-share);   // (n-m)! 값 
    let m2 = factorial(share);   // m! 값 
    
    answer = n / (m1*m2) ; // 경우의 수 공식 계산
    
    return Math.round(answer);
}

//팩토리얼 계산 함수
function factorial(number){
    
    let result = 1;
    
    for(let i=1; i<=number; i++){
        result *= i;
    }
    
    return result;
}
