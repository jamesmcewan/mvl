import Comic from '../Comic/Comic'

const ComicsItem = (comic) => <Comic {...comic} key={comic.id} />

export default ComicsItem
