import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'

const MentorInfoView = ({ first_name, image_url, slack_handle, last_name, bio }) => (
  <Card>
    <CardHeader
      title={first_name + ' ' + last_name}
      subtitle={'@' + slack_handle}
      avatar={image_url}
    />
    <CardText>
      {bio}
    </CardText>
  </Card>
);

export default MentorInfoView
