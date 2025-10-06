// 회원가입 페이지
export default function SignUp() {
  return (
    <main>
      <div className="w-100 h-120 border border-white/10 text-white bg-white/5 rounded-4xl mt-12">
        <p className="font-bold text-3xl text-[#17BEBB] text-center pt-5 mb-3">
          CockTail Rounge🍹
        </p>
        <form className="text-gray-900 placeholder-gray-500">
          {/* 아이디 */}
          <div className="flex flex-col items-start mx-10">
            <label className="block font-bold text-white">아이디</label>
            <input
              id="id"
              type="text"
              name="id"
              placeholder="아이디"
              className="w-80 bg-white rounded-lg px-3 py-2"
            ></input>
          </div>

          {/* 비밀번호 */}
          <div className="flex flex-col items-start mx-10">
            <label className="block font-bold text-white">비밀번호</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호"
              className="w-80 bg-white rounded-lg px-3 py-2"
            ></input>
          </div>

          {/* 이름 */}
          <div className="flex flex-col items-start mx-10">
            <label className="block font-bold text-white">이름</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="이름"
              className="w-80 bg-white rounded-lg px-3 py-2"
            ></input>
          </div>

          {/* 생년월일 */}
          <div className="flex flex-col items-start mx-10">
            <label className="block font-bold text-white">생년월일</label>
            <input
              id="birthday"
              type="text"
              name="birthday"
              placeholder="생년월일 8자리"
              className="w-80 bg-white rounded-lg px-3 py-2"
            ></input>
          </div>

          {/* 전화번호 */}
          <div className="flex flex-col items-start mx-10">
            <label className="block font-bold text-white">전화번호</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="전화번호"
              className="w-80 bg-white rounded-lg px-3 py-2"
            ></input>
          </div>

          {/* 회원가입 버튼 */}
          <div className="text-center">
            <input
              type="submit"
              value={"회원 가입"}
              className="text-white w-60 h-10 bg-button mt-4 rounded-2xl hover:bg-button-hover hover:cursor-pointer hover:font-bold"
            ></input>
          </div>
        </form>
      </div>
    </main>
  );
}
