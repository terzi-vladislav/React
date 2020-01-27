import React, {Component} from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call to get new data from the server
        }
    }

    componentWillUnmount() {
        console.log('Count - Unmount');
    }

    render() {
        console.log('Counter - Rendered');

        const { children, onIncrement, onDelete, counter} = this.props;
        return (
            <div>
                {children}
                <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
                <button
                    onClick={() => onIncrement(counter) }
                    className="btn-secondary btn-sm"> Increment
                </button>
                <button
                    onClick={ () => onDelete(counter.id) }
                    className="btn btn-danger btn-sm m-2"> Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value !== 0) ? "primary" : "warning";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;