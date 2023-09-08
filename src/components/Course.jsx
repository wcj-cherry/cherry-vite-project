import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";

const Course = ({ course }) => {
  return (
    <Card className="font-weight-700 " color="info">
      <CardBody>
        <CardSubtitle className="m-4, font-weight-700">
          {course.title}
        </CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button className="m-4">Edit</Button>
          <Button>Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
