/*
 * 功能说明：类似于Bundle Loader，用于组件的懒加载
 * 使用方法：
 * let component = (props) => {
 *   return (
 *     <Bundle load={() => import('component file path')}>
 *       {(Comp) => <Comp {...props}/>}
 *     </Bundle>
 *   )
 * }
*/
import React from 'react';

export default class Bundle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            mod: null
        };
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            loading: true,
            mod: null
        });
        props.load()
            .then(mod => {
                this.setState({
                    loading: false,
                    mod: mod.default ? mod.default : mod
                });
            })
            .catch(err => {
                this.setState({
                    loading: false,
                });
            });
    }

    render() {
        let { loading, mod } = this.state;
        if(loading) {
            return <div>Loading...</div>
        }
        if(mod) {
            return this.props.children(mod);
        }
        return null;
    }
}
