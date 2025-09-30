import {useOutletContext} from "react-router-dom";
import CommunityPreView from './CommunityPreView';
import Recommend from './Recommend';

function Home(){
  const {posts, setPosts} = useOutletContext();

  return (
    <main className="px-4 py-8 text-white max-w-6xl mx-auto">
      <div className="grid md:grid-rows-2 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
          <h2 className="text-xl font-bold mb-2">컨텐츠 프리뷰1</h2>
        </div>
        
        {/* 2사분면: 오늘의 한잔 추천 */}
        <Recommend />
        <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
          <h2 className="text-xl font-bold mb-2">컨텐츠 프리뷰2</h2>
        </div>
        {/* 2사분면: 커뮤니티 요약 */}
        <CommunityPreView posts={posts} />
      </div>
    </main>
  );
}


export default Home;