import PropTypes from 'prop-types'
import React from 'react'

class ListView extends React.PureComponent {
  render() {
    return <div>
      {this.props.items.map(this.props.itemView)}
    </div>
  }
}

ListView.propTypes = {
  // TODO bound all items to same type
  items: PropTypes.array,
  itemView: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  emptyView: PropTypes.element,
  loadingView: PropTypes.element
}

ListView.defaultProps = {
  items: []
}

export default ListView