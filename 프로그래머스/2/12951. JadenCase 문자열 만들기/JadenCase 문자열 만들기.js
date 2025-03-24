function solution(s) {
    var answer = '';
    let arr = [];
    let lowerS = s.toLowerCase().split(" ");
    
    // ["For","The","Last","Week"]
    const upperS = lowerS.map((wordS)=>{
        if(wordS === "") return "";
        return wordS[0].toUpperCase() + wordS.slice(1);  //인덱스 1부터 끝까지 자른 문자 붙이기
    });
    
    answer = upperS.join(" ");
    
    return answer;
}