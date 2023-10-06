import HomePage from "./HomePage";
import SignInModal from "./components/Authentication/SignInModal/SignInModal";
import { SignOutModal } from "./components/Authentication/SignOutModal/SignOutModal";
import { ShowMoreModal } from "./components/Modal/ShowMoreModal";
import { EditNoteModal } from "./components/Modal/EditNoteModal/EditNoteModal";
function App() {


  return (
    <>
      <div className="App">
        {/* <EditNoteModal /> */}
        {/* <ShowMoreModal /> */}
        <HomePage />
        {/* <SignInModal/> */}
        {/* <SignOutModal /> */}
      </div>
    </>
  )
}

export default App
