import CommunityHeader from "@/components/Community/CommunityHeader";
import CommunityList from "@/components/Community/CommunityList";
import CommunityButton from "@/components/Community/CommunityButton";

export default function Community() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center pt-10 px-4 ">
      <ul className="w-full max-w-[900px] text-white max-h-[80vh] overflow-y-auto border-white/10 rounded-lg">
        {/* 커뮤니티 헤더 */}
        <CommunityHeader />
        {/* 글 목록 */}
        <CommunityList />
      </ul>
      {/* 글 작성 버튼 */}
      <CommunityButton />
    </div>
  );
}
