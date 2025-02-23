function solution(ingredient) {
    var answer = 0;
    let arr = [];
    
    for(i=0; i<ingredient.length; i++){
        arr.push(ingredient[i]); //빈 배열(스택)에 값 넣기 (push : 배열 마지막에 요소 추가)
         //[2], [2,1], [2,1,1], [2,1,1,2], [2,1,1,2,3], [2,1,1,2,3,1]...
        if(arr.slice(-4).join('') === '1231') {
            //arr.slice(-4) : 마지막 4개 요소 추출
            answer++; 
            arr.splice(-4); //1231제거
        }
       
    }
    
    return answer;
}