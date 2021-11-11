export default function Button({handleClick}) {
     return (
        <button type="button" onClick={(handleClick)}>Load more</button>
    )
}

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });