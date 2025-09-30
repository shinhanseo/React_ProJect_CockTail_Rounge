import {Link} from "react-router-dom";

function Login(){
  return(
    <main>
      <div className="w-100 h-70 border border-white/10 text-white bg-white/5 rounded-4xl">
        <p className="font-bold text-3xl text-[#17BEBB] text-center pt-5">CockTail Rounge🍹</p>
        <form className="text-center mt-4 text-gray-900 placeholder-gray-500">
          <div>
            <input type="text" name="id" placeholder="아이디를 입력하세요." 
                   className="bg-white w-60 h-10 pl-3 ">
            </input>
          </div>
          <div>
            <input type="password" name="password" placeholder="비밀번호를 입력하세요." 
                   className="bg-white mt-5 w-60 h-10 pl-3">
            </input>
          </div>
          
          <input type="submit" value={"로그인 하기"} className="text-white w-60 h-10 bg-[#ff917D] mt-4 rounded-2xl hover:bg-[#FF6B6B] hover:cursor-pointer"></input>
        </form>
        <div className="text-white text-center text-sm mt-2">
            회원이 아니신가요? <span className="text-[#ff917D] hover:cursor-pointer hover:text-[#FF6B6B]"><Link to="/signup">회원가입하기</Link></span>
        </div>
      </div>
    </main>
    )
}

export default Login;