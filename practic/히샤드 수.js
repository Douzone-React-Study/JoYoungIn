function solution(x) {
    let answer = 0;
    let ans = String(x).split('');
    for(let i = 0; i<ans.length; i++){
        answer += Number(ans[i])
    }
    return (x % answer == 0) ? true:false;
}