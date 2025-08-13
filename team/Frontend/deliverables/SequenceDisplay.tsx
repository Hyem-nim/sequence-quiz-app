// 수열 표시 컴포넌트
import React from 'react';

interface SequenceDisplayProps {
  numbers: number[];
  hiddenIndex?: number;
}

export const SequenceDisplay: React.FC<SequenceDisplayProps> = ({ 
  numbers, 
  hiddenIndex = 4 
}) => {
  return (
    <div className="sequence-container">
      <div className="sequence-grid">
        {numbers.map((number, index) => (
          <div
            key={index}
            className={`
              sequence-box
              ${index === hiddenIndex ? 'hidden-box' : 'number-box'}
              ${window.innerWidth <= 640 ? 'mobile' : 'desktop'}
            `}
          >
            {index === hiddenIndex ? '?' : number}
          </div>
        ))}
      </div>
    </div>
  );
};

// CSS-in-JS 스타일
const styles = `
.sequence-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.sequence-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
  max-width: 700px;
}

.sequence-box {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.number-box {
  background-color: #F3F4F6;
  border: 2px solid #D1D5DB;
  color: #1F2937;
  width: 80px;
  height: 80px;
  font-size: 24px;
}

.hidden-box {
  background-color: #FEF3C7;
  border: 2px dashed #F59E0B;
  color: #92400E;
  width: 80px;
  height: 80px;
  font-size: 32px;
}

.number-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 모바일 반응형 */
@media (max-width: 640px) {
  .sequence-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.75rem;
  }
  
  .sequence-box {
    width: 60px;
    height: 60px;
    font-size: 18px;
  }
  
  .hidden-box {
    font-size: 24px;
  }
}
`;

// 스타일 주입 (실제로는 CSS 파일이나 styled-components 사용)
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}