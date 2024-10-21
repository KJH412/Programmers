function solution(my_string, letter) {
    var answer = '';
    
    //replace(substr, newSubstr); substr:제거 할 문자열, newSubstr:대체 할 문자열
    
    //my_string.replace(/문자/g, '') => 정규표현식 '문자' 부분에 변수를 넣고 싶음
    
    //replace 메서드에서 변수를 정규표현식으로 사용 
    //=> RegExp 객체를 활용, g 플래그는 전역 검색
    answer =  my_string.replace(new RegExp(letter, 'g'), '') 
   
    
    return answer;
}