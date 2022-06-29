interface AverageProps {
  average: number;
}

const Average = ({ average }: AverageProps) => {
  return <div>평균 가격 : {average.toLocaleString()}원</div>;
};

export default Average;
