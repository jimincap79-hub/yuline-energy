import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="logo">율린에너지</h1>
        <nav>
          <a href="#home">홈</a>
          <a href="#about">회사소개</a>
          <a href="#solar">태양광사업</a>
          <a href="#case">자산관리</a>
          <a href="#form">문의하기</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <p>정부 태양광 융자지원</p>
          <h2>최대 <strong>90%</strong> 지원</h2>
          <h3>1.75% 초저금리</h3>
          <p>✓ 5년 거치 · 10년 분할상환</p>
          <p className="orange">✓ 예산 소진 시 조기 마감</p>
        </div>
      </section>

      <section className="section">
        <p className="greenText">태양광 설치 지원 혜택 안내</p>
        <h2>태양광 설치 부담 없이 지원 혜택을 받아보세요!</h2>

        <div className="benefitBox">
          <div className="benefitCard">
            <div className="circle green">🌱</div>
            <h3>금융지원 프로그램</h3>
            <h4>최대 90% 융자지원 · 1.75% 초저금리</h4>
            <ul>
              <li>조건 확인 후 한도/금리 안내</li>
              <li>5년 거치 / 최대 10년 분할상환</li>
              <li>신청서류/절차 율린에너지 지원</li>
            </ul>
          </div>

          <div className="benefitCard blueCard">
            <div className="circle blue">🛡️</div>
            <h3>무상 A/S 5년</h3>
            <h4>설치 후 5년간 무상 유지보수 제공</h4>
            <ul>
              <li>시공 하자 / 유지보수 점검</li>
              <li>모듈/인버터 이상 진단</li>
              <li>정기 점검 및 리포트 제공</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="solar" className="section cardSection">
        <h2>건물 · 공장 지붕 태양광</h2>
        <p>빈 지붕을 수익 자산으로 전환하세요.</p>

        <div className="imageGrid">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=900&auto=format&fit=crop" />
          <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=900&auto=format&fit=crop" />
          <img src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=900&auto=format&fit=crop" />
        </div>

        <h3 className="tableTitle">자가소비 태양광 용량별 절감효과</h3>
        <table>
          <thead>
            <tr>
              <th>용량</th>
              <th>500kW</th>
              <th>1000kW</th>
              <th>2000kW</th>
              <th>3000kW</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>월평균절감</td>
              <td>1,210만원</td>
              <td>2,230만원</td>
              <td>4,120만원</td>
              <td>7,210만원</td>
            </tr>
            <tr>
              <td>연평균절감</td>
              <td>1억 4천만원</td>
              <td>2억 8천만원</td>
              <td>5억 6천만원</td>
              <td>8억 5천만원</td>
            </tr>
            <tr>
              <td>총 절감비용(20년)</td>
              <td>28억 3천만원</td>
              <td>56억 7천만원</td>
              <td>113억 5천만원</td>
              <td>170억 2천만원</td>
            </tr>
          </tbody>
        </table>
        <p className="note">※ 상기 절감 효과는 일반적인 예상 수치이며, 실제와 다를 수 있습니다.</p>
      </section>

      <section id="case" className="section cardSection">
        <h2>건물 태양광 주요 시공 사례</h2>
        <p>빈 지붕을 활용한 안정적인 수익사업! 최적의 맞춤 솔루션을 제공합니다.</p>

        <div className="caseWrap">
          <div className="caseIcons">
            <div>📋<strong>태양광 수익</strong><span>안정적인 장기 수익 확보</span></div>
            <div>🔧<strong>지붕방수</strong><span>누수 방지 및 수명 연장</span></div>
            <div>☀️<strong>차광효과</strong><span>냉방비 절감 효과</span></div>
            <div>🏠<strong>외관개선</strong><span>건물 이미지 향상</span></div>
          </div>
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=900&auto=format&fit=crop" />
        </div>
      </section>

      <div className="cta">✓ 지금 무료상담 받고 혜택 받아가세요!</div>

      <section id="form" className="formSection">
        <div className="formImage">📋</div>
        <form>
          <h2>무료 견적 신청</h2>
          <p>간단한 정보 입력만으로 맞춤 상담을 받아보실 수 있습니다.</p>

          <div className="row">
            <label>문의유형</label>
            <label><input type="checkbox" /> 발전사업</label>
            <label><input type="checkbox" /> 자가소비</label>
            <label><input type="checkbox" /> 기타</label>
            <input placeholder="회사명/이름" />
          </div>

          <div className="row">
            <label>연락처</label>
            <select>
              <option>010</option>
            </select>
            <input placeholder="연락처 입력" />
            <input placeholder="연락처 입력" />
          </div>

          <div className="row">
            <label>설치 예정 지역</label>
            <label><input type="checkbox" /> 서울</label>
            <label><input type="checkbox" /> 경기</label>
            <label><input type="checkbox" /> 인천</label>
            <label><input type="checkbox" /> 기타</label>
          </div>

          <input placeholder="설치 예정지 상세주소" />
          <textarea placeholder="상담 내용을 입력해주세요."></textarea>
          <button type="submit">무료 견적 신청하기</button>
        </form>
      </section>

      <footer>
        <h2>율린에너지</h2>
        <p>주소 : 경기도 남양주시 다산지금로 16번길 43, 310호</p>
        <p>사업자번호 : 220-88-31352 ㅣ 전화번호 : 1566-3368</p>
      </footer>
    </>
  );
}

export default App;
