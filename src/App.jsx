import "./App.css";

import SolarCaseSection from "./components/SolarCaseSection";
import ProjectCases from "./components/ProjectCases";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("상담 접수 기능은 준비 중입니다.");
  };

  return (
    <>
      {/* 헤더 */}
      <header className="header">
        <a href="#home" className="headerLogo">
          <img
            src="/yullin-logo.png"
            alt="율린에너지"
            className="headerLogoImage"
          />
        </a>

        <nav className="navMenu" aria-label="주요 메뉴">
          <a href="#home">홈</a>
          <a href="#benefits">지원혜택</a>
          <a href="#management">자산관리</a>
          <a href="#projects">시공사례</a>
          <a href="#contact" className="contactMenu">
            문의하기
          </a>
        </nav>
      </header>

      <main>
        {/* 메인 */}
        <section id="home" className="hero">
          <div className="heroText">
            <p>정부 태양광 융자지원</p>

            <h2>
              최대 <strong>90%</strong> 지원
            </h2>

            <h3>1.75% 초저금리</h3>

            <div className="heroNotice">
              <p>5년 거치! 10년 분할상환!</p>
              <p className="orange">예산 소진 시 조기 마감</p>
            </div>
          </div>
        </section>

        {/* 지원혜택 */}
        <section id="benefits" className="section benefitSection">
          <p className="greenText">
            태양광 설치 부담 없이 지원 혜택을 받아보세요!
          </p>

          <h2>태양광 설치 지원 혜택 안내</h2>

          <div className="benefitBox">
            <article className="benefitCard">
              <h3>금융지원</h3>
              <h4>최대 90% 융자지원 · 1.75% 초저금리</h4>

              <ul>
                <li>조건 확인 후 한도 및 금리 안내</li>
                <li>5년 거치 / 최대 10년 분할상환</li>
                <li>신청 서류와 절차 율린에너지 지원</li>
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

        {/* 자산관리 */}
        <section
          id="management"
          className="section managementSection"
        >
          <p className="greenText">태양광 발전소 통합관리</p>
          <h2>설치 이후까지 체계적으로 관리합니다</h2>

          <div className="managementGrid">
            <article className="managementCard">
              <span>01</span>
              <h3>발전량 확인</h3>
              <p>발전 현황과 설비 상태를 지속적으로 확인합니다.</p>
            </article>

            <article className="managementCard">
              <span>02</span>
              <h3>설비 점검</h3>
              <p>
                모듈과 인버터 등 주요 설비의 이상 여부를 점검합니다.
              </p>
            </article>

            <article className="managementCard">
              <span>03</span>
              <h3>유지보수</h3>
              <p>
                문제 발생 시 원인을 확인하고 필요한 조치를 지원합니다.
              </p>
            </article>

            <article className="managementCard">
              <span>04</span>
              <h3>운영 지원</h3>
              <p>
                안정적인 발전소 운영을 위한 관리 서비스를 제공합니다.
              </p>
            </article>
          </div>
        </section>

        <SolarCaseSection />

        <ProjectCases />

        <div className="cta">
          지금 무료상담 받고 혜택 받아가세요!
        </div>

        {/* 견적 신청 */}
        <section id="contact" className="formSection">
          <div className="formImage" aria-hidden="true">
            📋
          </div>

          <form className="estimateForm" onSubmit={handleSubmit}>
            <div className="formHeading">
              <p className="greenText">태양광 설치 상담</p>
              <h2>무료 견적 신청</h2>
              <p>
                간단한 정보 입력만으로 맞춤 상담을 받아보실 수 있습니다.
              </p>
            </div>

            <div className="formRow">
              <strong className="formLabel">문의유형</strong>

              <div className="checkboxGroup">
                <label>
                  <input
                    type="checkbox"
                    name="inquiryType"
                    value="발전사업"
                  />
                  발전사업
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="inquiryType"
                    value="자가소비"
                  />
                  자가소비
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="inquiryType"
                    value="기타"
                  />
                  기타
                </label>
              </div>
            </div>

            <div className="formRow">
              <label className="formLabel" htmlFor="companyName">
                회사명/이름
              </label>

              <input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="회사명 또는 이름을 입력해주세요."
                required
              />
            </div>

            <div className="formRow">
              <strong className="formLabel">연락처</strong>

              <div className="phoneGroup">
                <select
                  name="phonePrefix"
                  aria-label="휴대전화 앞자리"
                >
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                  <option value="019">019</option>
                </select>

                <input
                  name="phoneMiddle"
                  type="tel"
                  inputMode="numeric"
                  maxLength={4}
                  placeholder="1234"
                  aria-label="휴대전화 중간 번호"
                  required
                />

                <input
                  name="phoneLast"
                  type="tel"
                  inputMode="numeric"
                  maxLength={4}
                  placeholder="5678"
                  aria-label="휴대전화 마지막 번호"
                  required
                />
              </div>
            </div>

            <div className="formRow">
              <strong className="formLabel">설치 예정 지역</strong>

              <div className="checkboxGroup">
                <label>
                  <input
                    type="checkbox"
                    name="region"
                    value="서울"
                  />
                  서울
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="region"
                    value="경기"
                  />
                  경기
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="region"
                    value="인천"
                  />
                  인천
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="region"
                    value="기타"
                  />
                  기타
                </label>
              </div>
            </div>

            <div className="formRow">
              <label className="formLabel" htmlFor="address">
                설치 예정지
              </label>

              <input
                id="address"
                name="address"
                type="text"
                placeholder="설치 예정지 상세주소를 입력해주세요."
              />
            </div>

            <div className="formRow formRowTextarea">
              <label className="formLabel" htmlFor="message">
                상담 내용
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="궁금한 사항이나 상담 내용을 입력해주세요."
                rows={6}
              />
            </div>

            <button type="submit" className="submitButton">
              무료 견적 신청하기
            </button>
          </form>
        </section>
      </main>

      {/* 푸터 */}
      <footer>
        <div className="footerInner">
          <div className="footerBrand">
            <img
              src="/yullin-logo.png"
              alt="율린에너지 로고"
              className="footerLogo"
            />
          </div>

          <div className="footerInfo">
            <p>경기도 남양주시 다산지금로 16번길 43, 310호</p>

            <p>
              <a href="tel:15663368">1566-3368</a>
              <span className="footerDivider">|</span>
              사업자등록번호 220-88-31352
            </p>
          </div>
        </div>

        <div className="footerBottom">
          Copyright © 2026 Yullin Energy. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default App;