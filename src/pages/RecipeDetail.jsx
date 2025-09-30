// RecipeDetail.jsx
import { useParams, NavLink } from "react-router-dom";
import { cocktails } from "../data/cocktails";

export default function RecipeDetail() {
  const { slug } = useParams();
  const cocktail = cocktails.find(c => c.slug === slug);

  return (
    <article className="text-white max-w-4xl mx-auto flex gap-6">
			<div className="flex-1">
				<NavLink to="/recipe" className="text-sm underline text-white/70">
					← 목록으로
				</NavLink>

				<h1 className="text-2xl font-bold mt-2 mb-4">{cocktail.name}</h1>
				<p className="text-white/70 mb-4">도수: ~{cocktail.abv}%</p>

				<section className="mb-6">
					<h2 className="text-xl mb-2">태그</h2>
					<ul className="flex gap-2 flex-wrap">
						{cocktail.tags.map(tag => (
							<li key={tag} className="px-2 py-1 bg-white/10 rounded-full text-sm">
								{tag}
							</li>
						))}
					</ul>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-semibold mb-2">재료</h2>
					<ul className="list-disc pl-6 space-y-1">
						{cocktail.ingredients.map((ing, i) => (
							<li key={i}>{ing.name} — {ing.amount}</li>
						))}
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-2">만드는 법</h2>
					<ol className="list-decimal pl-6 space-y-1">
						{cocktail.steps.map((step, i) => (
							<li key={i}>{step}</li>
						))}
					</ol>
				</section>
			</div>

			<div className="w-64 shrink-0">
				<img
					src={cocktail.image}
					alt={cocktail.name}
					className="rounded-xl object-cover w-full h-auto"
				/>
			</div>
		</article>
  );
}
