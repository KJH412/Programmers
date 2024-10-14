function solution(num_list) {
    var answer = [];
    
    let arrNum = num_list.length-1; //배열 마지막 인덱스
    
    for(let i=0; i<num_list.length; i++){
        answer[i] = num_list[arrNum]; //arr[0] = arr2[마지막인덱스]
        arrNum--;
    }
    
    return answer;
}