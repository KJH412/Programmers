function solution(my_string) {
    var answer = '';
    //str.substring(start, end) 
    //str.substring(0,4)이면 0~3번째까지 잘라서 리턴
    
    let length = my_string.length; //5  bread  (4,5) (3,4) (2,3) (1,2) (0,1)
    let index = my_string.length-1; //4
    for(let i=0; i<length; i++){
        answer += my_string.substring(index-i,length-i); 
        
    }
    
    return answer;
}