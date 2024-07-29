const ListContainer = ({ items }) => (
  <div>
    <ul
      style={{
        display: "flex",
        listStyleType: "none",
        padding: "0",
        margin: "14px 0 14px",
      }}
    >
      {items.map((item, index) => (
        <li key={index} style={{ flex: "0 0 192px" }}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);
export default ListContainer;
