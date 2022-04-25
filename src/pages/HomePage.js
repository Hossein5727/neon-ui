import avatarImg from "../assets/images/Avatar.svg";
import Header from "../components/Header";

function HomePage() {
  return (
    <div className="bggradinet border-none outline-none rounded-2xl ">
      <Header />
      <div className="w-[full] flex justify-center items-center px-3 py-2">
        <img className="" src={avatarImg} alt="avatar" />
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-4 mt-4 px-8">
        <h2 className="font-[700] text-[34px] leading-[46px] tracking-[-0.3px] text-center textWhite">
          Watch movies in Virtual Reality
        </h2>

        <p className="font-[400] text-[16px] leading-[22px] tracking-[-0.3px] text-center textWhite">
          Download and watch offline wherever you are
        </p>

        <button className="w-[160px] h-[41px] text-white rounded-lg bordergradient">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default HomePage;
