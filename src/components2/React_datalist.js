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
                    <DataListCell key="secondary content">User Name</DataListCell>,
                    <DataListCell key="secondary content">Days until return</DataListCell>
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
                      <span id="single-action-item1">The Fault in our Stars</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Hsquare</DataListCell>,
                    <DataListCell key="secondary content">21</DataListCell>
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
                      <span id="single-action-item1">The Invisible Man</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Nsquare</DataListCell>,
                    <DataListCell key="secondary content">20</DataListCell>
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
                      <span id="single-action-item1">The House on Mango Street</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Nsquare</DataListCell>,
                    <DataListCell key="secondary content">19</DataListCell>
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
                      <span id="single-action-item1">Perk of being a Wallflower</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Psquare</DataListCell>,
                    <DataListCell key="secondary content">18</DataListCell>
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
                      <span id="single-action-item1">Prisoner B-3087</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Hsquare</DataListCell>,
                    <DataListCell key="secondary content">17</DataListCell>
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
                      <span id="single-action-item1">Refuge</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Hsquare</DataListCell>,
                    <DataListCell key="secondary content">16</DataListCell>
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
                      <span id="single-action-item1">The House on Mango Street</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Hsquare</DataListCell>,
                    <DataListCell key="secondary content">15</DataListCell>
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
                      <span id="single-action-item1">To Kill a Mockingbird</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Nsquare</DataListCell>,
                    <DataListCell key="secondary content">14</DataListCell>
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
                      <span id="single-action-item1">Perks of being a Wallflower</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Nsquare</DataListCell>,
                    <DataListCell key="secondary content">13</DataListCell>
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
                      <span id="single-action-item1">The Hunger Games</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Psquare</DataListCell>,
                    <DataListCell key="secondary content">11</DataListCell>
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
                      <span id="single-action-item1">The Invisible Man</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Hsquare</DataListCell>,
                    <DataListCell key="secondary content">10</DataListCell>
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
                      <span id="single-action-item1">The Fault in our Stars</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Psquare</DataListCell>,
                    <DataListCell key="secondary content">9</DataListCell>
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
                    <DataListCell key="secondary content">Nsquare</DataListCell>,
                    <DataListCell key="secondary content">8</DataListCell>
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
                      <span id="single-action-item1">Harry Potter</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Hsquare</DataListCell>,
                    <DataListCell key="secondary content">7</DataListCell>
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
                      <span id="single-action-item1">The Giver</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Psquare</DataListCell>,
                    <DataListCell key="secondary content">6</DataListCell>
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
                      <span id="single-action-item1">The Hunger Games</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Nsquare</DataListCell>,
                    <DataListCell key="secondary content">5</DataListCell>
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
                      <span id="single-action-item1">To Kill a Mockingbird</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Hsquare</DataListCell>,
                    <DataListCell key="secondary content">4</DataListCell>
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
                      <span id="single-action-item1">Prisoner B-3087</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Nsquare</DataListCell>,
                    <DataListCell key="secondary content">3</DataListCell>
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
                    <DataListCell key="secondary content">Hsquare</DataListCell>,
                    <DataListCell key="secondary content">2</DataListCell>
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
                      <span id="single-action-item1">Harry Potter</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Psquare</DataListCell>,
                    <DataListCell key="secondary content">1</DataListCell>
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
          
        </DataList>
      </React.Fragment>
    );
  }
}
export default React_datalist;
