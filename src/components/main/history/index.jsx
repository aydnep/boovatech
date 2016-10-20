import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClose from 'material-ui/svg-icons/navigation/close';
// import classNames from 'classnames';

// import ContentRemove from 'material-ui/svg-icons/content/clear';
// import { browserHistory } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import BemyButton from '../button';
import styles from './main.scss';
// import animation from './animation.css';

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.deleteList = this.deleteList.bind(props);
    this.setComplete = this.setComplete.bind(props);
    this.selectList = this.selectList.bind(props);
  }

  setComplete() {
    this.actions.completeList(this.shopping);
  }

  deleteList() {
    this.actions.deleteList(this.shopping.id);
  }

  selectList() {
    // console.log(this.shopping.id);
    this.actions.selectList(this.shopping.id);
  }

  render() {
    // console.log(this.props.complete);
    const { shopping } = this.props;
    let classes = shopping.complete ? styles.complete : '';
    classes += this.props.active && this.props.active.id === shopping.id ? styles.active : '';
    return (
      <div className={classes} onClick={this.selectList}>
        <input type="checkbox" checked={shopping.complete} onChange={this.setComplete} />
        <span>{shopping.date}</span>
        <button onClick={this.deleteList}>
          <ContentClose style={{ fill: 'rgba(255, 0, 0, .5)' }} />
        </button>
      </div>
    );
  }
}

const History = props => {
  console.log(props);
  // const date = new Date();
  // console.log(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`);
  const { history } = props;
  return (
    <section className={styles.history}>
      <nav>
        <FloatingActionButton
          mini
          onClick={() => console.log('click')}
          disabled={!props.user}
        >
          <ContentAdd />
        </FloatingActionButton>
      </nav>
      <section>
        {history.length > 0 ?
          history.map(shoppingList => <Shopping key={shoppingList.id} shopping={shoppingList} actions={props.actions} active={props.active} />)
           : null}
      </section>
    </section>
  );
};

History.displayName = 'History';

// Uncomment properties you need
// GoFEx.propTypes = {
//   facebook: React.PropTypes.object.isRequired,
//   invitation: React.PropTypes.object.isRequired,
// };
// InvitationComponent.defaultProps = {};

export default History;

