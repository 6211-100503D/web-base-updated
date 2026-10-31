export function romanToInteger(roman) {
  const romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  
  let result = 0;
  
  for (let i = 0; i < roman.length; i++) {
    const currentValue = romanValues[roman[i]];
    const nextValue = romanValues[roman[i + 1]];
    
    if (nextValue && currentValue < nextValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
  }
  
  return result;
}