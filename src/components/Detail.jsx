import React from 'react';

export default class Detail extends React.PureComponent {
  // constructor(props){
  //   super(props);
  // }

  componentDidMount() {
    // 路由拼接传参
    // const { params } = this.props.match;
    // console.log('李--params',params)
    // 函数传参
    const { history } = this.props;
    console.log('李--history', history)
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <a href='#/'>去Home页面</a>
        <p></p>
        <button onClick={() => history.push('/')}>go</button>
      </div>
    )
  }
}