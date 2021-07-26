import React, {Fragment} from 'react';
import Header from './Header';
import Content from './Content'

export default function() {
    return (
        // <Fragment>
        //     <Header name='App03' height='10' />
        //     <Content />
        // </Fragment>
        React.createElement(
            Fragment, 
            null,
            React.createElement(Header, null, null),
            React.createElement(Content, null, null) 
            )
        
    );
    /**
      createElement(
          Fragment,
          null,
          createElement(Header, {name: 'Application03', height='10'}, null),
          createElement(Content, null, null)
      );
     */
}