import React from "react";
import { Card, Image } from "antd";
function CardProduct(props) {
  return (
    <Card title={props.data.title}>
      <Image src={props.data.url} />
      <p>{props.data.Decompression}</p>
    </Card>
  );
}

export default CardProduct;
