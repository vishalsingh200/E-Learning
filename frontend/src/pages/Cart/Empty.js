import React, { useState } from "react";
import { ReactComponent as EmptyS } from "./Empty.svg";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import {BsArrowBarRight} from "react-icons/bs"
import { Result, Button } from "antd";

const Empty = () => {
  return (
    <Result
      status="404"
      subTitle="Your cart is empty"
      extra={
        <Link to="/">
          <Button type="primary">Go SHOP</Button>
        </Link>
      }
    />
  );
};

export default Empty;
