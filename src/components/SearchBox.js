import React from "react";
import { Card, Text, Input, Button } from "@nextui-org/react";

const SearchBox = () => {
  return (
    <Card
      variant="bordered"
      css={{ backgroundColor: "#16181A", marginTop: 50, opacity: 0.9 }}
    >
      <Card.Body>
        <Text color="#fff" size={24} css={{marginTop: 3}}>
          Find your Video
        </Text>
        <Input
          labelPlaceholder="Search Box"
          status="success"
          css={{ marginTop: 30 }}
        />
        <Button color="success" auto css={{ marginTop: 20 }}>
          Search
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SearchBox;
