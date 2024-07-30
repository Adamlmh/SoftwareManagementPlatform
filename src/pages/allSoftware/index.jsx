import React, { useEffect, useState } from "react";
import { Card, Input, Row, Col, Pagination } from "antd";
import IndividualSoftware from "./IndividualSoftware";
import ListContainer from "./ListContainer";
import { allSoftwarePage } from "../../api";
import { useNavigate } from "react-router-dom";
const { Search } = Input;

const AllSoftware = () => {
  const navigate = useNavigate();
  const [allSoftwareData, setAllSoftwareData] = useState([]);
  const [searchTag, setSearchTag] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await allSoftwarePage({
        tags: searchTag ? searchTag : "",
      });
      console.log(response.data.data);
      setAllSoftwareData(response.data.data);
    };
    fetchData();
  }, [searchTag]);
  const onSearch = async (value, _e, info) => {
    const response = await allSoftwarePage({
      softwareName: value,
    });
    console.log(response.data.data);
    setAllSoftwareData(response.data.data);
  };
  const onChange = async (pageNumber) => {
    console.log("Page: ", pageNumber);
    const response = await allSoftwarePage({
      page: pageNumber,
    });
    console.log(response.data.data);
    setAllSoftwareData(response.data.data);
  };

  const handleClick = (key) => {
    console.log("Clicked Col key:", key);
    navigate(`/header/verifybill?softwareId=${key}`);
  };
  return (
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
          cursor: "default",
        }}
      >
        <Search
          placeholder="请输入你要查询的软件名称"
          onSearch={onSearch}
          enterButton
        />
        <ListContainer
          items={["1", "2", "3", "Text", "Fighting", "MMO"]}
          setSearchTag={setSearchTag}
        />
        <ListContainer
          items={["Sandbox", "Wuxia", "Open", "World", "Racing", "Puzzle"]}
          setSearchTag={setSearchTag}
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
          setSearchTag={setSearchTag}
        />
      </Card>
      <Row style={{ width: 1200 }} gutter={[8, 16]}>
        {allSoftwareData.map((software, index) => (
          <Col
            key={software.softwareId}
            span={6}
            onClick={() => handleClick(software.softwareId)}
          >
            <IndividualSoftware
              name={software.softwareName}
              version={software.version}
              tags={software.tags}
              description={software.description}
              imageUrl={software.softwareImage}
            />
          </Col>
        ))}
      </Row>
      <Pagination
        showQuickJumper
        defaultCurrent={1}
        total={500}
        onChange={onChange}
        defaultPageSize={12}
      />
    </div>
  );
};
export default AllSoftware;
