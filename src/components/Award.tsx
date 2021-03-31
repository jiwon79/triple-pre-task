import React from "react";
import styled from "styled-components";
import { APP_STORE_IMG, PLAY_STORE_IMG } from "constants/images";

const AwardContainer = styled.div`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: rgba(58, 58, 58, 0.8);
`;

const PlayStore = styled.div`
  display: inline-block;
  height: 54px;
  padding: 5px 0px 5px 62px;
  margin-right: 39px;
  background-image: url(${PLAY_STORE_IMG});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 54px 54px;
  line-height: 22px;
`;

const AppStore = styled(PlayStore)`
  margin-right: 0px;
  background-image: url(${APP_STORE_IMG});
`;

const Awards: React.FC = () => {
  return (
    <AwardContainer>
      <PlayStore>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </PlayStore>
      <AppStore>
        2018 애플 앱스토어
        <br />
        오늘의 여행햅 선정
      </AppStore>
    </AwardContainer>
  );
};

export default Awards;
