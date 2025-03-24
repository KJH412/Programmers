function solution(s){ 
    var answer = true;
    //"(())()"	true

    let stack = [];
    
    for(let c of s){
        if(c === '('){
            stack.push(c);
        }else{
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    
    answer = stack.length === 0 ? true : false;
    
    return answer;
}