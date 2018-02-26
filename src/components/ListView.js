import PropTypes from 'prop-types'
import React from 'react'

class ListView extends React.PureComponent {
  constructor(props) {
    console.log(props)
    super(props)
    Object.assign(this, props)
  }

  render() {
    return <div>
      {this.items.map(this.itemView)}
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