import React from 'react';
import './job-item.css';
import { IjobData } from '..';
import { Col, Row, Button, Icon } from 'antd';
interface IProps {
    data: IjobData;
    view: string;
}
export const JobItem: React.FC<IProps> = (props: IProps) => {
    const { data } = props;
    return (
        <div className=
                {
                    "JobItem" + 
                    (data.status === 'Revision Requested' ? ' st-req ' : '') + 
                    (data.status === 'Editional Review' ? ' st-rev ' : '') +
                    (data.status === 'Diedline Missed' ? ' st-mis ' : '') + 
                    (props.view === 'card' ? ' card-view ' : '')
                }
            >
            <div className="_inner">
                <Row type="flex" align={'middle'} className="_inner-row">
                    <Col xs={24} sm={13} className="_left">
                        <div className="_left-row">
                            <div className="_details">
                                <div className="_title">{data.title}</div>
                                <div className="_tags">
                                    <span>{data.category}</span>
                                    <span>|</span>
                                    <span>{data.industry}</span>
                                    <span>|</span>
                                    <span>{data.words} words</span>
                                </div>
                            </div>
                            <div className="_price">$ {data.price}</div>
                        </div>
                    </Col>
                    <Col xs={24} sm={11} className="_right">
                        <div>
                            <div className="_status">
                                <span>{data.status}</span>
                            </div>
                            <div className="_time">
                             {data.timestamp !== "" ? (
                                <span className="_t"><Icon type="clock-circle" />{data.timestamp}</span>
                             ) : (
                                <span className="_s"><Icon type="star" />4</span>
                             )}
                            </div>
                            <div className="_actn">
                                {data.status === 'Revision Requested' ? (
                                    <Button type="primary" className="btn">Revise</Button>
                                ) : (
                                    <Button className="btn outline">View</Button>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}