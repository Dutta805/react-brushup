import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import LifeCycle from './LifeCycle/LifeCycle';
import LifeCycleFunction from './LifeCycleFunction/LifeCycleFunction';
import LazyLoadingComponent from './LazyLoadingComponent/LazyLoadingComponent';
import Counter from './Counter/Counter';
import Pagination from './Pagination/Pagination';
import Caching from './Caching/Caching';

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
                    <li>
                        <Link to="/Ques5" >Ques5</Link>
                    </li>
                    <li>
                        <Link to="/Ques6" >Ques6</Link>
                    </li>
                    <li>
                        <Link to="/Ques7" >Ques7</Link>
                    </li>
                </ul>
            </nav>
            <hr />

            <Routes>
                <Route exact path='/' Component={LifeCycle} />
                <Route exact path='/Ques2' Component={LifeCycleFunction} />
                <Route exact path='/Ques3' Component={LazyLoadingComponent} />
                <Route exact path='/Ques5' Component={Counter} />
                <Route exact path='/Ques6' Component={Pagination} />
                <Route exact path='/Ques7' Component={Caching} />
            </Routes>
        </div>
    </Router>
  )
}
