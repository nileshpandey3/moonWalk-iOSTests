import React from "react";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";
import Label from "common/Label";
import { MONTHS } from "src/constants";

const Wrapper = styled.View`
  background: ${({ theme }) => theme.cardBackground};
  margin: 20px;
  border-radius: 15px;
  padding: 20px;
  padding-right: 15px;
`;

const DateWrapper = styled(LinearGradient)`
  border-radius: 6px;
  width: 50px;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

const Day = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${({ large }) => (large ? 20 : 13)}px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Desc = styled.Text`
  color: white;
  font-size: 15px;
  ${({ bold }) => bold && "font-weight: bold;"} margin-top: 5px;
`;

export default ({ data }) => {
  const launchTime = new Date(data.netstamp * 1000);
  return (
    <Wrapper>
      <Row>
        <DateWrapper
          colors={["#ffb39d", "#ff43bb"]}
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
        >
          {data.netstamp === 0 ? (
            <Day>TBD</Day>
          ) : (
            <>
              <Day>{launchTime.getDate()}</Day>
              <Day>{MONTHS[launchTime.getMonth()]}</Day>
            </>
          )}
        </DateWrapper>
        <Label numberOfLines={2} text={data.lsp.abbrev} />
      </Row>
      <Desc bold>{data.name}</Desc>
      <Desc numberOfLines={1}>{data.location.name}</Desc>
    </Wrapper>
  );
};
