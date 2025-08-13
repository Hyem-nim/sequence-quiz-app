# 🚀 GitHub 저장소 생성 및 연결 가이드

## 📋 단계별 가이드

### 1️⃣ GitHub 저장소 생성

1. **GitHub.com 접속**
   - 브라우저에서 https://github.com 접속
   - 로그인 (계정이 없으면 가입)

2. **새 저장소 생성**
   - 우측 상단 '+' 버튼 클릭
   - "New repository" 선택

3. **저장소 설정**
   ```
   Repository name: sequence-quiz-app
   Description: 🧮 중학교 3학년 수학 수열 퀴즈 앱
   Visibility: Public (다른 사람이 볼 수 있도록)
   Initialize this repository with: 체크 안함 (이미 파일이 있으므로)
   ```

4. **"Create repository" 클릭**

### 2️⃣ 로컬 저장소를 GitHub에 연결

터미널에서 다음 명령어들을 순서대로 실행하세요:

\`\`\`bash
# 현재 프로젝트 디렉토리로 이동
cd /Users/hyem/Desktop/Hyem_AI/projects/sequence_quiz_app

# GitHub 저장소 연결 (your-username을 실제 GitHub 사용자명으로 변경!)
git remote add origin https://github.com/your-username/sequence-quiz-app.git

# GitHub에 업로드
git push -u origin main
\`\`\`

### 3️⃣ GitHub Pages 활성화 (무료 웹호스팅!)

1. **GitHub 저장소 페이지에서**:
   - "Settings" 탭 클릭
   - 왼쪽 메뉴에서 "Pages" 클릭

2. **설정**:
   - Source: "Deploy from a branch" 선택
   - Branch: "main" 선택
   - Folder: "/ (root)" 선택
   - "Save" 클릭

3. **완료!**
   - 몇 분 후 웹사이트가 활성화됩니다
   - URL: `https://your-username.github.io/sequence-quiz-app/`

## 🎯 예상 결과

### 📱 공유 가능한 링크들
- **웹앱**: `https://your-username.github.io/sequence-quiz-app/`
- **소스코드**: `https://github.com/your-username/sequence-quiz-app`

### 📤 공유 방법
친구들에게 이렇게 공유하세요:

> 🧮 **수열 퀴즈 앱 만들었어요!**
> 
> 중학교 3학년 수학 수열 문제를 재미있게 풀어보세요!
> 
> 🔗 **바로 플레이**: https://your-username.github.io/sequence-quiz-app/
> 
> ✨ 힌트 기능, 해설, 모바일 지원 모두 포함!

## ⚠️ 주의사항

1. **사용자명 변경**: `your-username`을 실제 GitHub 사용자명으로 바꿔주세요
2. **대소문자**: GitHub 사용자명의 대소문자를 정확히 맞춰주세요
3. **공개 저장소**: Public으로 설정해야 GitHub Pages가 무료로 사용 가능합니다

## 🆘 문제 해결

### "Permission denied" 오류 시:
\`\`\`bash
# HTTPS 대신 SSH 사용
git remote set-url origin git@github.com:your-username/sequence-quiz-app.git
\`\`\`

### "Repository already exists" 오류 시:
- GitHub에서 기존 저장소를 삭제하고 다시 생성

---

**이 가이드대로 따라하시면 10분 내에 전세계 어디서든 접속 가능한 웹사이트가 완성됩니다! 🚀**