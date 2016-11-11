import React from 'react';
import FeedItem from './feeditem';
import StatusUpdateEntry from './statusupdateentry';
import {getFeedData, postStatusUpdate} from '../server';

export default class Feed extends React.Component {
  constructor(props) {
    // super() calls the parent class constructor --
    // e.g. React.Component's constructor.
    super(props);
    this.state = {
      // Empty feed.
      contents: []
    };
  }
  componentDidMount() {
    this.refresh();
  }
  refresh() {
    getFeedData(this.props.user, (feedData) => {
      this.setState(feedData);
    });
  }

  onPost(postContents) {
    //Send to server
    postStatusUpdate(4, "Amherst, MA", postContents, () => {
      // Refresh the feed
      this.refresh();
    });
  }
  render() {
    return (
      <div>
        <StatusUpdateEntry onPost={(postContents) => this.onPost(postContents)} />
        {this.state.contents.map((feedItem) => {
          return (
            <FeedItem key={feedItem._id} data={feedItem} />
          )
        })}
      </div>
    )
  }
}
