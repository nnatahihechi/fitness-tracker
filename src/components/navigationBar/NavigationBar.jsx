import React, { useState } from "react";
import { NavigationWrapper } from "./style";
import { Col, Popover, Row } from "antd";
import Icon, { HomeFilled, PlusCircleFilled } from "@ant-design/icons";
import {
  Avatar,
  CheckList,
  Comment,
  Graph,
  Heart,
  WorkOutBike,
  WristWatch,
} from "../../assets/icons";
import { WorkOutList } from "../workoutList";
import { Link } from "react-router-dom";
export default function NavigationBar({ active }) {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <NavigationWrapper>
      <Row>
        <Col span={5}>
          <Link to="/">
            <HomeFilled
              style={{ color: active === "home" ? "#7B66FF" : "#9d9d9d" }}
            />
          </Link>
        </Col>
        <Col span={5}>
          <Link to="/history">
            <Icon
              component={Graph}
              style={{ color: active === "history" ? "#7B66FF" : "#9d9d9d" }}
            />
          </Link>
        </Col>
        <Col span={4} className="main-icon">
          <Popover
            content={
              <>
                <WorkOutList
                  icon={Heart}
                  showPlay={false}
                  text="Add blood pressure"
                />
                <Link to="/bmi">
                  <WorkOutList
                    icon={CheckList}
                    showPlay={false}
                    text="Add weight measurement"
                  />
                </Link>
                <WorkOutList
                  icon={WorkOutBike}
                  showPlay={false}
                  text="Add activity"
                />
                <WorkOutList
                  icon={WristWatch}
                  showPlay={false}
                  text="Track my workout"
                />
              </>
            }
            title="Title"
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
            overlayStyle={{ width: "343px" }}
          >
            <PlusCircleFilled style={{ color: "#7B66FF" }} />
          </Popover>
        </Col>
        <Col span={5}>
          <Icon component={Comment} style={{ color: "#9d9d9d" }} />
        </Col>
        <Col span={5}>
          <Icon component={Avatar} style={{ color: "#9d9d9d" }} />
        </Col>
      </Row>
    </NavigationWrapper>
  );
}
