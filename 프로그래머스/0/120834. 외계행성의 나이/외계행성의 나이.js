function solution(age) {
    var answer = '';
    
    let str = '';
    let arr = [];
    
    let numToStr = age.toString(); //정수를 문자열로 변경
    arr = numToStr.split(''); //문자열을 잘라 배열에 저장 : ["2","3"]
    
    //a~z 유니코드 : 97~122
    for(let i=97; i<=122; i++){
        str += String.fromCharCode(i); 
        //str = 'abc...xyz';
    }
   
    for(let i=0; i<arr.length; i++){
       //배열의 문자열에 해당하는 번호의 알파벳 찾기
       let num = Number(arr[i]); 
       answer += str[num];
       
    }
    
    return answer;
}