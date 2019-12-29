import React from 'react';
import brandImg from '../favbook.png';
import { AboutModal, Button } from '@patternfly/react-core';

class React_modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.handleModalToggle}>
          Your Most Issued Book
        </Button>
        <AboutModal
          width={'50%'}
          isOpen={isModalOpen}
          backgroundImageSrc={brandImg}
          onClose={this.handleModalToggle}
          actions={[
            <Button key="confirm" variant="primary" onClick={this.handleModalToggle}>
              Confirm
            </Button>,
            <Button key="cancel" variant="link" onClick={this.handleModalToggle}>
              Cancel
            </Button>
          ]}
          isFooterLeftAligned
        >

        Suzanne Collins is the author of the groundbreaking Hunger Games trilogy for young adults: The Hunger Games, Catching Fire, and Mockingjay. She is also the author of the picture book Year of the Jungle, a Publishers Weekly Best Book of the Year, and the New York Times bestselling Underland Chronicles series for middle-grade readers, which started with Gregor the Overlander. Suzanne lives with her family in Connecticut. You can find her online at suzannecollinsbooks.com.

        </AboutModal>
      </React.Fragment>
    );
  }
}
export default React_modal;
