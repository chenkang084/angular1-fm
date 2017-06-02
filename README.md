# redux 学习笔记

@(react)

##  一、redux 执行顺序
------------------------------
>redux 中 react 组件执行顺序：
1.执行mapStateToProps；
2.render方法；
3.componentDidMount方法。

tips：当props发生改变，会依次执行上述方法。

```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../actions/index.js';
import CellView from '../components/CellView.js';

class All extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIssuesIfNeeded('created', 10000));
  }
  render() {
    if (this.props.isFetching) {
      return null;
    }

    return (
      <div className="list">
        <CellView title="全部" items={this.props.items} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  const {
    isFetching,
    items
  } = state || {
    isFetching: true,
    items: []
  };

  return {
    isFetching,
    items
  }
}

export default connect(mapStateToProps)(All);
```

## 二、redux-thunk

redux-thunk 主要是针对异步action操作而设计的中间件。正常情况，dispatch 的参数是一个**Object** 对象，