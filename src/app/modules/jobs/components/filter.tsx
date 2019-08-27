import React from 'react';
import './filter.css';
import { Row, Col, Form, Select, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
const Option = Select.Option;

const cats = ["e-book", "i-book"];
const indu = ["Travel and Tourism", "World Tour"];
const status = ["Revision Requested", "Editional Review", 'Completed', "Diedline Missed"];
interface IProps extends FormComponentProps {
    onChange: any;
}

const FilterComponent: React.FC<IProps> = (props: IProps) => {
    const { getFieldDecorator, resetFields } = props.form;
    return (
        <Form className="Filter">
            <Row gutter={12}>
                <Col sm={16}>
                    <Row gutter={12}>
                        <Col sm={6}>
                            {getFieldDecorator("category", {
                                
                            })(
                                <Select placeholder="Category">
                                    {cats.map((cat, index) =>
                                        <Option key={index+""} value={cat}>{cat}</Option>
                                    )}
                                </Select>
                            )}
                        </Col>
                        <Col sm={6}>
                            {getFieldDecorator("industry", {
                                
                            })(
                                <Select placeholder="Industry">
                                    {indu.map((indu, index) =>
                                        <Option key={index+""} value={indu}>{indu}</Option>
                                    )}
                                </Select>
                            )}
                        </Col>
                        <Col sm={6}>
                            {getFieldDecorator("status", {
                                
                            })(
                                <Select placeholder="Status">
                                    {status.map((st, index) =>
                                        <Option key={index+""} value={st}>{st}</Option>
                                    )}
                                </Select>
                            )}
                        </Col>
                        <Col sm={6}>
                            <Button 
                                onClick={() => {
                                        resetFields();
                                        props.onChange({}, {});
                                    }
                                } 
                                type="link">Clear</Button>
                        </Col>
                    </Row>
                </Col>
                <Col sm={8}>
                    <Row gutter={12} type={'flex'} align={'middle'}>
                        <Col xs={24} sm={12} className="text-right">Showing 1-8 of 56 jobs</Col>
                        <Col xs={24} sm={12}>
                            {getFieldDecorator("time", {
                                
                            })(
                                <Select placeholder="Least time left first">
                                    <Option value={'Least time left first'}>Least time left first</Option>
                                </Select>
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    );
}

export const Filter = Form.create({
    onValuesChange: (props: IProps, change, all) => {
        props.onChange(change, all);
    },
})(FilterComponent);