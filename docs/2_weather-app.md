# 2. Weather app

## 2.0 Snack

- https://snack.expo.dev/
  - 브라우저에서 React native 앱을 만들 수 있는 온라인 코드에디터
  - 문제가 있을 때 snack에 복사해서 공유해서 같이 해결할 수 있음

## 2.1 The rules of native

- View : Container

  - style 속성
    - 웹 react와 비슷하게 style을 지정
    - react native팀에서 웹과 최대한 비슷하게 가져오려했지만 모든 것을 사용할 순 없음

- Text는 Text 컴포넌트 안에 들어가야 함

  - View안에 텍스트를 넣으면 에러가 발생함

- StyleSheet.create()

  - 자동완성 기능 제공
  - StyleSheet라는 것 없이 그냥 Object 형태로 넣어도 상관은 없다

- StatusBar
  - 맨위 상태 창(시간, 와이파이, 배터리 상태 등)색 변경
  - expo 에서 제공

## 2.2 React native packages

- https://reactnative.dev
- expo가 아닌 react-native package에서도 StatusBar가 제공 됨

  - 어떤 차이가 있을까?

- 과거에 있었다가 사라진 컴포넌트들
  - AsyncStorage (브라우저의 localStorage)
  - Navigator
  - DatePicker
- 과거엔 가능한 많은 컴포넌트를 제공하려했음
- 많은 버그가 있고 다 지원할 수 없다는 것을 깨닫고 API 종류를 줄임
  - 지원이 중단된 컴포넌트는 community package를 사용하라고 권장하고 있음

## 2.3 Third party packages

- Component vs API

  - Component : 화면에 렌더링 되는 것
    - e.g. StatusBar
  - API : OS와 소통하는 자바스크립트 코드
    - e.g. Vibration : 핸드폰에 진동을 줌

- Third party packages

  - https://reactnative.directory/?search=storage
  - AsyncStorage같은 지원이 종료된 컴포넌트 또는 API는 third party library를 사용해야 함
    - https://reactnative.directory 에서 검색하면 나옴
    - https://react-native-async-storage.github.io/async-storage/

- Expo SDK

  - react-native에서 지원하지 않는 여러 기능들을 지원

- StatusBar -> react-native vs. expo-status-bar

  - expo가 react-native를 복사해서 개선해서 제공
  - react-native
    - https://reactnative.dev/docs/statusbar
  - expo
    - https://docs.expo.dev/versions/v46.0.0/sdk/status-bar/

- AsyncStorage

  - Expo에서 검색하니 https://react-native-async-storage.github.io/async-storage/ 를 추천하고 있음
    - https://docs.expo.dev/versions/latest/sdk/async-storage/

- 나중에 expo가 지원하지 않는 기능을 사용하고 싶은 경우에 대해서 다룸

## 시뮬레이터 설치

- https://qnrjs42.blog/react-native/m1-arm64-setting

## 2.4 Layout System

### Flex box

- 웹의 flex와 거의 비슷
- React native에서 없는 display
  - block, inline-block, grid
- default가 flex라서 display: flex라고 해줄 필요가 없음
- 바로 flexDirection을 설정 가능
- flexDirection의 default는 "column"
  - 웹에선 "row"
- 가로로 크기가 넘어가도 scroll 되지 않음(브라우저가 아니기 때문)
- Layout에선 width와 height은 안 씀

  - 스크린 사이즈에 따라 다르게 보이기 때문에
  - 반응형 디자인을 생각해야 함
  - 아바타나 아이콘 같은 곳에선 쓸 수도 있음

- flex
  - 부모 컴포넌트 대비 현재 컴포넌트가 잡아먹는 비율
  - 만약 동일하게 잡는 컴포넌트가 동일한 depth에 존재한다면 그 갯수에 비례해서 화면이 분할됨
    - flex: 1 이 3개이면 각각 33.33% 씩 차지함

## 2.5 ~ 2.6 Styles

- 날씨 정보를 가져올 Open API
  - https://openweathermap.org/
- 날씨 앱 디자인
  - https://dribbble.com/shots/14717133/attachments/6417271?mode=media

### ScrollView

- https://reactnative.dev/docs/scrollview
- pagingEnabled : 스크롤 할 때 한 칸씩 움직이도록 함
- showsHorizontalScrollIndicator : 가로 스크롤 바를 숨김

### Element Inspector

- 핸드폰을 흔들면 나옴
- 또는 expo가 실행중인 터미널에 m 을 입력

### Dimensions

- https://reactnative.dev/docs/dimensions
- 핸드폰 스크린 사이즈에 대한 API가 필요할 때

### Thing to do

- 유저의 위치 가져오기
- 해당 위치를 API에 전송하고 날씨를 데이터 응답을 받기
