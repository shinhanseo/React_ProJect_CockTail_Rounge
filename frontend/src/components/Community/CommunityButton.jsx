export default function CommunityButton() {
  const addPost = (e) => {
    e.preventDefault();
    // 글 작성 로직 추가 예정
  };

  return (
    <form onSubmit={addPost} className="mt-6">
      <button
        type="submit"
        className="text-white ml-5 px-4 py-2 bg-[#ff917D] rounded-2xl hover:bg-[#FF6B6B] hover:cursor-pointer"
      >
        글 작성
      </button>
    </form>
  );
}
