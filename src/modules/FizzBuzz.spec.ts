import { fizzBuzz } from './FizzBuzz';

describe('数値を文字列に変換する', () => {
  test('1を渡すと文字列"1"を返す', () => {
    // 準備(Arrange)
    // 実行(Act)
    // 検証(Assert)
    expect(fizzBuzz(1)).toBe('1');
  });
});

describe('3の倍数を渡すと「Fizz」を返す', () => {
  test('3を渡すをFizzを返す', () => {
    // 準備(Arrange)
    // 実行(Act)
    // 検証(Assert)
    expect(fizzBuzz(3)).toBe('Fizz');
  });
});

describe('5の倍数を渡すと「Buzz」を返す', () => {
  test('5を渡すをBuzzを返す', () => {
    // 準備(Arrange)
    // 実行(Act)
    // 検証(Assert)
    expect(fizzBuzz(5)).toBe('Buzz');
  });
});

describe('15の倍数を渡すと「FizzBuzz」を返す', () => {
  test('15を渡すをFizzBuzzを返す', () => {
    // 準備(Arrange)
    // 実行(Act)
    // 検証(Assert)
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});
