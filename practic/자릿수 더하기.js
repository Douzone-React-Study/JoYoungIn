function solution(n)
{
    let answer = 0;
    let stri = String(n);
    
    for(let i = 0; i < stri.length; i++) {
        answer += parseInt(stri[i]);
    }
    return answer;
}