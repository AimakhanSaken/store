import Home from "./routes/home/home.components";
import Hats from "./routes/hats/hats.components";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";



const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/> 
        <Route path="hats" element={<Hats />}/>
        <Route path="sign-in" element={<SignIn />}/>
      </Route>    
    </Routes>
  );
};

export default App;
