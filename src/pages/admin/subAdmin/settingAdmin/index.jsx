import { FaBell, FaMessage } from "react-icons/fa6";

const SettingsAdmin = () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <section id="imgCard" className="space-y-4">
          <div className="bg-white/10 backdrop-blur-md rounded-lg w-[300px] h-fit p-5">
            <img src="../public/avatar.svg" className="w-1/2 h-full mx-auto" alt="" />
            <div id="titleCard" className="text-center p-4 space-y-2 w-full">
              <h1 className="text-white tracking-wide">Admin MStore</h1>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-5">
            <ul>
              <li className="text-white flex flex-row gap-3 items-center p-2">
                <FaBell className="text-red-600" /> <a href="">Notification</a>{" "}
              </li>
              <li className="text-white flex flex-row gap-3 items-center p-2">
                <FaMessage className="text-green-600" /> <a href="">Messages</a>{" "}
              </li>
            </ul>
          </div>
        </section>
        <section id="profileDetails" className="w-full h-full">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-5">
            <h1 className="text-2xl text-white tracking-wide uppercase font-semibold">
              Profile Details
            </h1>
            <form action="" className="flex flex-row gap-4">
              <div className="flex flex-col gap-4 w-full">
                <label
                  htmlFor="firstName"
                  className="text-white text-xs tracking-wide  font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md outline-none text-white border border-zinc-800 focus:border-zinc-500 duration-300 focus:[box-shadow:0_0_2px_2px_#fff] w-full"
                />
                <label
                  htmlFor="lastName"
                  className="text-white text-xs tracking-wide  font-semibold"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md outline-none text-white border border-zinc-800 focus:border-zinc-500 duration-300 focus:[box-shadow:0_0_2px_2px_#fff] w-full"
                />
                <label
                  htmlFor="email"
                  className="text-white text-xs tracking-wide  font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md outline-none text-white border border-zinc-800 focus:border-zinc-500 duration-300 focus:[box-shadow:0_0_2px_2px_#fff] w-full"
                />

                <label
                  htmlFor="phoneNumber"
                  className="text-white text-xs tracking-wide  font-semibold"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  inputMode="number"
                  className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md outline-none text-white border border-zinc-800 focus:border-zinc-500 duration-300 focus:[box-shadow:0_0_2px_2px_#fff] w-full"
                />
                <label
                  htmlFor="password"
                  className="text-white text-xs tracking-wide  font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md outline-none text-white border border-zinc-800 focus:border-zinc-500 duration-300 focus:[box-shadow:0_0_2px_2px_#fff] w-full"
                />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <label
                  htmlFor="firstName"
                  className="text-white text-xs tracking-wide  font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md outline-none text-white border border-zinc-800 focus:border-zinc-500 duration-300 focus:[box-shadow:0_0_2px_2px_#fff] w-full"
                />
                <label
                  htmlFor="firstName"
                  className="text-white text-xs tracking-wide  font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md outline-none text-white border border-zinc-800 focus:border-zinc-500 duration-300 focus:[box-shadow:0_0_2px_2px_#fff] w-full"
                />
                <label
                  htmlFor="firstName"
                  className="text-white text-xs tracking-wide  font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md outline-none text-white border border-zinc-800 focus:border-zinc-500 duration-300 focus:[box-shadow:0_0_2px_2px_#fff] w-full"
                />
                <label
                  htmlFor="firstName"
                  className="text-white text-xs tracking-wide  font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md outline-none text-white border border-zinc-800 focus:border-zinc-500 duration-300 focus:[box-shadow:0_0_2px_2px_#fff] w-full"
                />
                <label
                  htmlFor="firstName"
                  className="text-white text-xs tracking-wide  font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md outline-none text-white border border-zinc-800 focus:border-zinc-500 duration-300 focus:[box-shadow:0_0_2px_2px_#fff] w-full"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default SettingsAdmin;
