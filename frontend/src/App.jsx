
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {
 

  return (
    <>
    <h1>Welcome to the app</h1>
    <SignedOut>
      <SignInButton mode="modal">
        <button>Sign up</button>
      </SignInButton>
    </SignedOut>
    <SignedIn>
      <SignOutButton/>
    </SignedIn>
   
    <UserButton/>

    



    </>
  )
}

export default App
