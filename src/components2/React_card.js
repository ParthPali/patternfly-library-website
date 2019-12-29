import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { Card, CardHead, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';
import logo from '../logo.svg';
class React_card extends React.Component{
  render(){
    return (
      <Grid gutter="md">
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#00FF00"}}><b>Prisoner B-3087</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Author: Alan Gratz</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Copies Available: 2</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Copies Issued: 18</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#00FF00"}}><b>Refuge</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Author: Alan Gratz</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Copies Available: 14</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Copies Issued: 6</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#00FF00"}}><b>The Hunger Games</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Author: Suzanne Collins</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Copies Available: 5</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Copies Issued: 15</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#00FF00"}}><b>Harry Potter</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Author: J K Rowling</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Copies Available: 0</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Copies Issued: 20</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#00FF00"}}><b>Percy Jackson</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Author: Rick Riordan</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Copies Available: 0</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Copies Issued: 20</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#00FF00"}}><b>To Kill a Mockingbird</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Author: Harper Lee</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Copies Available: 4</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Copies Issued: 16</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#00FF00"}}><b>The Invisible Man</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Author: Ralph Ellison</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Copies Available: 10</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Copies Issued: 10</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#00FF00"}}><b>The House on Mango Street</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Author: Sandra Cisneros</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Copies Available: 7</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Copies Issued: 13</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#00FF00"}}><b>The Fault in our Stars</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Author: John Green</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Copies Available: 10</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Copies Issued: 10</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#00FF00"}}><b>Perks of being a Wallflower</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Author: Stephen Chbosky</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Copies Available: 6</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Copies Issued: 14</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#00FF00"}}><b>The Giver</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Author: Lois Lowry</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Copies Available: 19</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Copies Issued: 1</b></CardFooter>
        </Card>
        </GridItem>
      </Grid >


    );
  }
}
export default React_card;
