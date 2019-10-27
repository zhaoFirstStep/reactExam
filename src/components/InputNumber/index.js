import React, { Component} from 'react';
import PropTypes from 'prop-types'
import Confirm from '../Confirm';

const propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func
}
const defaultProps = {
    onChange: () => {}
}
class InputNumber extends Component {
     constructor(props){
         super(props)
         this.state = {
			innerValue: ''
		}
     }
     static propTypes = propTypes

     static defaultProps = defaultProps

     get isControl(){
		return 'value' in this.props
     }

     get value() {
		if(this.isControl){
			return this.props.value
		} else {
			return this.state.innerValue
		}
	}
    async componentDidMount() {
        let res = await Confirm("确定删除吗");
        if (res) {
            console.log("是")
          } else {
            console.log("否")
          }
		this.setState({
			innerValue: this.props.defaultValue
		})
	}
     render(){
         return (
            <input 
            type="number"
            value={this.value}
            onChange={(e) => {
                if(!this.isControl){
                    this.setState({
                        innerValue: e.target.value
                    })
                }
                this.props.onChange(e)
            }}
            />
         )
     }
}
export default InputNumber;