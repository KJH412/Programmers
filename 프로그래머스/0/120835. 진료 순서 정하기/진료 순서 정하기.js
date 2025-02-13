function solution(emergency) {
    var answer = [];
    // 1. 들어오는 정수 배열 큰 값부터 내림차순 정렬 -> 인덱스 값+1

    const copyarr = emergency.slice(); //원본 배열 복사
    const arr = copyarr.sort((a,b) => b-a);  //복사한 배열 내림차순 정렬 [3, 76, 24] -> [76,24,3]
    
     for (i=0 ; i<copyarr.length; i++){
        for(j=0; j<copyarr.length; j++){
            if(emergency[i] === arr[j]){
                answer.push(j+1); //순위는 1부터 시작
            }
        }
     }
  
    
    
    return answer;
}