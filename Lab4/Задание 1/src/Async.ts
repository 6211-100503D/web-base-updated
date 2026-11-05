// 1. Функция mock — возвращает Promise, который завершится через number миллисекунд
export function mock(number: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, number);
  });
}

// 2. Оптимизированная функция getData (параллельное выполнение)
export async function getData(): Promise<number[]> {
  const result: number[] = [];

  const [data1, data2, data3] = await Promise.all([
    mock(100),
    mock(200),
    mock(300)
  ]);

  result.push(data1, data2, data3);
  return result;
}

// 3. Исправленная функция catchException
export async function catchException(): Promise<string> {
  try {
    await Promise.reject(new Error('my error'));
  } catch (err: any) {
    return err.message;
  }
}
