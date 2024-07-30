import React from "react";
import { Card, Col, Image } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0;
  }
`;

const IndividualSoftware = () => {
  const handleAddToCartClick = (e) => {
    e.stopPropagation(); //阻止冒泡
    console.log("Add to cart clicked");
  };
  const navigate = useNavigate();
  const handleCardClick = () => {
    // navigate("/subscription/IndividualSoftwareDetail");
    console.log(123);
  };
  return (
    <Col span={6}>
      <StyledCard
        hoverable
        style={{
          width: 285,

          padding: "16px",
          border: "1.5px solid #cdcdcd",
        }}
        onClick={handleCardClick}
      >
        <Image width={50} height={50} src="error" />
        <span style={{ marginLeft: "16px", fontSize: "16px" }}>
          名字
          <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
            (基础版)
          </span>
        </span>
        <p style={{ margin: "8px 0 16px" }}>
          简述 如: 轻松解压， 摸鱼神器； 多人在线， 紧张刺激， 超多福利
        </p>
        <div
          style={{
            marginBottom: "16px",
            fontSize: "16px",
            fontWeight: "bold ",
          }}
        >
          100.00 CNY/年
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span
            style={{
              width: "116px",
              height: "30px",
              borderRadius: "100px",
              backgroundColor: "#E5DFF4",
            }}
          >
            <button
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                color: "#633DB1",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
              onClick={handleAddToCartClick}
            >
              添加至购物车
            </button>
          </span>
        </div>
      </StyledCard>
    </Col>
  );
};

export default IndividualSoftware;
