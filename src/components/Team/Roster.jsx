import React, { Component } from 'react';
import "../../utility/fonts.css";
import "../../index.css";
import { StaticH1 } from "../../utility/ContentStyles.js";
import ReactTable from "react-table";
import "react-table/react-table.css";
import styled from 'styled-components';
import { rosterFetch } from './RosterFetch';

const TableDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto
`;

class Roster extends Component {
    constructor(props){
        super(props);
        this.getRoster = this.getRoster.bind(this);
        this.createPerson = this.createPerson.bind(this);
        this.constructRoster = this.constructRoster.bind(this);
        this.state = {
            data: null
        };
    }
    componentDidMount() {
        this.getRoster();
    }
    createPerson(row){
        return {
            name: row.values[0].effectiveValue.stringValue,
            team: row.values[1].effectiveValue.stringValue,
        };
    }
    constructRoster(rowData){
        const people = [];
        for (const row of rowData){
            if ( row.values[0].length == 0 || !row.values[0].userEnteredValue) break;
            people.push(this.createPerson(row));
        }
        return people;
    }
    getRoster(){
        rosterFetch()
            .then(res => {
                const people = this.constructRoster(res.json.sheets[0].data[0].rowData.slice(1));
                this.setState({
                    data: people
                });
            })
            .catch(res => {
                console.log(res.error);
            });
    }
    render() {
        return ( !this.state.data ? null :
            <React.Fragment>
                <StaticH1>
            Our Core Team
                </StaticH1>
                <TableDiv>
                    <ReactTable
                        data={this.state.data}
                        columns={[
                            {
                                Header: "Name",
                                accessor: "name"
                            },
                            {
                                Header: "Core Team",
                                accessor: "team"
                            }
                        ]}
                        defaultPageSize={60}
                        style={{
                            height: "400px", // This will force the table body to overflow and scroll, since there is not enough room
                            width: "500px",
                        }}
                        className = "-striped -highlight"
                    />
                </TableDiv>
          
            </React.Fragment>
        );
    }
}

export default Roster;
