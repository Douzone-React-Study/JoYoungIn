function solution(s){
    let answer = s.toLowerCase();               //toLowerCase(); 소문자 변환
    let pcheck = answer.split('p').length;      
    let ycheck = answer.split('y').length;

    return pcheck == ycheck ? true:false;
}