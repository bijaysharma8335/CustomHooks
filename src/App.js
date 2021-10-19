 import React from 'react';
 import { HashRouter,Route } from 'react-router-dom';
 import Comp from './1';
 import './App.css';
import Custom from './custom';
 import Header from './header';
import Joke from './joke';
 import LocalData from './localdata';
 import Process from './process';
import Stories from './stories';

 function App() {
   return (<HashRouter>
     <Header/>
     <Route path="/process" component={Process}/>
     <Route path="/1" component={Comp}/>
     <Route path="/localdata" component={LocalData}/>
     <Route path="/joke" component={Joke}/>
     <Route path="/stories" component={Stories}/>
     <Route path="/custom" component={Custom}/>
   
     </HashRouter>
   );
 }

 export default App;
