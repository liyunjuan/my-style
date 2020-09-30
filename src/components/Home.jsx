import React from 'react';

export default class Home extends React.PureComponent {
  // constructor(props){
  //   super(props);
  // }

  render() {
    const { history } = this.props;
    return (
      <div>
        <a href='#/detail/3'>去detail页面</a>
        <p></p>
        <button onClick={
          // () => history.push('detail')
          () => history.push({
            pathname: 'detail',
            state: {
              id: 3
            }
          })
        }>go</button>
      </div>
    )
  }
}