function solution(n) {
    var answer = 0;
    
    var num = String(n);
    //1234
    for(let i=0; i<num.length; i++){
        
       answer += Number(num[i]);
    }
    
 
   
    return answer;
}