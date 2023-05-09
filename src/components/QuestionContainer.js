import React, { useEffect, useState } from "react";
import { Text, Radio, Badge, Card } from "@nextui-org/react";

const CorrectAnswer = (props) => {
  if (props.show !== "") {
    return (
      <Badge color="success" disableOutline content="Correct" size="xs">
        <Card css={{ padding: 20 }}>
          <Text css={{ marginBottom: 15 }}>That is Correct. Good job!</Text>
          <Text>{props.feedback}</Text>
        </Card>
      </Badge>
    );
  } else {
    return <Text> </Text>;
  }
};

const IncorrectAnswer = (props) => {
  if (props.show !== "") {
    return (
      <Badge color="error" disableOutline content="Correct" size="xs">
        <Card css={{ padding: 20 }}>
          <Text css={{ marginBottom: 15 }}>
            Unfortunately, that is incorrect.
          </Text>
          <Text>The correct answer was: {props.feedback}</Text>
        </Card>
      </Badge>
    );
  } else {
    return <Text> </Text>;
  }
};

const QuestionContainer = (props) => {
  const [selected, setSelected] = useState("");

  useEffect(()=> {
    setSelected("")
  }, [props.question])

  return (
    <>
      <Text css={{ color: "#fff" }}>{props.question}</Text>
      <Radio.Group
        key={props.question}
        label="Answers"
        color="success"
        value={selected}
        onChange={setSelected}
        validationState={
          [props.correct].includes(selected) ? "valid" : "invalid"
        }
        css={{ marginBottom: 15 }}
      >
        <Radio value="A" size="sm">
          <span style={{ color: "#fff" }}>{props.A}</span>
        </Radio>
        <Radio value="B" size="sm">
          <span style={{ color: "#fff" }}>{props.B}</span>
        </Radio>
        <Radio value="C" size="sm">
          <span style={{ color: "#fff" }}>{props.C}</span>
        </Radio>
        <Radio value="D" size="sm">
          <span style={{ color: "#fff" }}>{props.D}</span>
        </Radio>
      </Radio.Group>
      {selected === props.correct ? (
        <CorrectAnswer show={selected} feedback={props.feedback} />
      ) : (
        <IncorrectAnswer show={selected} feedback={props.feedback} />
      )}
    </>
  );
};

export default QuestionContainer;
