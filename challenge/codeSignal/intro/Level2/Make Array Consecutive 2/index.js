function solution(statues) {
  const a = statues.sort((a, b) => a - b);
  return a[a.length - 1] - a[0] - a.length + 1;
}
