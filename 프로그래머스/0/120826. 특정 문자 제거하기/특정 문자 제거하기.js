function solution(my_string, letter) {
    var answer = '';
    
    //replace(substr, newSubstr); substr:제거할문자열, newSubstr:대체할문자열
    
    //replace 메서드에서 변수를 정규표현식으로 사용 => RegExp 객체를 활용
    answer =  my_string.replace(new RegExp(letter, 'g'), '') 
   
    
    return answer;
}