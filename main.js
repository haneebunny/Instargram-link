const accountNumber = "신한 110-5353-27673";

document.getElementById("copy-button").addEventListener("click", function () {
  // 텍스트를 클립보드에 복사하는 동작을 수행합니다.
  navigator.clipboard.writeText(accountNumber).then(
    function () {
      // 성공적으로 복사된 경우 메시지를 표시합니다.
      alert("계좌번호가 클립보드에 복사되었습니다.");
    },
    function (err) {
      // 복사 실패 시 에러 메시지를 표시합니다.
      console.error("복사 실패: ", err);
      alert("다시 시도해주세요.");
    }
  );
});
