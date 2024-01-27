import { Divider, Flex, Tag, Typography } from "antd";

export default function CoinInfoModal({ coin }) {
  return (
    <>
      <Flex align="center">
        <img
          src={coin.icon}
          alt={coin.name}
          style={{ width: 40, marginRight: 10 }}
        />
        <Typography.Title level={2} style={{ margin: 0 }}>
          ({coin.symbol}) {coin.name}
        </Typography.Title>
      </Flex>
      <Divider />
      <Typography.Paragraph>
        <Typography.Text strong style={{ marginRight: 10 }}>
          1 hour:
        </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text strong style={{ marginRight: 10 }}>
          1 day:
        </Typography.Text>
        <Tag color={coin.priceChange1dh > 0 ? "green" : "red"}>
          {coin.priceChange1d}%
        </Tag>
        <Typography.Text strong style={{ marginRight: 10 }}>
          1 week:
        </Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? "green" : "red"}>
          {coin.priceChange1w}%
        </Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong style={{ marginRight: 10 }}>
          Price: {coin.price.toFixed(2)}$
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong style={{ marginRight: 10 }}>
          Price BTC: {coin.priceBtc}
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong style={{ marginRight: 10 }}>
          Market Cap: {coin.marketCap.toFixed(2)}$
        </Typography.Text>
      </Typography.Paragraph>
      {coin.contractAddress && <Typography.Paragraph>
        <Typography.Text strong style={{ marginRight: 10 }}>
          Contract Address: {coin.contractAddress}
        </Typography.Text>
      </Typography.Paragraph>}
    </>
  );
}
