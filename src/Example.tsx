import './Example.css';
import React, { useState } from 'react';

export type ExampleProps = {
  text?: string; // Use 'string' instead of 'String'
};

export function Example(props: ExampleProps) {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      type="button"
      id="example-button"
    >
      {`${props.text} ${count}`}
    </button>
  );
}
