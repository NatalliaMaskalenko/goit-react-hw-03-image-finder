import { Component } from 'react';

export default class Modal extends Component{
    componentDidMount() {
    
    }
    
    componentWillUnmount() {
        
    }

    render() {
        return (
            <div className="Overlay">
                <div className="Modal">
                    {/* <img src="" alt="" /> */}
                    {this.props.children}
                </div>
            </div>
        );
    }
} 