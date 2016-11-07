import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'

const MentorCard = ({ loading, mentors }) => {
  return (
    <div>
      {mentors.map(mentor =>
        <Card key={mentor.id}>
          <CardHeader
            title={mentor.first_name + ' ' + mentor.last_name}
            subtitle={mentor.slack_handle}
            avatar="images/jsa-128.jpg"
          />
          <CardText>
            {mentor.about}
          </CardText>
        </Card>
      )}
    </div>
  )
}

export default MentorCard;
