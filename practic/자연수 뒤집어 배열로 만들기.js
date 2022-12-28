function solution(n) {
    let answer = [n];
    let str = String(answer);
    return str.split("").reverse().
                    map(o => o = parseInt(o));
}