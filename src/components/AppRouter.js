import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import LifeCycle from './LifeCycle/LifeCycle';
import LifeCycleFunction from './LifeCycleFunction/LifeCycleFunction';
import LazyLoadingComponent from './LazyLoadingComponent/LazyLoadingComponent';

export default function AppRouter() {
  return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" >Ques1</Link>
                    </li>
                    <li>
                        <Link to="/Ques2" >Ques2</Link>
                    </li>
                    <li>
                        <Link to="/Ques3" >Ques3</Link>
                    </li>
                </ul>
            </nav>
            <hr />

            <Routes>
                <Route exact path='/' Component={LifeCycle} />
                <Route exact path='/Ques2' Component={LifeCycleFunction} />
                <Route exact path='/Ques3' Component={LazyLoadingComponent} />
            </Routes>
        </div>
    </Router>
  )
}
