import { PropsWithChildren} from "react";
const MainContainer=({children}:PropsWithChildren)=>{
    return(
        <main>
            {children}
        </main>
    )
}
export default MainContainer;