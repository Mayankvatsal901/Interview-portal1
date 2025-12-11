import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

/**
 * Render the top-level application UI with Clerk authentication controls.
 *
 * Renders a header, a modal-based "Sign up" button visible when signed out,
 * a sign-out button visible when signed in, and a persistent user/profile button.
 *
 * @returns {JSX.Element} The rendered application UI.
 */
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