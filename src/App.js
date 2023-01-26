import React, { useRef, useState } from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import { Banner, Categories, Footer, Header } from "./components/index";
import useOnClickOutside from "./hooks/useOnClickOutside";
import KatalogPage from './components/page/KatalogPage'
function App() {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setOpen(false))
  return (
    <>
      <GlobalStyles open={open} setOpen={setOpen}/>
      <Header  open={open} setOpen={setOpen}/>
      <Categories open={open} customRef={ref}/>
      <Banner/>
      <KatalogPage/>
      <Footer />
    </>
  );
}

export default App;
