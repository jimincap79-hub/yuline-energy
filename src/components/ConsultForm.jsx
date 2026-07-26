function ConsultForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("상담 접수 기능은 준비 중입니다.");
  };

  return (
    <section id="contact" className="consult">
      <div className="consultHeader">
        <p className="greenText">태양광 설치 상담</p>
        <h2>무료 견적 신청</h2>

        <p>
          태양광 · 전기 · 에너지 전문기업
          <br />
          율린에너지가 빠르게 상담해드립니다.
        </p>
      </div>

      <form className="consultForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="성함"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="연락처"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="설치지역"
        />

        <textarea
          name="message"
          placeholder="문의내용을 입력해주세요."
          rows={5}
        />

        <button type="submit">
          무료 견적 신청하기
        </button>
      </form>

      <div className="company-info">
        <h3>회사정보</h3>

        <p>
          <strong>사업자등록번호</strong>
          <span>220-88-31352</span>
        </p>

        <p>
          <strong>대표자</strong>
          <span>신명호</span>
        </p>

        <p>
          <strong>주소</strong>
          <span>경기도 남양주시 다산지금로 16번길 43, 310호</span>
        </p>

        <p>
          <strong>대표전화</strong>
          <span>1566-3368</span>
        </p>

        <p>
          <strong>팩스</strong>
          <span>031-566-3367</span>
        </p>
      </div>
    </section>
  );
}

export default ConsultForm;