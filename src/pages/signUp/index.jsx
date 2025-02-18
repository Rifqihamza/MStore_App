import { Link } from "react-router-dom";
const SignUpPage = () => {
  return (
    <>
      <div id="containerSignup" className="p-6 sm:w-1/2 w-full">
        <div id="title" className="flex flex-row justify-between">
          <div className="">
            <h1 className="font-bold tracking-wider text-2xl text-white">
              MitraStore
            </h1>
            <p className="text-white text-sm">Daftarkan akunmu disini!</p>
          </div>
          <img
            src="https://smkind-mm2100.sch.id/wp-content/uploads/2022/10/MM2100-LOGO-SMK-Mitra-Industri-MM2100-PNG.png"
            className="w-12 h-full shadow-md rounded-full"
          />
        </div>

        <div
          id="innerContainer"
          className=" flex flex-row justify-center items-center gap-8 sm:px-4 px-1 mt-8"
        >
          {/* Image */}
          <img src="public/signup.png" className="w-1/2 mx-auto sm:block hidden" alt="" />
          {/* Form */}
          <div id="form" className="flex flex-col w-full">
            <button className="w-full bg-white px-0 py-3 rounded-xl hover:bg-white/60 duration-300 flex flex-row items-center justify-center gap-4">
              <img src="public/googleLogo.svg" className="w-6" alt="" />
              Sign Up With Google
            </button>
            <div className="p-4">
              <h1 className="text-center text-white">Atau</h1>
            </div>
            <form action="" className="">
              <input
                type="email"
                placeholder="Masukkan Emailmu"
                className="signUpInput placeholder:text-white px-4 py-3 rounded-lg"
              />
              <button className="text-white w-full border border-white p-2 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 uppercase tracking-wider">
                Daftar
              </button>
            </form>
            <div className="text-white text-center mt-6">
              <p className="text-xs">
                Sudah memiliki akun MStore? <Link to="/" className="text-blue-400 hover:underline">Masuk</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
