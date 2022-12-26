function solution(arr) {
    const avg = arr.reduce((a,c) => a+c) /arr.length;
    return avg;
}