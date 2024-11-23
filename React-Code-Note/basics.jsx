// * Basic  way to create a react hello world

import {createRoot} from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

root.render(<h1>Hello , React!</h1>)


//* Another Approach to create a react hello world in react 

import ReactDOM from 'react-dom/client'

createRoot(document.getElementById('root')).render(<h2>React is very Easy!</h2>)