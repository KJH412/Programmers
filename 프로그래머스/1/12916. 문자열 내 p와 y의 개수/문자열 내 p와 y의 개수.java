import java.util.*;

class Solution {
    boolean solution(String s) {
        ArrayList<Character> pArr = new ArrayList<>();
        ArrayList<Character> yArr = new ArrayList<>();
        
        for(int i=0; i<s.length(); i++){
            
            if(s.charAt(i) == 'p' || s.charAt(i) == 'P' ){
                pArr.add(s.charAt(i));
            }
            if(s.charAt(i) == 'y' || s.charAt(i) == 'Y' ){
                yArr.add(s.charAt(i));
            }
        }
        
        Boolean result = ((pArr.size() == yArr.size()) ? true : false) ;
        
        return result;
    }
}