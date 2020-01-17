import React from 'react';
import * as rtl from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import App from './App';
import PlayerList from './Components/PlayerList';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('gets players when component is mounted and displays them', async () => {
  const { container, getByTestid } = rtl.render(<App PlayerList={PlayerList}/>);
 
})

it('renders a element', () => {
  const wrapper = rtl.render(
    <App />
  )
  console.log(wrapper.debug())
})

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <h1 className="title">Women's World Cup - Players List</h1>
  )
})
