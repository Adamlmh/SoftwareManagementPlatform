import { Row, Pagination, Drawer, Image } from "antd";
import { useEffect, useState } from "react";
import IndividualSoftware from "./IndividualSoftware";
import { CloseOutlined } from "@ant-design/icons";
import { subscribeSoftwarePage } from "../../api/index";
import { useOutletContext } from "react-router-dom";
const Subscription = () => {
  const { shoppingOrder, setShoppingOrder, amount, setAmount } =
    useOutletContext();
  const onChange = async (pageNumber) => {
    const response = await subscribeSoftwarePage({ page: pageNumber });
    console.log(response.data.data);
    setAllSoftwareData(response.data.data);
  };
  console.log(amount);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [allSoftwareData, setAllSoftwareData] = useState([]);

  // useEffect(async () => {
  //   const response = await subscribeSoftwarePage();
  //   console.log(response.data.data);
  //   setAllSoftwareData(response.data.data);
  // }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#EAF0FF",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "1220px",
          height: "52px",
          lineHeight: "32px",
          fontSize: "32px",
          color: "#1E0E62",
          fontWeight: "bold",
          margin: "50px 0 35px 0",
        }}
      >
        订阅与购买
      </div>
      <Row style={{ width: 1220 }} gutter={[8, 16]}>
        <IndividualSoftware />
        <IndividualSoftware />
        <IndividualSoftware />
        <IndividualSoftware />
        <IndividualSoftware />
        {/* {allSoftwareData.map((item, index) => {
          return (
            <IndividualSoftware
              key={index}
              {...item}
              onClick={() => {
                setShoppingOrder([...shoppingOrder, item]);
                setAmount(amount + item.price);
              }}
            />
          );
        })} */}
      </Row>
      <div style={{ height: "50px" }}></div>
      <Pagination
        showQuickJumper
        defaultCurrent={1}
        total={500}
        onChange={onChange}
        defaultPageSize={24}
      />
      <div
        style={{
          width: "100%",
          height: "80px",
          borderTop: "1px solid #E5DFF4",
          backgroundColor: "white",
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "372px",
        }}
      >
        <div>
          <span
            style={{ fontSize: "18px", marginRight: "32px", fontWeight: "400" }}
          >
            我的购物车🛒
          </span>
          <span style={{ fontSize: "16px", fontWeight: "400" }}>
            总计: {amount} CNY
          </span>
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          <span
            style={{
              width: "200px",
              height: "40px",
            }}
          >
            <button
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                cursor: "pointer",
                borderRadius: "56px",
                color: "#633DB1",
                backgroundColor: "#D8D1FF",
              }}
              onClick={showDrawer}
            >
              查看我的购物车
            </button>
            <Drawer
              title="我的购物车"
              placement="bottom"
              closable={false}
              onClose={onClose}
              open={open}
            >
              <div
                style={{
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "1200px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  borderBottom: "1px solid #CCCCCC",
                }}
              >
                <span style={{ width: "450px" }}>产品信息</span>
                <span style={{ width: "250px" }}>类型</span>
                <span style={{ width: "200px" }}>数量</span>
                <span style={{ width: "200px" }}>价格</span>
                <span style={{ width: "50px" }}></span>
              </div>
              <div
                style={{
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "1200px",

                  fontSize: "20px",
                  borderBottom: "1px solid #CCCCCC",
                }}
              >
                <span style={{ width: "450px", margin: "18px 0 18px" }}>
                  <Image width={50} height={50} src="error" />
                  <span> 软件名字(基础版)</span>
                </span>
                <span style={{ width: "250px" }}>(基础版)</span>
                <span style={{ width: "200px" }}>1</span>
                <span style={{ width: "200px" }}>100 CNY</span>
                <span style={{ width: "50px" }}>
                  <CloseOutlined style={{ cursor: "pointer" }} />
                </span>
              </div>
            </Drawer>
          </span>
          <span style={{ width: "200px", height: "40px" }}>
            <button
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                cursor: "pointer",
                borderRadius: "56px",
                backgroundColor: "#816AFF",
                borderRadius: "56px",
                color: "#FFFFFF",
              }}
            >
              去支付
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Subscription;
