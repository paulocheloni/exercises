const factor = number => (number < 1) ? 1 : factor(number - 1) * number

