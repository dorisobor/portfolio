import React, {Component}  from 'react';
// import TyperText from './TyperText'
import Header from './Header'


class Home extends Component {

    render() {
      return (

            <div className="home-wrapper">
<Header/>
             {/* <TyperText
        heading={'I love'}
        dataText={[
            'design.',
            'coding.',
            'tech'
            ]}
        /> */}
            </div>
          );
        }
      }

export default Home;
