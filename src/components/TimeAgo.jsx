import {parseISO, formatDistanceToNow} from 'date-fns'
import React from 'react'

const TimeAgo = ({timestamp}) => {
  let timeAgo = ''
  if (timestamp){
    // console.log(timestamp.toISOString())
    console.log(timestamp)
    const isoString = timestamp.toISOString()
    console.log(isoString)
    const date = parseISO(timestamp) // we need parse the iso format date and then formatdistancetonow it
    console.log(date)
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
