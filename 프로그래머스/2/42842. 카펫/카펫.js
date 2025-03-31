function solution(brown, yellow) {
    var answer = [];
    
    //카펫 최소 너비,높이 : 3
    let carpetSize = brown + yellow; // 전체 면적
    
    for(let i=3; i < carpetSize; i++){
        let w = carpetSize/i;
        let h = i;
        
        if(w < h) continue;
        
        if((w - 2) * (h - 2) === yellow){  //예)카펫 최소크기3*3일때, 3-2=1/3-2=1, 1*1=yellow면적
            answer[0] = w;
            answer[1] = h;
        }
    }
    
    
    return answer;
}