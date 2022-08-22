
import {useState, useEffect} from 'react'


// 1. useEffect(callback)
// - gọi callback mỗi khi component re-render
// - gọi callback sau khi component them element
// 2. useEffect(callback, [])
// - chỉ gọi 1 lần sau khi component được mounted
// 3. useEffect(callback, [deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi

// ==============================
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted

const tabs = ['posts', 'albums', 'comments']

function Content() {
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  const [showGoToTop, setShowGoToTop] = useState(false)

  console.log(showGoToTop)

  useEffect(() => {
    console.log('title change')
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then( res => res.json())
      .then(posts => {
        setPosts(posts)
      })
  }, [type])

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 200) {
        // show
        setShowGoToTop(true)
      } else {
        // hide
        setShowGoToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)


    // clear function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <div>
      {tabs.map((tab, i) => (
        <button
          style={type === tab ? {
            color: '#fff',
            background: '#333'
          } : {

          }}
          onClick={() => setType(tab)}
          key={i}>{tab}
        </button>
      ))}
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button style={{
          position: 'fixed',
          right: 20,
          bottom: 20,
        }}>
          Go to Top
        </button>
      )}
    </div>
  )
}


export default Content