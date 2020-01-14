function soma(a, b) {
  return a + b;
}

test('bla', () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
