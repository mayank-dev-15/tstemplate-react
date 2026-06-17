import React,{useState} from 'react';import ReactDOM from 'react-dom/client';import Engine from './index';
const Root:React.FC=()=>{const[count,setCount]=useState(0);const e=new Engine();e.init();return(<div style={{fontFamily:'system-ui',padding:'2rem'}}><h1>tstemplate-react</h1><p>React TypeScript component library template with Vite, CSS modules, and Storybook</p><button onClick={()=>setCount(c=>c+1)}>Count:{count}</button></div>)};
ReactDOM.createRoot(document.getElementById('root')!).render(<Root/>);
