document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const loadingText = document.querySelector(".loading-text");
  const mainContent = document.getElementById("main-content");

  // 텍스트 배열 정의
  const loadingMessages = [
    "프로필 이미지 그리는 중...",
    "계좌번호 쓰는 중...",
    "로딩 핑계 생각하는 중...",
  ];

  let currentMessageIndex = 0;

  // 텍스트 변경 함수
  function changeLoadingText() {
    loadingText.textContent = loadingMessages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % loadingMessages.length; // 순환
  }

  // 1초 간격으로 텍스트 변경
  const loadingInterval = setInterval(changeLoadingText, 1000);

  // 로딩 완료 후 처리
  function hideLoadingScreen() {
    clearInterval(loadingInterval); // 텍스트 변경 중지
    loadingScreen.style.display = "none"; // 로딩 화면 숨기기
    mainContent.style.display = "block"; // 메인 콘텐츠 표시
  }

  // 실제 로딩 작업 (예: 데이터 로드)
  async function fetchData() {
    try {
      // 비동기 데이터 가져오기 (예시)
      const response = await fetch("/data/review.json");
      if (!response.ok) {
        throw new Error("데이터를 가져오는 데 실패했습니다.");
      }
      const data = await response.json();
      console.log("데이터 로드 성공:", data);

      // 필요한 작업 수행 후 로딩 화면 숨기기
      hideLoadingScreen();
    } catch (error) {
      console.error("데이터 로드 중 오류 발생:", error);
    }
  }

  // 테스트를 위해 fetchData 호출 (실제 로드 시점에서 호출)
  fetchData();
});
