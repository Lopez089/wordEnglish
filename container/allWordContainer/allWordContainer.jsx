export const AllWordContainer = ({ words }) => {
	return (
		<ul aria-label='words-heading'>
			{
				words.map(word => {
					return (
						<li key={word.key}>{word.wordEnglish}</li>
					)
				})
			}
		</ul>
	)
}