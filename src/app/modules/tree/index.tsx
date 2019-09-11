import React from 'react';
import './index.css';
import ListItem, { IListItemProps } from './components/list-item';
const data: ITreeData[] = require('./data.json');

export interface ITreeData {
    title: string;
    child: ITreeData[];
    value: number;
}


interface IState {
    data: ITreeData[];
}

export class Tree extends React.Component<any, IState> {

    state: IState = {
        data,
    }
    
    componentDidMount() {
        console.log(data);
    }

    onSliderChange = (props: IListItemProps, value: number) => {
        // console.log(props, value);
        value.toFixed(2);
        const { root } = props;
        if(!root || !root.length) return;
        const treeData: ITreeData[] = this.state.data;
        // treeData[props.root] = value;
        let current = treeData[root[0]];
        let parent;
        root.forEach((_r, _i) => {
            if(_i !== 0 ) {
                parent = current;
                current = current.child[_r];
            }
        })
        if(parent && (current.value > parent.value || current.value < 0)) {
            return;
        } 
        current.value = value;
        // if(parent) {
        //     let adjcentValues = parseFloat((parent.value - value).toFixed(2));
        //     adjcentValues = parseFloat((adjcentValues / (parent.child.length - 1)).toFixed(2))
        //     parent.child.forEach((child, index) => {
        //         if(index !== root[root.length-1]) {
        //             parent.child[index].value = adjcentValues;
        //             if(child.child) this.changeCurrentChildValue(child.child, child.value);
        //         }
                
        //     })
        // }
        if(!parent) this.handleRootTree(treeData, value, root);
        this.changeAdjucentChilds(parent, value, root)
        if(current.child) {
            this.changeCurrentChildValue(current.child, current.value);
        }
        // console.log(treeData, current, parent);
        setTimeout(() => {}, 600)
        this.setState({
            data: treeData,
        })
    }

    handleRootTree = (treeData, value, root) => {
        let adjcentValues = parseFloat((100 - value).toFixed(2));
        adjcentValues = parseFloat((adjcentValues / (treeData.length - 1)).toFixed(2));
        treeData.forEach((child, index) => {
            if(index !== root[root.length-1]) {
                child.value = adjcentValues;
                if(child.child) this.changeCurrentChildValue(child.child, child.value);
            }
            
        })
    }

    changeAdjucentChilds = (parent, value, root) => {
        if(parent) {
            let adjcentValues = parseFloat((parent.value - value).toFixed(2));
            adjcentValues = parseFloat((adjcentValues / (parent.child.length - 1)).toFixed(2))
            parent.child.forEach((child, index) => {
                if(index !== root[root.length-1]) {
                    parent.child[index].value = adjcentValues;
                    if(child.child) this.changeCurrentChildValue(child.child, child.value);
                }
                
            })
        }
    }

    changeCurrentChildValue= (tree, val) => {

        let total = 0;
        if(!tree) return;
        tree.forEach((t) => {
            total += t.value;
        });
        if(total > val) {
            let newVal = parseFloat((val / (tree.length)).toFixed(2));
            tree.forEach((t) => {
                t.value = newVal;
                this.changeCurrentChildValue(t.child, newVal);
            })
        }
    }

    

    createTree = (tree: ITreeData[]) => {
        const trData = [];
        // tree.forEach((item, index) => {
        //     if(item.child) {

        //     }
        // })
        this.loopTree(tree, trData, null, -1, []);
        console.log(trData);
        return trData;
    }

    loopTree = (tree: ITreeData[], trData: any[], parent: ITreeData | null, level: number, root: number[]) => {
        level++;
        tree.forEach((item, _index) => {
            let _root = Object.assign([], root);
            _root.push(_index);
            trData.push(
                <ListItem 
                    data={item}
                    onChange={this.onSliderChange}
                    level={level}
                    root={_root}
                    parent={parent}/>
            );
            if(item.child) {
                this.loopTree(item.child, trData, item, level, _root);
            }
        });
    }
    render() {
        return (
            <div className="Tree">
                <table>
                    <thead>
                        <tr>
                            <th className="_ic"/>
                            <th className="_ttl"/>
                            <th className="_val"/>
                            <th className="_bar"/>
                            <th className="_lock"/>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createTree(this.state.data)}
                    </tbody>
                </table>
            </div>
        );
        
    }
}