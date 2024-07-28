import HomeFifthPage from "./fifth/fifith";
import HomeFirstPage from "./first/first";
import HomeFourthPage from "./fourth/fourth";
import HomeThirdPage from "./third/third";


const Home = () => {
    return (
        <div className="home">
            <HomeFirstPage></HomeFirstPage>
            <HomeThirdPage></HomeThirdPage>
            <HomeFourthPage></HomeFourthPage>
            <HomeFifthPage></HomeFifthPage>
        </div>
    )
}
export default Home;