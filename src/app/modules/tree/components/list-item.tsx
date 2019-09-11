import React from 'react';
import { ITreeData } from '../index';
import { Icon, Slider } from 'antd';
export interface IListItemProps {
    data: ITreeData;
    parent: ITreeData | null;
    level: number;
    onChange: any;
    root: number[];
}
const ListItem: React.FC<IListItemProps> = (props: IListItemProps) => {
    console.log(props);
    const { data, level } = props;
    const onChange = (v) => {
        props.onChange(props, v);
    }
    return (
        <tr>
            <td className="_ic" style={{paddingLeft: 31 * level}}>
                <Icon type="down-circle" />
            </td>
            <td className="_ttl" style={{textAlign: 'right'}}>{data.title}</td>
            <td className="_val" style={{textAlign: 'right'}}>{data.value}%</td>
            <td className="_bar" style={{textAlign: 'center'}}>
                <Slider 
                    max={props.parent ? props.parent.value : 100}
                    step={0.01} 
                    value={data.value}
                    onChange={onChange}  />
            </td>
            <td className="_lock" style={{textAlign: 'right'}}>
                <Icon type="unlock" />
            </td>
        </tr>
    );
}
export default ListItem;