interface Props {
  // (Optional) 제목
  title: string;
  // (Optional) 설명
  description: string;
}

/**
 * @author yourname
 * @description 테스트로 작성한 컴포넌트입니다.
 */
const TestComponent = (props: Props) => {
  const { title, description } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TestComponent;
