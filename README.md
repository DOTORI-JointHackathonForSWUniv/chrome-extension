# Dotori Chrome extension

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-blue.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## 누구나 쉽게 쓰는 깃 서비스, Dotori 🌤
### [ 기획 배경 ]

- **SW교육 봉사활동**

SW가치 확산을 위해 시작한 SW교육 봉사단 활동 경험을 하며 학생들이 **자신이 작성한 코드를 관리할 수 있는 플랫폼의 필요성**을 느끼게 되었습니다. 이 서비스가 **대한민국 SW교육 인프라 발전**에 도움이 되었으면 합니다!

- **SW교육의 의무화**

코딩이 대세! SW교육 의무화 시대가 되었습니다. 코딩이 처음인 학생들은 자신의 소스코드를 관리하는데 어려움을 느끼는데요. 이런 서비스를 제공하는 시스템은 **영어로 된 명령어, 복잡한 시스템의 흐름**을 이해하는데 많은 시간이 걸릴 수 있죠 ...  


### [ 문제점 ]

- 초,중학생을 위한 소스코드 버전관리 서비스의 부재
- 기존 소스코드 버전관리 서비스 학습에 대한 어려움 ex. git, github

영어로 되어 있는 github와 git 명령어, 초보자가 이해하기 어려운 git flow ••  


### [ 구현 목표 ]

✔️ 초,중학생을 위한 소스코드 버전관리 서비스 개발

✔️ 이해하기 쉬운 버전관리 flow와 한국어 interface 제공

➡️  **엔트리(블록코딩) 사용자를 위한 소스코드 버전관리 서비스 개발**  
  

## 핵심 기능 설명

1️⃣ Chrome Extension (구글 확장 프로그램)

[엔트리 ](https://playentry.org/ws#!)_에서 코딩한 화면에서 바로 소스코드 버전관리 가능!


확장 프로그램에서 Push한 엔트리 파일을 모아보고 관리 및 다운할 수 있어요  


## Sample
![화면-기록-2021-02-06-오후-12 41 42](https://user-images.githubusercontent.com/22928068/107108124-10602500-6879-11eb-964b-012df9d0a250.gif)

## 팀별 역할 분담
- 손영인 : firebase 연동 및 git 명령어 관련 api 개발, 스키마 설계
- 최선욱 : Entry python 소스코드 export 코드 구현
- 한지은 : dotori 서비스와 git 명령어 api 연동
- 원다연 : UI/UX 

## 최종 목표

➡️➡️ 저희 서비스의 최종 목표는 도토리(DOTORI)를 통해 소스코드 버전 관리 시스템을 익힌 사용자가 미래에 **git을 활용한 서비스를 큰 어려움 없이 사용**할 수 있도록 하는 것입니다.

## dependency module (package.json)
#### Dev module: 
```json
  "devDependencies": {
    "cross-env": "5.2.1",
    "eslint": "^7.16.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.0",
    "prettier": "2.2.1",
  }
```

#### module:
```json
  "dependencies": {
    "@google-cloud/firestore": "^4.9.1",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "firebase": "^8.2.5",
    "firebase-admin": "^9.4.2",
    "firebase-tools": "^9.3.0",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.2",
    "styled-components": "5.2.1",
    "web-vitals": "^1.0.1"
  }
```  

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/broccolism"><img src="https://avatars.githubusercontent.com/u/45515332?s=400&u=ab09afbfdc29ef24164be9b6974d137cdba12e30&v=4" width="100px;" alt=""/><br /><sub><b>broccolism</b></sub></a><br /><a href="https://github.com/orgs/DOTORI-JointHackathonForSWUniv/people/broccolism" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/seonuk"><img src="https://avatars3.githubusercontent.com/u/22928068?v=4?s=100" width="100px;" alt=""/><br /><sub><b>seonuk</b></sub></a><br /><a href="https://github.com/orgs/DOTORI-JointHackathonForSWUniv/people/seonuk" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Daily-Jin"><img src="https://avatars.githubusercontent.com/u/61936465?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Daily-Jin</b></sub></a><br /><a href="https://github.com/orgs/DOTORI-JointHackathonForSWUniv/people/Daily-Jin" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/minjyo"><img src="https://avatars.githubusercontent.com/u/50357236?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Daily-Jin</b></sub></a><br /><a href="https://github.com/orgs/DOTORI-JointHackathonForSWUniv/people/minjyo" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

