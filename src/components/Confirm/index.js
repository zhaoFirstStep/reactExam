import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';




class ConfirmComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="alertOuter">
                <div className="alerContent">
                    <div className="title">提示</div>
                    <div className="content">{this.props.message}</div>
                    <div className="footer">
                        <div onClick={this.props.onCancle} className="button cancle">取消</div>
                        <div onClick={this.props.onSure} className="button sure">确认</div>
                    </div>
                </div>
            </div>
        )
    }
}

function Confirm(msg) {
    const confDiv = document.createElement('div');
    const classNameConf = 'confirm';
    confDiv.className = classNameConf;
    document.body.appendChild(confDiv);
    function delConf() {
        document.body.removeChild(confDiv);
    }
    return new Promise((resolve, reject) => {
        function onCancle() {
            delConf()
            resolve(false)
        }

        function onSure() {
            delConf()
            resolve(true)
        }
        ReactDOM.render(<ConfirmComponent onCancle={onCancle} onSure={onSure} message={msg} />, confDiv);
    })
}
export default Confirm;