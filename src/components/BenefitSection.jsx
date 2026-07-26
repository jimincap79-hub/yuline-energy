function BenefitSection() {
  return (
    <section id="benefits" className="section benefitSection">
      <p className="greenText">태양광 설치 지원 혜택 안내</p>
      <h2>지원혜택</h2>

      <div className="benefitBox">
        <article className="benefitCard">
          <h3>금융지원</h3>
          <h4>최대 90% 융자지원 · 1.75% 초저금리</h4>

          <ul>
            <li>조건 확인 후 한도 및 금리 안내</li>
            <li>5년 거치 · 최대 10년 분할상환</li>
            <li>신청서류 및 절차 지원</li>
          </ul>
        </article>

        <article className="benefitCard blueCard">
          <h3>무상 A/S 5년</h3>
          <h4>설치 후 5년간 무상 유지보수 제공</h4>

          <ul>
            <li>시공 하자 및 유지보수 점검</li>
            <li>모듈과 인버터 이상 진단</li>
            <li>정기 점검 및 리포트 제공</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default BenefitSection;