import React from 'react'
import PropTypes from 'prop-types'
import { HistoryPagePreview } from '../../templates/history-page'

const HistoryPagePreview = ({ entry, widgetFor }) => (
  <HistoryPagePreview
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

HistoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HistoryPagePreview
