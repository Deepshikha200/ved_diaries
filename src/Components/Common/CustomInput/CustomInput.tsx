import { Form } from "react-bootstrap";
import "./CustomInput.scss";
import { useState } from "react";
const CustomInput = (props: any) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Form.Group className={`customInput ${props.className}`}>
        <Form.Label htmlFor={props.id} className={props.classLabel}>
          {props.label} {props.sub && <sup>*</sup>}
        </Form.Label>
        <Form.Control
          type={props.type === "password" && active ? "text" : props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          autoComplete="off"
          name={props.name}
          id={props.id}
          value={props.value}
        />
      </Form.Group>
    </>
  );
};

export default CustomInput;
