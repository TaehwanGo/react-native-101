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
