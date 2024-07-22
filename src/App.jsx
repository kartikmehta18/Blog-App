import './App.css'
import appwriteUrl from './conf/conf'
function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL); this is for react app
  console.log(appwriteUrl);
  return (
    <>
      <h1>Blog App with appwrite</h1>
    </>
  )
}

export default App
