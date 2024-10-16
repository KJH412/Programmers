function solution(num_list) {
    var answer = [];
    
    var a = []; //짝수 정수 저장
    
    for(let i=0; i<num_list.length; i++){
        if(num_list[i] % 2 === 0) { //짝수 구분
            a.push(num_list[i]); //짝수인 정수 a배열에 저장
        }
        //a배열의 길이 = 짝수 개수
        answer[0] = a.length; 
        //(전체 배열 길이-a배열길이) = 홀수 개수
        answer[1] = num_list.length - a.length;    
    }
    
    return answer;
}