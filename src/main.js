import "./main.scss";

const accountNumber = "신한 110-5353-27673";

document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.getElementById("copy-button");
  const toast = document.getElementById("toast");

  // 계좌번호 복사 및 토스트 메시지 표시
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      toast.textContent = "계좌번호가 복사되었습니다!";
      toast.classList.add("show");

      // 3초 뒤 토스트 창 숨기기
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    });
  });
});

// JSON 데이터를 불러와서 화면에 표시하는 함수
async function loadReviews() {
  try {
    // JSON 파일 가져오기
    const response = await fetch("/data/review.json");

    // 응답 확인
    if (!response.ok) {
      throw new Error("JSON 파일을 가져올 수 없습니다.");
    }

    // JSON 데이터 파싱
    const reviews = await response.json();

    // 리뷰 데이터를 화면에 렌더링
    renderReviews(reviews);
  } catch (error) {
    console.error("리뷰 데이터를 가져오는 중 오류가 발생했습니다:", error);
  }
}

// 리뷰 데이터를 DOM에 추가
function renderReviews(reviews) {
  const container = document.getElementById("review-container");
  container.innerHTML = ""; // 기존 리뷰 초기화

  // 리뷰 데이터를 순회하며 DOM 요소 생성
  reviews.forEach((review) => {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");

    // 동적인 별점 렌더링
    const stars = renderStars(review.rate);

    // 리뷰 내용 구성
    reviewElement.innerHTML = `
    
      <div style="display: flex; align-items: center; gap: 10px;">
        ${
          review.user_image
            ? `<img src="${review.user_image}" alt="${review.user}" style="width: 50px; height: 50px; border-radius: 50%;" />`
            : `<img src="/img/cozzi_icon.png" style="width: 30px; height: 30px; border-radius: 50%;"/>`
        } 
        <span style="display: block; color: #555;"> ${review.user}</span>
        <div>${stars}</div>
      </div>
      <div class="review-contents">
      <p>"${review.content}"</p>
      ${
        review.image
          ? `<img src="${review.image}" alt="리뷰 이미지" style="width: 200px; border-radius: 8px; margin-top: 10px;" />`
          : ""
      }
      </div>
    `;

    container.appendChild(reviewElement);
  });
}

// 별점 렌더링 함수
function renderStars(rate) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rate ? "★" : "☆";
  }
  return `<span style="color: gold; font-size: 18px;">${stars}</span>`;
}

// 함수 실행
loadReviews();
