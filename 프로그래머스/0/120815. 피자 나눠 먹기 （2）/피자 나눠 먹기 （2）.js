function solution(n) {
    var answer = 0;
    //n명 ?판-?조각 
    //6명 1판-6조각 1조각씩   ?판=(총6조각/?명)/6조각
    //10명 5판-30조각 3조각씩  5판*6조각 = 총30조각  ?판 = (?판*6)/n명
    //4명 2판-12조각 3조각씩
    //(i판*6)%명===0  
    
    for(let i=1; i<=n; i++){
       if((i*6)%n == 0 ) { 
           
           answer = i
           
           return answer;
        
       } 
    }
    
}