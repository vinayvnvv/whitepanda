import React from 'react';
import './index.css';
import { JobItem } from './components/job-item';
import { Filter } from './components/filter';
import { Button, Radio, Icon, Pagination, Skeleton } from 'antd';
const ButtonGroup = Button.Group;
const jobData = require('./jobs.json');
const underscore = require('underscore');
export interface IjobData {
    title: string;
    category: string;
    industry: string;
    words: string;
    price: string;
    status: string;
    timestamp: string;
}
interface IState {
    jobs: IjobData[];
    view: 'card' | 'list',
    init: boolean;
}

export class Jobs extends React.Component<any, IState> {
    state: IState = {
        jobs: jobData,
        view: 'list',
        init: false,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({init: true});
        }, 2000);
    }
    onFilterChange = (change, all) => {
        Object.keys(all).forEach(key => all[key] === undefined ? delete all[key] : '');
        console.log(all);
        const f = underscore.where(jobData, all);
        this.setState({
            jobs: f,
        })
    }
    onViewChange = (e) => {
        this.setState({view: e.target.value});
    }
    render() {
        return (
            <div className="Jobs slide-up">
                <div className="_header">Your Jobs</div>
                <div className="_view hide-mobile-strict">
                    <span>View:</span>
                    <Radio.Group 
                        size={'small'}
                        defaultValue={this.state.view} 
                        buttonStyle="solid" 
                        onChange={this.onViewChange}>
                        <Radio.Button value="list"><Icon type="align-left"/></Radio.Button>
                        <Radio.Button value="card"><Icon type="appstore"/></Radio.Button>
                    </Radio.Group>
                </div>
                <Filter onChange={this.onFilterChange}/>
                {this.state.init && (
                    <div>
                        <div className={"lists " + (this.state.view === 'list' ? 'list' : 'card')}>
                            {this.state.jobs.map((item, index) =>
                                <JobItem 
                                    key={"" + index}
                                    view={this.state.view} 
                                    data={item}/>
                            )}
                        </div>
                        <div className="_page">
                            <Pagination defaultCurrent={6} total={500} />
                        </div>
                    </div>
                )}

                {!this.state.init && (
                    <Skeleton active />
                )}
                
                
                
                
            </div>
        );
    }

}