import React from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';

const elements = [
  {
    id: '1',
    type: 'default',
    position: { x: 100, y: 100 },
    data: { label: 'A default node' },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 200, y: 200 },
    data: { label: 'Another default node' },
  },
  { id: 'e1-2', source: '1', target: '2', animated: true },
];

const MinimalComponent = () => {
  return (
    <div style={{ height: '600px', width: '100%' }}>
      <ReactFlow elements={elements} />
      <MiniMap />
      <Controls />
      <Background />
    </div>
  );
};

export default MinimalComponent;
