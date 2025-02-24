function solution(survey, choices) {
    var answer = '';
    
    /*
    survey["AN", "CF", "MJ", "RT", "NA"], choices[5, 3, 2, 7, 5]
    
    choices[i] > 4 : 동의 점수 획득
    choices[i] < 4 : 비동의 점수 획득
    choices[i] = 4 : 모르겠음 0점
    
    1) AN -> 앞에 위치한 알파벳이 비동의 선택시 점수를 얻음, 
    5번을 선택했으므로 '약간 동의' 점수 획득 N이 1점 얻음
    2) CF 3번선택 -> C가 1점 획득
    3) MJ 2번 -> M이 2점
    4) RT 7번 -> T가 3점
    5) NA 5번 -> A가 1점 (ㅇ)
    AN , NA 하나의 지표에서 각 점수가 같을 때 사전 순으로 판단 -> A=N=1 결과는 A
    T C M A 
    */
    
    /*  성격 유형 점수 획득
        1.choices[i] < 4 (비동의)
        4-1=3 (매우 비동의)
        4-2=2 (비동의)
        4-3=1 (약간 비동의)
        
        2.choices[i] > 4 (동의)
        7-4=3
        6-4=2
        5-4=1
    */
    
    let score =  {
     "R": 0 , "T": 0,
     "C": 0 , "F": 0,
     "J": 0 , "M": 0,
     "A": 0 , "N": 0
    }
    
    //점수
    for(i=0; i<survey.length; i++){
        
        //"AN" -> type1="A",type2="N" 각각 분해 
        let [type1, type2] = survey[i]; //type1이 비동의 선택 시 유형
        
        if(choices[i] < 4){
            score[type1] += (4-choices[i]);
        }else if(choices[i] > 4){
            score[type2] += (choices[i]-4);
        }
       
    }
    
    answer += score["R"] >= score["T"] ?  "R" : "T";
    answer += score["C"] >= score["F"] ?  "C" : "F";
    answer += score["J"] >= score["M"] ?  "J" : "M";
    answer += score["A"] >= score["N"] ?  "A" : "N";
    
    return answer;
}