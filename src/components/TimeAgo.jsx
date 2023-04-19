import {parseISO, formatDistanceToNow, parse} from 'date-fns'
import React from 'react'

const TimeAgo = ({timestamp}) => {
  let timeAgo = ''
  if (timestamp){
    const d = new Date(timestamp)
    const ISOd = d.toISOString()
    const date = parseISO(ISOd) // we need parse the iso format date and then formatdistancetonow it
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }
  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo
