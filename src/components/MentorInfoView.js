import React from 'react'
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card'

const MentorInfoView = ({ first_name, image_url, slack_handle, last_name }) => (
  <Card>
    <CardHeader
      title={first_name + ' ' + last_name}
      subtitle={'@' + slack_handle}
      avatar={image_url}
    />
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>

    </CardText>
  </Card>
);

export default MentorInfoView
