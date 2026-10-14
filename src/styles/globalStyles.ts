/**
 * 사이트 전체 스타일.
 * CSS 파일 대신 TypeScript 문자열로 두고, src/app/layout.tsx 에서 <style> 태그로 넣습니다.
 * (색상은 맨 위 :root 의 변수를 바꾸면 전체에 반영됩니다.)
 */
export const globalStyles = `
:root {
  --ink: #14181b;
  --ink-2: #1c2226;
  --paper: #f5f7f6;
  --white: #ffffff;
  --line: #d9e0dc;
  --line-dark: #2c353a;
  --muted: #566169;
  --muted-dark: #8c98a1;

  --signal: #0b7a53; /* 밝은 배경 위의 초록 (글자·버튼) */
  --signal-bright: #34d399; /* 어두운 배경 위의 초록 */
  --signal-soft: #e3f4ec;
  --ember: #b72e2a; /* 밝은 배경 위의 빨강 */
  --ember-bright: #ff6b66; /* 어두운 배경 위의 빨강 */
  --ember-soft: #fdeceb;
  --amber-bg: #fff4d6;
  --amber-line: #e8c766;
  --amber-text: #6b4300;

  --font: "Pretendard Variable", Pretendard, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic",
    system-ui, -apple-system, "Segoe UI", sans-serif;
  --mono: ui-monospace, "SF Mono", "Cascadia Mono", Consolas, "D2Coding", monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font);
  font-size: 16px;
  line-height: 1.7;
  word-break: keep-all;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
p,
ol,
ul,
dl,
dd {
  margin: 0;
}

h1,
h2,
h3 {
  letter-spacing: -0.02em;
}

a {
  color: inherit;
}

:focus-visible {
  outline: 3px solid var(--signal-bright);
  outline-offset: 3px;
  border-radius: 4px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.wrap {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ---------- 헤더 / 푸터 ---------- */

.site-header {
  border-bottom: 1px solid var(--line);
  background: var(--white);
}

.site-header.dark {
  background: var(--ink);
  border-bottom-color: var(--line-dark);
  color: #fff;
}

.site-header .wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.brand {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.03em;
  text-decoration: none;
}

.nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav a {
  white-space: nowrap;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 8px;
}

.nav a:hover {
  background: rgba(127, 140, 150, 0.16);
}

.site-footer {
  background: var(--ink);
  color: var(--muted-dark);
  font-size: 14px;
  padding: 40px 0;
}

.site-footer .wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 40px;
  justify-content: space-between;
}

.site-footer strong {
  color: #fff;
  font-weight: 700;
}

/* ---------- 버튼 ---------- */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 24px;
  border: 1px solid transparent;
  border-radius: 8px;
  font: inherit;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s;
}

.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.btn-primary {
  background: var(--signal);
  color: #fff;
}
.btn-primary:hover:not(:disabled) {
  background: #09663f;
}

.btn-bright {
  background: var(--signal-bright);
  color: var(--ink);
}
.btn-bright:hover {
  background: #5ee0ad;
}

.btn-ghost {
  background: transparent;
  color: inherit;
  border-color: currentColor;
}
.btn-ghost:hover:not(:disabled) {
  background: rgba(127, 140, 150, 0.14);
}

.btn-danger {
  background: var(--white);
  color: var(--ember);
  border-color: var(--ember);
}
.btn-danger:hover:not(:disabled) {
  background: var(--ember-soft);
}

.btn-small {
  min-height: 36px;
  padding: 0 14px;
  font-size: 14px;
}

/* ---------- 홈: 히어로 ---------- */

.hero {
  background: var(--ink);
  color: #fff;
  padding: 88px 0 104px;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.7fr);
  gap: 56px;
  align-items: center;
}

.hero h1 {
  font-size: clamp(28px, 3.7vw, 44px);
  line-height: 1.28;
  font-weight: 800;
  text-wrap: balance;
}

.hero .lead {
  margin-top: 24px;
  max-width: 34em;
  font-size: 18px;
  color: #c4ccd2;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;
}

.hero-owner {
  margin-top: 48px;
  font-size: 14px;
  color: var(--muted-dark);
}

/* 파일의 일생을 보여 주는 장면: 올림 → OTP 인증 → 삭제 */
.ticket {
  background: var(--ink-2);
  border: 1px solid var(--line-dark);
  border-radius: 14px;
  padding: 32px 28px 28px;
}

.ticket-file {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 36px;
  font-size: 19px;
}

.ticket-name {
  position: relative;
  font-weight: 700;
  animation: name-fade 9s infinite;
}

.ticket-strike {
  position: absolute;
  left: -3px;
  right: -3px;
  top: 56%;
  height: 2px;
  background: var(--ember-bright);
  transform: scaleX(0);
  transform-origin: left;
  animation: strike 9s infinite;
}

.ticket-size {
  color: var(--muted-dark);
  font-size: 14px;
}

.ticket-track {
  position: relative;
  height: 4px;
  margin: 0 7px 20px;
  background: #2e383e;
  border-radius: 2px;
}

.ticket-fill {
  position: absolute;
  inset: 0 auto 0 0;
  width: 0;
  border-radius: 2px;
  background: var(--signal-bright);
  animation: fill 9s infinite;
}

.ticket-dot {
  position: absolute;
  top: 50%;
  left: 0;
  width: 14px;
  height: 14px;
  margin: -7px 0 0 -7px;
  border-radius: 50%;
  background: var(--signal-bright);
  animation: dot 9s infinite;
}

.ticket-stages {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
  font-weight: 600;
  color: #6f7c86;
}

.ticket-stages li {
  flex: 1;
}
.ticket-stages li:nth-child(2) {
  text-align: center;
}
.ticket-stages li:last-child {
  text-align: right;
}
.ticket-stages .s1 {
  animation: stage-1 9s infinite;
}
.ticket-stages .s2 {
  animation: stage-2 9s infinite;
}
.ticket-stages .s3 {
  animation: stage-3 9s infinite;
}

@keyframes dot {
  0%,
  8% {
    left: 0;
    opacity: 1;
    background: var(--signal-bright);
  }
  30%,
  50% {
    left: 50%;
  }
  68% {
    left: 100%;
    background: var(--signal-bright);
  }
  70%,
  94% {
    left: 100%;
    opacity: 1;
    background: var(--ember-bright);
  }
  96% {
    left: 100%;
    opacity: 0;
  }
  96.1% {
    left: 0;
    opacity: 0;
    background: var(--signal-bright);
  }
  100% {
    left: 0;
    opacity: 1;
  }
}

@keyframes fill {
  0%,
  8% {
    width: 0;
    opacity: 1;
    background: var(--signal-bright);
  }
  30%,
  50% {
    width: 50%;
  }
  68% {
    width: 100%;
    background: var(--signal-bright);
  }
  70%,
  94% {
    width: 100%;
    opacity: 1;
    background: var(--ember-bright);
  }
  96% {
    width: 100%;
    opacity: 0;
  }
  96.1%,
  100% {
    width: 0;
    opacity: 0;
  }
}

@keyframes strike {
  0%,
  68% {
    transform: scaleX(0);
    opacity: 1;
  }
  76%,
  94% {
    transform: scaleX(1);
    opacity: 1;
  }
  96%,
  100% {
    transform: scaleX(0);
    opacity: 0;
  }
}

@keyframes name-fade {
  0%,
  68% {
    opacity: 1;
  }
  76%,
  94% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

@keyframes stage-1 {
  0%,
  29% {
    color: #fff;
  }
  30%,
  100% {
    color: #6f7c86;
  }
}
@keyframes stage-2 {
  0%,
  29% {
    color: #6f7c86;
  }
  30%,
  67% {
    color: #fff;
  }
  68%,
  100% {
    color: #6f7c86;
  }
}
@keyframes stage-3 {
  0%,
  67% {
    color: #6f7c86;
  }
  68%,
  95% {
    color: var(--ember-bright);
  }
  96%,
  100% {
    color: #6f7c86;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ticket *,
  .ticket-stages li {
    animation: none !important;
  }
  .ticket-dot {
    left: 50%;
  }
  .ticket-fill {
    width: 50%;
  }
  .ticket-stages .s2 {
    color: #fff;
  }
}

/* ---------- 홈: 본문 구간 ---------- */

.section {
  padding: 88px 0;
}

.section + .section {
  border-top: 1px solid var(--line);
}

.section-white {
  background: var(--white);
}

.section h2 {
  font-size: 32px;
  line-height: 1.3;
  font-weight: 800;
  margin-bottom: 12px;
}

.section-sub {
  max-width: 40em;
  color: var(--muted);
  margin-bottom: 48px;
}

.flow {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
  padding: 0;
  list-style: none;
}

.flow li {
  border-top: 3px solid var(--signal);
  padding-top: 20px;
}

.flow li.burn {
  border-top-color: var(--ember);
}

.flow-n {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: var(--signal);
  margin-bottom: 8px;
}

.flow li.burn .flow-n {
  color: var(--ember);
}

.flow h3 {
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 8px;
}

.flow p {
  color: var(--muted);
}

.features {
  display: grid;
  gap: 0;
}

.feature {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 40px;
  padding: 32px 0;
  border-top: 1px solid var(--line);
}

.feature:last-child {
  border-bottom: 1px solid var(--line);
}

.feature h3 {
  font-size: 20px;
  line-height: 1.4;
}

.feature p {
  color: var(--muted);
  max-width: 38em;
}

.feature p + p {
  margin-top: 8px;
}

.table-scroll {
  overflow-x: auto;
}

.roles {
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 12px;
  overflow: hidden;
}

.roles th,
.roles td {
  text-align: left;
  vertical-align: top;
  padding: 18px 20px;
  border-bottom: 1px solid var(--line);
}

.roles th {
  background: var(--paper);
  font-size: 14px;
  color: var(--muted);
  font-weight: 700;
}

.roles tr:last-child td {
  border-bottom: 0;
}

.roles td:first-child {
  font-weight: 700;
}

.roles .path {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
  word-break: break-all;
}

.chip {
  display: inline-block;
  padding: 2px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
}

.chip-todo {
  background: var(--amber-bg);
  color: var(--amber-text);
  border: 1px solid var(--amber-line);
}

.chip-ok {
  background: var(--signal-soft);
  color: var(--signal);
  border: 1px solid #a5d8c0;
}

.chip-fail {
  background: var(--ember-soft);
  color: var(--ember);
  border: 1px solid #f0b4b1;
}

.effects {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
}

.effects li {
  list-style: none;
  border-left: 3px solid var(--signal);
  padding-left: 20px;
}

.effects h3 {
  font-size: 18px;
  line-height: 1.45;
  margin-bottom: 8px;
}

.effects p {
  color: var(--muted);
}

.effects {
  padding: 0;
}

.team {
  display: grid;
  padding: 0;
  list-style: none;
}

.member {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 40px;
  padding: 32px 0;
  border-top: 1px solid var(--line);
}

.member:last-child {
  border-bottom: 1px solid var(--line);
}

.member h3 {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 24px;
  line-height: 1.3;
}

.position {
  padding: 2px 12px;
  border-radius: 999px;
  background: var(--ink);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0;
}

.position.plain {
  background: var(--signal-soft);
  color: var(--signal);
}

.idea {
  margin-top: 8px;
  color: var(--muted);
  font-size: 15px;
}

.duties {
  display: grid;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.duties strong {
  font-size: 17px;
}

.duties p {
  max-width: 38em;
  color: var(--muted);
}

/* ---------- 팀 소개 페이지: 배경 한 가지, 구간 간격 좁게 ---------- */

.team-head {
  padding: 48px 0 0;
}

.team-head .page-lead {
  margin-bottom: 0;
}

.team-block {
  padding: 32px 0 0;
}

.team-block-last {
  padding-bottom: 96px;
}

.team-block h2 {
  font-size: 24px;
  line-height: 1.3;
  font-weight: 800;
  margin-bottom: 8px;
}

.team-block .section-sub {
  margin-bottom: 20px;
}

/* ---------- 작업 화면 (보내기 / 받기) ---------- */

.page-main {
  padding: 48px 0 96px;
  min-height: calc(100vh - 64px - 130px);
}

.page-narrow {
  max-width: 720px;
  margin: 0 auto;
}

.page-title {
  font-size: 30px;
  line-height: 1.3;
  font-weight: 800;
  margin-bottom: 8px;
}

.page-lead {
  color: var(--muted);
  margin-bottom: 32px;
}

.notice {
  display: flex;
  gap: 12px;
  background: var(--amber-bg);
  border: 1px solid var(--amber-line);
  color: var(--amber-text);
  border-radius: 10px;
  padding: 14px 18px;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 32px;
}

.notice strong {
  display: block;
}

.panel {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 28px;
}

.panel + .panel {
  margin-top: 16px;
}

.panel h2 {
  font-size: 18px;
  line-height: 1.4;
  margin-bottom: 4px;
}

.panel-sub {
  color: var(--muted);
  font-size: 15px;
  margin-bottom: 20px;
}

.dropzone {
  display: block;
  border: 2px dashed #b8c4be;
  border-radius: 10px;
  padding: 36px 20px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.15s, background-color 0.15s;
}

.dropzone:hover,
.dropzone.is-over {
  border-color: var(--signal);
  background: var(--signal-soft);
}

.dropzone:focus-within {
  outline: 3px solid var(--signal-bright);
  outline-offset: 3px;
}

.dropzone input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.dropzone .big {
  display: block;
  font-size: 18px;
  font-weight: 700;
}

.dropzone .small {
  display: block;
  margin-top: 4px;
  color: var(--muted);
  font-size: 14px;
}

.file-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.file-row .name {
  font-weight: 700;
  word-break: break-all;
}

.file-row .size {
  color: var(--muted);
  font-size: 14px;
}

.field {
  margin-top: 24px;
}

.field label,
.field .label {
  display: block;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
}

.segmented {
  display: inline-flex;
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
}

.segmented label {
  margin: 0;
  position: relative;
  cursor: pointer;
}

.segmented input {
  position: absolute;
  opacity: 0;
  inset: 0;
}

.segmented span {
  display: block;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 600;
  border-right: 1px solid var(--line);
}

.segmented label:last-child span {
  border-right: 0;
}

.segmented input:checked + span {
  background: var(--ink);
  color: #fff;
}

.segmented input:focus-visible + span {
  outline: 3px solid var(--signal-bright);
  outline-offset: -3px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 28px;
}

.error {
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  background: var(--ember-soft);
  color: var(--ember);
  font-weight: 600;
  font-size: 15px;
}

.link-box {
  display: flex;
  align-items: stretch;
  gap: 8px;
}

.link-box code {
  flex: 1;
  min-width: 0;
  padding: 12px 14px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 8px;
  font-family: var(--mono);
  font-size: 14px;
  word-break: break-all;
  line-height: 1.5;
}

.meta-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 24px;
  margin-top: 16px;
  color: var(--muted);
  font-size: 14px;
}

.otp-display {
  text-align: center;
  padding: 8px 0 4px;
}

.otp-code {
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 0.22em;
  padding-left: 0.22em;
  font-variant-numeric: tabular-nums;
  line-height: 1.2;
}

.otp-timer {
  margin-top: 4px;
  color: var(--muted);
  font-size: 15px;
}

.waiting {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--muted);
}

.pulse {
  flex: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--signal);
  animation: pulse 1.6s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.35;
    transform: scale(0.7);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pulse {
    animation: none;
  }
}

.otp-input {
  width: 100%;
  max-width: 320px;
  padding: 12px 16px;
  border: 2px solid var(--line);
  border-radius: 10px;
  font: inherit;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-align: center;
  font-variant-numeric: tabular-nums;
  background: var(--white);
  color: var(--ink);
}

.otp-input:focus {
  outline: none;
  border-color: var(--signal);
  box-shadow: 0 0 0 3px var(--signal-bright);
}

.hint {
  margin-top: 8px;
  color: var(--muted);
  font-size: 14px;
}

.gone {
  border-color: #f0b4b1;
  background: var(--ember-soft);
}

.gone h2,
.gone .big-state {
  color: var(--ember);
}

.big-state {
  font-size: 22px;
  font-weight: 800;
  line-height: 1.4;
  margin-bottom: 8px;
}

.done-ok {
  border-color: #a5d8c0;
  background: var(--signal-soft);
}

.checks {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  display: grid;
  gap: 10px;
}

.checks li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 15px;
}

.life {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  padding: 0;
  margin: 0 0 20px;
  list-style: none;
  font-size: 14px;
  font-weight: 700;
}

.life li {
  padding-top: 8px;
  border-top: 3px solid var(--line);
  color: var(--muted);
}

.life li.on {
  border-top-color: var(--signal);
  color: var(--ink);
}

.life li.burned {
  border-top-color: var(--ember);
  color: var(--ember);
}

/* ---------- 반응형 ---------- */

@media (max-width: 860px) {
  .hero {
    padding: 56px 0 64px;
  }
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .section {
    padding: 64px 0;
  }
  .flow,
  .effects {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .feature,
  .member {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .member {
    gap: 16px;
  }
}

@media (max-width: 560px) {
  .wrap {
    padding: 0 16px;
  }
  .nav a:not(:last-child) {
    display: none;
  }
  .panel {
    padding: 20px;
  }
  .otp-code {
    font-size: 38px;
  }
  .link-box {
    flex-direction: column;
  }
  .page-title {
    font-size: 26px;
  }
}
`;
