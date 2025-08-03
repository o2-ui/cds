# CDS 버전관리 가이드

**Semantic Versioning**

업데이트 내역을 일관성있게 관리하기 위한 버전 명명 규칙.

<br/>

## MAJOR Version

_ex) **1**.x.x_

### 사전적 정의

- Breaking Change (파괴적 변경)
- 이전 버전과 호환되지 않는 변경

### ✋ CDS 에서는 이럴때, 업데이트 합니다!

1. 최초의 정식버전 release (0.x.x -> 1.x.x)
2. 컴포넌트의 props 이름 또는 타입 변경
3. 스타일 토큰 값 변경으로 기존 UI에 시각적 영향이 있는 경우

#### Example 1)

```tsx
// 수정 전
interface TestComponentProps {
  prop1: string; // ✔️
  ...
}
```

```tsx
// 수정 후
interface TestComponentProps {
  prop1: number; // ✔️
  ...
}
```

#### Example 2)

```scss
// 수정 전

...
$red: #d00050;
...
```

```scss
// 수정 후

...
$red: #f71868;
...
```

<br/>

## MINOR Version

_ex) x.**1**.x_

### 사전적 정의

- Backward Compatible (기능 추가)
- 기존 기능과 호환되는 범위 내에서 새로운 기능이 추가되었을 때

### ✋ CDS 에서는 이럴때, 업데이트 합니다!

1. 새로운 컴포넌트 작성
2. 기존 컴포넌트에 새로운 props 추가
   - 단, 기존 버전과 호환가능하도록, Optional 처리 필수
   - 기존 UI 결과물이나 동작에는 영향이 없어야 함
3. 새로운 스타일 토큰 값 추가

#### Example)

```tsx
// 수정 전
interface TestComponentProps {
  label: string;
}
```

```tsx
// 수정 후
interface TestComponentProps {
  label: string;
  icon?: ReactNode; // ✔️
}
```

<br/>

## PATCH Version

_ex) x.x.**1**_

### 사전적 정의

- 기존 기능과 완전히 호환되는 수정 사항
- 주로 버그나 오타 수정 등을 위한 코드 수정

### ✋ CDS 에서는 이럴때, 업데이트 합니다!

1. 컴포넌트 내부 동작 버그 수정 (ex: 이벤트 누락, 조건문 오류 등)
2. 스타일 버그 수정 (ex: 여백 깨짐, 정렬 문제)
3. 문서 또는 주석 수정
4. 내부 로직 리팩토링 (외부 API는 변경 없이)
