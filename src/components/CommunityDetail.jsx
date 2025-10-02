import { useParams, NavLink } from 'react-router-dom';
import { posts } from '../data/posts';

function CommunityDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  return (
    <article className="w-[80%] border border-white/10 text-white bg-white/5 rounded-2xl mx-auto p-6 mt-12">
      <div className="flex justify-between items-start">
        {/* 왼쪽 영역(목록으로, 제목 작성자, 작성일자 출력) */}
        <div>
          <NavLink to="/community" className="text-sm text-white/70 hover:font-bold">
            ← 목록으로
          </NavLink>
          <section className="text-3xl mt-2">{post.title}</section>
          <section className="text-gray-500 text-sm">작성자 : {post.user}</section>
          <section className="text-gray-500 text-sm">{post.date}</section>
        </div>

        {/* 오른쪽 영역(태그 출력) */}
        <div>
          <h2 className="text-xl mb-2">태그</h2>
          <ul className="flex gap-2 flex-wrap justify-end">
            {post.tags.map(tag => (
              <li key={tag} className="px-2 py-1 bg-white/10 rounded-full text-sm">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 본문 */}
      <div className="mt-6 font-bold">
        {post.body}
      </div>
    </article>
  );
}

export default CommunityDetail;
