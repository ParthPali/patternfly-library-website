import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  KebabToggle,
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListCheck,
  DataListItemCells,
  DataListAction
} from '@patternfly/react-core';

class React_datalist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, isDeleted: false };

    this.onToggle = isOpen => {
      this.setState({ isOpen });
    };

    this.onSelect = event => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    };
  }

  render() {
    return (
      <React.Fragment>
        <DataList aria-label="single action data list example ">
          {(
            <DataListItem aria-labelledby="single-action-item1">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell key="primary content">
                      <span id="single-action-item1" >Book Name</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Author Name</DataListCell>
                  ]}
                />
                <DataListAction
                  aria-labelledby="single-action-item1 single-action-action1"
                  id="single-action-action1"
                  aria-label="Actions"
                >
                </DataListAction>
              </DataListItemRow>
            </DataListItem>
          )}
          {!this.state.isDeleted1 && (
            <DataListItem aria-labelledby="single-action-item1">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell key="primary content">
                      <span id="single-action-item1">Percy Jackson</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Rick Riordan</DataListCell>
                  ]}
                />
                <DataListAction
                  aria-labelledby="single-action-item1 single-action-action1"
                  id="single-action-action1"
                  aria-label="Actions"
                >
                  <Button
                    onClick={() => {
                      this.setState({ isDeleted1: true });
                    }}
                    variant="primary"
                    key="delete-action"
                  >
                    Add to cart
                  </Button>
                </DataListAction>
              </DataListItemRow>
            </DataListItem>
          )}
          {!this.state.isDeleted2 && (
            <DataListItem aria-labelledby="single-action-item1">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell key="primary content">
                      <span id="single-action-item1">Refuge</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Alex Gratz</DataListCell>
                  ]}
                />
                <DataListAction
                  aria-labelledby="single-action-item1 single-action-action1"
                  id="single-action-action1"
                  aria-label="Actions"
                >
                  <Button
                    onClick={() => {
                      this.setState({ isDeleted2: true });
                    }}
                    variant="primary"
                    key="delete-action"
                  >
                    Add to cart
                  </Button>
                </DataListAction>
              </DataListItemRow>
            </DataListItem>
          )}
          {!this.state.isDeleted3 && (
            <DataListItem aria-labelledby="single-action-item1">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell key="primary content">
                      <span id="single-action-item1">To Kill a Mockingbird</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Harper Lee</DataListCell>
                  ]}
                />
                <DataListAction
                  aria-labelledby="single-action-item1 single-action-action1"
                  id="single-action-action1"
                  aria-label="Actions"
                >
                  <Button
                    onClick={() => {
                      this.setState({ isDeleted3: true });
                    }}
                    variant="primary"
                    key="delete-action"
                  >
                    Add to cart
                  </Button>
                </DataListAction>
              </DataListItemRow>
            </DataListItem>
          )}
          {!this.state.isDeleted4 && (
            <DataListItem aria-labelledby="single-action-item1">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell key="primary content">
                      <span id="single-action-item1">The Invisible Man</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Ralph Ellison</DataListCell>
                  ]}
                />
                <DataListAction
                  aria-labelledby="single-action-item1 single-action-action1"
                  id="single-action-action1"
                  aria-label="Actions"
                >
                  <Button
                    onClick={() => {
                      this.setState({ isDeleted4: true });
                    }}
                    variant="primary"
                    key="delete-action"
                  >
                    Add to cart
                  </Button>
                </DataListAction>
              </DataListItemRow>
            </DataListItem>
          )}
          {!this.state.isDeleted5 && (
            <DataListItem aria-labelledby="single-action-item1">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell key="primary content">
                      <span id="single-action-item1">The house on Mango Street</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Sandra Cisneros</DataListCell>
                  ]}
                />
                <DataListAction
                  aria-labelledby="single-action-item1 single-action-action1"
                  id="single-action-action1"
                  aria-label="Actions"
                >
                  <Button
                    onClick={() => {
                      this.setState({ isDeleted5: true });
                    }}
                    variant="primary"
                    key="delete-action"
                  >
                    Add to cart
                  </Button>
                </DataListAction>
              </DataListItemRow>
            </DataListItem>
          )}
          {!this.state.isDeleted6 && (
            <DataListItem aria-labelledby="single-action-item1">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell key="primary content">
                      <span id="single-action-item1">Prisoner B3087</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Alan Gratz</DataListCell>
                  ]}
                />
                <DataListAction
                  aria-labelledby="single-action-item1 single-action-action1"
                  id="single-action-action1"
                  aria-label="Actions"
                >
                  <Button
                    onClick={() => {
                      this.setState({ isDeleted6: true });
                    }}
                    variant="primary"
                    key="delete-action"
                  >
                    Add to cart
                  </Button>
                </DataListAction>
              </DataListItemRow>
            </DataListItem>
          )}
        </DataList>
      </React.Fragment>
    );
  }
}
export default React_datalist;
