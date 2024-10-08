function solution(array, commands) {
    var answer = [];
    
    for(let i=0; i<commands.length; i++){
        
            const a = []; //임시 저장할 배열
        
            let start = commands[i][0];
            let end = commands[i][1];
            let k = commands[i][2];
            
            // let newArr = array.slice(start-1, end);
            // newArr.sort((a,b) => a - b);
            // answer.push(newArr[k-1]);
            a.push(...array.slice(start-1, end));
        
            a.sort((a,b)=>a-b);
            answer.push(a[k-1]);
        
    }
    
    return answer;
}