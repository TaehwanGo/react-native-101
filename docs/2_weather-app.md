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
