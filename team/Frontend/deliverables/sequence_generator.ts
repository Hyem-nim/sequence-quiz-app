// 수열 생성 알고리즘 - TypeScript 구현

export interface SequenceData {
  numbers: number[];
  answer: number;
  type: 'arithmetic' | 'geometric' | 'quadratic' | 'fibonacci' | 'polynomial';
  hint1: string;
  hint2: string;
  explanation: string;
}

export class SequenceGenerator {
  
  /**
   * 랜덤 수열 문제 생성
   * 중학교 3학년 수준의 수열을 생성합니다
   */
  static generateRandomSequence(): SequenceData {
    const sequenceTypes = ['arithmetic', 'geometric', 'quadratic', 'fibonacci', 'polynomial'];
    const randomType = sequenceTypes[Math.floor(Math.random() * sequenceTypes.length)];
    
    switch (randomType) {
      case 'arithmetic':
        return this.generateArithmeticSequence();
      case 'geometric':
        return this.generateGeometricSequence();
      case 'quadratic':
        return this.generateQuadraticSequence();
      case 'fibonacci':
        return this.generateFibonacciSequence();
      case 'polynomial':
        return this.generatePolynomialSequence();
      default:
        return this.generateArithmeticSequence();
    }
  }

  /**
   * 등차수열 생성
   * 예: 2, 4, 6, 8, [10], 12, 14
   */
  private static generateArithmeticSequence(): SequenceData {
    const firstTerm = Math.floor(Math.random() * 10) + 1; // 1~10
    const commonDiff = Math.floor(Math.random() * 5) + 1; // 1~5
    
    const numbers = [];
    for (let i = 0; i < 7; i++) {
      numbers.push(firstTerm + i * commonDiff);
    }
    
    const answer = numbers[4]; // 5번째 항
    
    return {
      numbers,
      answer,
      type: 'arithmetic',
      hint1: '이 수열은 등차수열입니다.',
      hint2: `각 항이 ${commonDiff}씩 증가합니다.`,
      explanation: `등차수열입니다. 첫째항이 ${firstTerm}이고 공차가 ${commonDiff}인 등차수열의 일반항은 a_n = ${firstTerm} + (n-1) × ${commonDiff} 입니다. 따라서 5번째 항은 ${answer}입니다.`
    };
  }

  /**
   * 등비수열 생성  
   * 예: 1, 2, 4, 8, [16], 32, 64
   */
  private static generateGeometricSequence(): SequenceData {
    const firstTerm = Math.floor(Math.random() * 3) + 1; // 1~3
    const commonRatio = Math.floor(Math.random() * 3) + 2; // 2~4
    
    const numbers = [];
    for (let i = 0; i < 7; i++) {
      numbers.push(firstTerm * Math.pow(commonRatio, i));
    }
    
    const answer = numbers[4];
    
    return {
      numbers,
      answer,
      type: 'geometric',
      hint1: '이 수열은 등비수열입니다.',
      hint2: `각 항에 ${commonRatio}를 곱하면 다음 항이 됩니다.`,
      explanation: `등비수열입니다. 첫째항이 ${firstTerm}이고 공비가 ${commonRatio}인 등비수열의 일반항은 a_n = ${firstTerm} × ${commonRatio}^(n-1) 입니다. 따라서 5번째 항은 ${answer}입니다.`
    };
  }

  /**
   * 제곱수열 생성
   * 예: 1, 4, 9, 16, [25], 36, 49
   */
  private static generateQuadraticSequence(): SequenceData {
    const numbers = [];
    for (let i = 1; i <= 7; i++) {
      numbers.push(i * i);
    }
    
    const answer = numbers[4]; // 5^2 = 25
    
    return {
      numbers,
      answer,
      type: 'quadratic',
      hint1: '각 항이 어떤 수의 제곱으로 이루어져 있습니다.',
      hint2: '1², 2², 3², 4², ...의 형태입니다.',
      explanation: `제곱수 수열입니다. n번째 항은 n²입니다. 따라서 5번째 항은 5² = ${answer}입니다.`
    };
  }

  /**
   * 피보나치형 수열 생성
   * 예: 1, 1, 2, 3, [5], 8, 13
   */
  private static generateFibonacciSequence(): SequenceData {
    const numbers = [1, 1];
    
    for (let i = 2; i < 7; i++) {
      numbers.push(numbers[i-1] + numbers[i-2]);
    }
    
    const answer = numbers[4];
    
    return {
      numbers,
      answer,
      type: 'fibonacci',
      hint1: '앞의 두 항을 더하면 다음 항이 됩니다.',
      hint2: '1+1=2, 1+2=3, 2+3=5... 이런 규칙입니다.',
      explanation: `피보나치 수열입니다. 앞의 두 항을 더해서 다음 항을 만듭니다. 3+2=${answer}이므로 5번째 항은 ${answer}입니다.`
    };
  }

  /**
   * 간단한 다항식 수열 생성
   * 예: 1, 3, 7, 15, [31], 63, 127 (2^n - 1)
   */
  private static generatePolynomialSequence(): SequenceData {
    const numbers = [];
    
    // 2^n - 1 형태의 수열
    for (let i = 1; i <= 7; i++) {
      numbers.push(Math.pow(2, i) - 1);
    }
    
    const answer = numbers[4]; // 2^5 - 1 = 31
    
    return {
      numbers,
      answer,
      type: 'polynomial',
      hint1: '각 항에 1을 더한 후 살펴보세요.',
      hint2: '2, 4, 8, 16... 2의 거듭제곱과 관련이 있습니다.',
      explanation: `이 수열은 2^n - 1 형태입니다. 각 항에 1을 더하면 2의 거듭제곱이 됩니다. 5번째 항은 2^5 - 1 = 32 - 1 = ${answer}입니다.`
    };
  }

  /**
   * 답안 검증
   */
  static checkAnswer(userAnswer: number, correctAnswer: number): boolean {
    return userAnswer === correctAnswer;
  }
}

// 사용 예시:
// const sequence = SequenceGenerator.generateRandomSequence();
// console.log(sequence.numbers); // [2, 4, 6, 8, 10, 12, 14]
// console.log(sequence.answer);  // 10