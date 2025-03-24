function solution(A,B){
    var answer = 0;

    // A=[1 2]
    // B=[4 3] =>  1*4 / 2*3 => 큰값 * 작은값 = 작은 수
    
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    
    for(let i=0; i<A.length; i++){
        answer += A[i] * B[i];
    }
    
    return answer;
}