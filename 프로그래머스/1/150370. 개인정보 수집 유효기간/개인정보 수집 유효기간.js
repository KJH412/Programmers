function solution(today, terms, privacies) {
    var answer = [];
    
    const todayDate = new Date(today); //Date형식
    
    //["A 6"] -> { A: 12 } 약관 정보 구조 분해 할당 후 객체화 
    let termsObj = {}; 
    terms.forEach( (t) => {
       let [type, months] = t.split(" "); //A 6 
       termsObj[type] = Number(months); //{ A: 6, ... }
    });
    
    //2. 개인정보 유효기간 계산
    //privacies = ["2021.05.02 A"] 구조 분해 할당
   privacies.forEach((p, index) => {
      let [date, type] = p.split(" "); //{2021.05.02 : A, ...}
      
      let expirationDate = new Date(date); //개인정보 날짜
       
      //setMonth() : 12월 이상이면 연도 자동 증가
      expirationDate.setMonth(expirationDate.getMonth() + termsObj[type]); //개인정보 달 + 약관유효기간
       
       //개인정보 파기
      if(expirationDate <= todayDate){
          answer.push(index+1); //0번째 인덱스인 경우 첫번째 개인정보이므로 index+1
      }
       
   });
    
    return answer;
}