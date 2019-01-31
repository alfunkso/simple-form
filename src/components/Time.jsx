import React from 'react';
import _ from 'lodash';

class Time extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: _.now(),
    };

    this.updateTime = this.updateTime.bind(this);
  }

  componentDidMount() {
    this.updateTime();
  }

  updateTime() {
    this.setState({ time: _.now() });
    setTimeout(this.updateTime, 500);
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <div>Lodash says: </div>
        <div>{ time }</div>
      </div>
    );
  }
}

export default Time;
