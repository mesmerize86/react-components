import React, { useState } from "react";
import styled from "styled-components";

const Index = () => {
  const [isChecked, setChecked] = useState(false);
  const handlechange = (e) => {
    setChecked(!isChecked);
    console.log(isChecked);
  };

  return (
    <ToggleButton>
      <CheckBox
        type="checkbox"
        id="checkboxToggle_1"
        name="checkboxToggle"
        defaultChecked={isChecked}
        onChange={handlechange}
      />
      <Label for="checkboxToggle_1">
        <ToggleSwitch data-checked="Yes" data-unchecked="No" />
      </Label>
    </ToggleButton>
  );
};

export default Index;

const ToggleButton = styled.div`
  position: relative;
  width: 75px;
  height: 60px;
  box-sizing: border-box;
`;

const ToggleSwitch = styled.div`
  height: 32px;
  width: 100%;
  border-radius: 60px;
  background: #9e9e9e;
  transition: background-color 0.3s cubic-bezier(0.86, 0, 0.07, 1);
  box-sizing: border-box;
  color: #fff;
  position: relative;
  font-size: 14px;

  &:before,
  &:after {
    position: absolute;
    transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:before {
    content: attr(data-unchecked);
    top: 50%;
    right: 10%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  &:after {
    content: "";
    transform: translate3d(0, 0, 0);
    top: 3px;
    left: 3px;
    border-radius: 30px;
    width: 30px;
    height: 26px;
    z-index: 5;
    background-color: #fff;
  }
`;

const Label = styled.label`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
`;

const CheckBox = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;

  &:checked {
    ~ ${Label} {
      ${ToggleSwitch} {
        background-color: #158909;

        &:before {
          content: attr(data-checked);
          top: 50%;
          left: 25%;
          transform: translate(-37%, -50%);
          text-align: center;
        }

        &:after {
          transform: translate3d(38px, 0, 0);
        }
      }
    }
  }
`;
