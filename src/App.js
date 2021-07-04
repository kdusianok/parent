import React from 'react';
const Child = React.lazy(
  () => import('Child/App')
);

function App() {
  return (
    <div>
      <h1>
        Я главный проект
      </h1>

      <div
        style={{
          margin: '10px',
          padding: '10px',
          width: '60%',
          border:
            '4px solid black',
        }}>
        <React.Suspense fallback='Загрузка потомка'>
          <Child />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
