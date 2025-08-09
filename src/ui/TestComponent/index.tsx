// src/ui/TestComponent/index.tsx
import './TestComponent.scss';

interface Props {
  title: string;
  description: string;
}

const TestComponent = ({ title, description }: Props) => {
  return (
    <div className="Test">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TestComponent;
