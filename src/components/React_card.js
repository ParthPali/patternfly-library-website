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
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#0000FF"}}><b>Harry Potter</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Days until return: 15</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Author: J K Rowling</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#0000FF"}}><b>The Fault in our Stars</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>The Fault in Our Stars is a novel by John Green. It is his fourth solo novel, and sixth novel overall. It was published on January 12, 2012.</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Days until return: 10</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Author: John Green</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#0000FF"}}><b>Perks of Being a Wallflower</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>The Perks of Being a Wallflower is a young adult coming-of-age epistolary novel by American writer Stephen Chbosky, which was first published on February 1, 1999, by Pocket Books.</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Days until return: 21</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Author: Stephen Chbosky</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#0000FF"}}><b>The Hunger Games</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the voice of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic nation of Panem in North America. The Capitol, a highly advanced metropolis, exercises political control over the rest of the nation.</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Days until return: 4</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Author: Suzanne Collins</b></CardFooter>
        </Card>
        </GridItem>
        <GridItem span={4}>
        <Card style={{paddingBottom:16}} isHoverable>
            <CardHeader style={{paddingLeft:6, fontSize: 24, color: "#0000FF"}}><b>The Giver</b></CardHeader>
            <CardBody style={{paddingLeft:6,}}><b>The Giver is a 1993 American young adult dystopian novel by Lois Lowry. It is set in a society which at first appears to be utopian but is revealed to be dystopian as the story progresses. The novel follows a 12-year-old boy named Jonas.</b></CardBody>
            <CardBody style={{paddingLeft:6,}}><b>Days until return: 21</b></CardBody>
            <CardFooter style={{paddingLeft:6,}}><b>Author: Lois Lowry</b></CardFooter>
        </Card>
        </GridItem>
      </Grid >


    );
  }
}
export default React_card;
