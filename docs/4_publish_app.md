# 4. Publish app

- expo앱을 웹으로 퍼블리싱 할 수 있음

  - 테스트용

- react native web은 View를 div로 바꿔줌
- expo로 만든 앱은 IOS, Android, Web 3가지 플랫폼에서 돌아가는 앱으로 만들 수 있음

## 4.1 React native web

- 각 태그에 style에 spread operator(...) 으로 스타일 했던 부분을 그대로 복사해서 넣으면 웹에서 스타일 깨지는 문제를 해결할 수 있음

### app.json

- https://docs.expo.dev/workflow/configuration/
- 각 플랫폼별로 또는 공통으로 설정하고 싶은 부분을 설정할 수 있음
- splash > image
  - 앱을 실행하면 처음에 로드되는 동안 보여주는 화면
- icon : 앱 아이콘

### Platform

- https://reactnative.dev/docs/platform
- react-native의 Alert는 웹에서 동작하지 않음

## 4.2 Building for App stores

### App store

- expo CLI를 이용

  - 내 컴퓨터가 아닌 expo 서버에 있는 mac 또는 linux를 이용해서 빌드
    - window에서도 ios 앱을 빌드할 수 있는 이유
  - expo build:android
    - 무료 플랜이라 그런지 느림
    - https://expo.dev/accounts/taehwango/projects/RNToDoApp/builds/eb71ce71-a162-4079-a664-59751184a188

### React native for Windows + macOS

- 데스크탑 앱인 것 같음
- https://microsoft.github.io/react-native-windows/

### AR/VR applications using React Native

- https://viro-community.readme.io/docs/overview

### github deploy

- gh-pages cli를 이용
- gh-pages -d web-build
