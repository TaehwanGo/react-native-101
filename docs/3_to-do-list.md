# 3. To-do-list app

- input, 키보드 제어, 이벤트가 어떻게 생겼는지, react native로 데이터를 어떻게 저장하고 쓰는지
- 디자인 샘플

  - https://dribbble.com/shots/6019952-Do-More-List-View

- 프로젝트 생성
  - expo init RNToDoApp --npm
  - cd RNToDoApp
  - npm run start

## 3.1 Touchables

### 버튼 종류

- TouchableOpacity

  - View와 비슷하지만 누르는 이벤트를 받을 수 있는 View라고 볼 수 있음
  - 애니메이션 효과가 포함되어 있음
    - 버튼을 눌렀을 때 약간 어두워졌다가 다시 밝아짐

- TouchableHighlight

  - 클릭했을 때 배경색이 바뀜
  - onPress 를 설정해야 작동함
  - underlayColor

- TouchableWithoutFeedback

  - 화면의 제일 위에서 발생하는 이벤트를 감지하지만 어떤 UI 변화도 없음

- Pressable
  - 최근에 추가된 기능이 더 많아진 버튼

## 3.2 TextInput

- textarea같은 것은 없음
- TextInput만 있는데 많은 props이 있음

  - https://reactnative.dev/docs/textinput

- placeholder
- placeholderTextColor
- onFocus
- onChangeText
- keyboardType : email-address, numeric, number-pad, ...
- returnKeyType : done, go, next, search, send
- secureTextEntry : 입력하는 텍스트를 동그란 점으로 표시, 비밀번호 입력 시 사용
- multiline : 한줄 이상 입력하는 경우
- autoCorrect : 자동 수정 여부 - default : true
- autoCapitalize : sentences, words, none, characters
