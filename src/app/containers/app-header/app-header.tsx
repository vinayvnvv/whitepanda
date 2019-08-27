import React from 'react';
import { Row, Col, Avatar, Icon, Badge } from 'antd';
import './app-header.css';

export const AppHeader: React.FC = () => (
    <div className="app-header">
        <Row type={'flex'} justify={'space-between'}>
            <Col className="_left">
                <div className="_logo">Logo</div>
            </Col>
            <Col className="_right">
                <div className="_item _notification">
                    <Badge count={8}>
                        <Icon type="bell" style={{fontSize: 21}}/>
                    </Badge>
                </div>
                <div className="_item">
                    <Avatar style={{backgroundColor: "#b1e67f"}}>AU</Avatar>
                </div>
            </Col>
        </Row>
    </div>
)