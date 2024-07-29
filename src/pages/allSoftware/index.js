import React from "react";
import { Card, Input, Row, Col, Image } from "antd";

import ListContainer from "./ListContainer";
import styled from "styled-components";
const { Search } = Input;
const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0px;
  }
`;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const AllSoftware = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: 20,
      backgroundColor: "#EAF0FF",
      width: "100%",
      paddingBottom: "2%",
    }}
  >
    <Card
      title="搜索查询"
      hoverable
      bordered={false}
      style={{
        width: 1200,
        marginTop: 20,
      }}
    >
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <ListContainer
        items={["MOBA", "FPS", "Art", "Text", "Fighting", "MMO"]}
      />
      <ListContainer
        items={["Sandbox", "Wuxia", "Open", "World", "Racing", "Puzzle"]}
      />
      <ListContainer
        items={[
          "Healing",
          "Sound",
          "Survival",
          "Shooting",
          "Adventure",
          "更多...",
        ]}
      />
    </Card>

    <Row style={{ width: 1200 }} gutter={16}>
      <Col span={6}>
        <StyledCard
          hoverable
          style={{
            width: 285,
            height: 300,
            padding: "16px",
            border: "1.5px solid #cdcdcd",
          }}
        >
          <Image
            width={50}
            height={50}
            src="error"
            fallback="data:image/png;base64,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"
          />
          <span style={{ marginLeft: "16px", fontSize: "16px" }}>名字</span>
          <p
            style={{
              fontSize: "12px",
              lineHeight: "24px",
              margin: "8px 0 4px 0",
            }}
          >
            版本号:1.0.0
          </p>
          <p
            style={{
              fontSize: "12px",
              lineHeight: "24px",
              margin: " 0 0 4px 0",
            }}
          >
            标签
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <Card
              style={{
                maxWidth: 250,
                padding: "2px",
                fontSize: 12,
                lineHeight: "18px",
                border: "1px solid #E1E1E1",
                borderRadius: "60px",
              }}
              hoverable
            >
              Indie Game
            </Card>
            <Card
              style={{
                maxWidth: 250,
                padding: "2px",
                fontSize: 12,
                lineHeight: "18px",
                borderRadius: "60px",
                border: "1px solid #E1E1E1",
              }}
              hoverable
            >
              Indie Game
            </Card>
            <Card
              style={{
                maxWidth: 250,
                padding: "2px",
                fontSize: 12,
                lineHeight: "18px",
                borderRadius: "60px",
                border: "1px solid #E1E1E1",
              }}
              hoverable
            >
              Indie Game
            </Card>
            <Card
              style={{
                maxWidth: 250,
                padding: "2px",
                fontSize: 12,
                lineHeight: "18px",
                borderRadius: "60px",
                border: "1px solid #E1E1E1",
              }}
              hoverable
            >
              Indie Game
            </Card>
            <Card
              style={{
                maxWidth: 250,
                padding: "2px",
                fontSize: 12,
                lineHeight: "18px",
                borderRadius: "60px",
                border: "1px solid #E1E1E1",
              }}
              hoverable
            >
              Indie Game
            </Card>
            <Card
              style={{
                maxWidth: 250,
                padding: "2px",
                fontSize: 12,
                lineHeight: "18px",
                borderRadius: "60px",
                border: "1px solid #E1E1E1",
              }}
              hoverable
            >
              Indie Game
            </Card>
          </div>
          <p style={{ margin: "8px 0 16px" }}>
            简述 如:轻松解压， 摸鱼神器； 多人在线， 紧张刺激， 超多福利
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span
              style={{
                width: "60px",
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
              >
                购买
              </button>
            </span>
            <span
              style={{
                fontSize: "12px",
                lineHeight: "1.6",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              获取报价➡
            </span>
          </div>
        </StyledCard>
      </Col>
      <Col span={6}>
        <Card hoverable>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    </Row>
    <Row style={{ width: 1200 }} gutter={16}>
      <Col span={6}>
        <Card hoverable>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    </Row>
    <Row style={{ width: 1200 }} gutter={16}>
      <Col span={6}>
        <Card hoverable>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    </Row>
  </div>
);
export default AllSoftware;
