import { Link, Outlet, useNavigate } from "react-router-dom";
import NavigateBar from "../../components/navbar";
import {
  FaArrowLeft,
  FaBars,
  FaChevronDown,
  FaCoins,
  FaPen,
  FaShield,
  FaStore,
  FaWallet,
} from "react-icons/fa6";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LuBellRing } from "react-icons/lu";
import { RiLogoutBoxLine } from "react-icons/ri";

const ProfileSetting = () => {
  const navigate = useNavigate();

  const user = {
    imgProfile: "/avatar.svg",
    username: "Muhammad Rifqi Hamza",
    number: "08123456789",
    email: "userEmail@gmail.com",
    coin: 1000,
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const handleBack = () => {
    navigate("/regular");
  };
  return (
    <>
      <div className="sm:block hidden">
        <NavigateBar />
      </div>
      <section
        id="profileSetting"
        className="sm:px-10 sm:py-4 px-4 py-6 hidden sm:flex sm:flex-row flex-col justify-center gap-4 h-full w-full"
      >
        <aside className="sm:w-1/4 w-full h-full relative text-white">
          <div className="shadow-inner shadow-white/10 rounded-lg p-4 h-full bg-white/10 backdrop-blur-md">
            {/* Profile */}
            <div className="flex items-center space-x-4">
              <img
                src={user.imgProfile}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="w-[10rem]">
                <h1 className="text-sm font-semibold truncate">
                  {user.username}
                </h1>
              </div>
            </div>
            <hr className="mt-4 mb-2" />
            {/* End Profile */}
            {/* Coin */}
            <div className="flex flex-row items-center justify-between mt-4">
              <h1>MitraCoins : </h1>
              <p className="text-sm text-yellow-400 flex flex-row items-center gap-3">
                {user.coin} <FaCoins />
              </p>
            </div>
            {/* End Coin */}
            <hr className="mt-4 mb-2" />
            {/* Kotak Masuk Dropdown */}
            <Menu as="div" className="dropDown mt-4">
              <MenuButton className="flex flex-row gap-1 items-center">
                Kotak Masuk <FaChevronDown className="text-sm" />
              </MenuButton>
              <MenuItems
                as="div"
                className="mt-2 flex flex-col gap-2 items-start px-2 py-1"
              >
                <MenuItem>
                  <button className="text-sm px-2 py-1 hover:bg-zinc-700 w-full text-left rounded-md duration-300">
                    Update
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="text-sm px-2 py-1 hover:bg-zinc-700 w-full text-left rounded-md duration-300">
                    Chat
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
            {/* End Pembelian Dropdown */}
            <hr className="mt-4 mb-2" />
            {/* Pembelian Dropdown */}
            <Menu as="div" className="dropDown mt-4">
              <MenuButton className="flex flex-row gap-1 items-center">
                Pembelian <FaChevronDown className="text-sm" />
              </MenuButton>
              <MenuItems
                as="div"
                className="mt-2 flex flex-col gap-2 items-start px-2 py-1"
              >
                <MenuItem>
                  <Link
                    to="/profileSetting/pembayaran"
                    className="text-sm px-2 py-1 hover:bg-zinc-700 w-full text-left rounded-md duration-300"
                  >
                    Menunggu Pembayaran
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/profileSetting/daftarTransaksi"
                    className="text-sm px-2 py-1 hover:bg-zinc-700 w-full text-left rounded-md duration-300"
                  >
                    Daftar Transaksi
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
            {/* End Pembelian Dropdown */}
            <hr className="mt-4 mb-2" />
            {/* My Profile Dropdown */}
            <Menu as="div" className="dropDown mt-4">
              <MenuButton className="flex flex-row gap-1 items-center">
                My Profiles <FaChevronDown className="text-sm" />
              </MenuButton>
              <MenuItems
                as="div"
                className="mt-2 flex flex-col gap-2 items-start px-2 py-1"
              >
                <MenuItem>
                  <button className="text-sm px-2 py-1 hover:bg-zinc-700 w-full text-left rounded-md duration-300">
                    Barang Favorit
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="text-sm px-2 py-1 hover:bg-zinc-700 w-full text-left rounded-md duration-300">
                    Setting
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
            {/* End My Profile Dropdown */}
          </div>
        </aside>
        <main
          id="desktopView"
          className="shadow-inner shadow-white/10 rounded-lg backdrop-blur-md bg-white/10 py-2 px-4 w-full h-full"
        >
          <header className="border-b border-white/20 sm:py-2 sm:px-10 py-2 px-2 sm:w-full w-fit">
            <ul className="flex flex-row sm:items-center items-start sm:justify-between gap-8 text-white whitespace-nowrap">
              <Link to="/profileSetting/bioData">Biodata Diri</Link>
              <Link to="/profileSetting/daftarTransaksi">Daftar Transaksi</Link>
              <Link to="/profileSetting/pembayaran">Pembayaran</Link>
              <Link to="/profileSetting/topUp">Topup</Link>
              <Link to="/profileSetting/notifikasi">Notifikasi</Link>
              <Link to="/profileSetting/security">Keamanan</Link>
            </ul>
          </header>

          {/* Konten yang berubah */}
          <div id="container" className="container">
            <Outlet />
          </div>
        </main>
      </section>
      {/* End Desktop View */}

      {/* ================================================================================================================================================================== */}

      {/* Mobile View */}
      <main id="mobileView" className="sm:hidden flex flex-col gap-10">
        {/* Navigation */}
        <div id="navigation">
          <nav className="text-white text-xl px-4 py-3 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-4">
              <button onClick={handleBack}>
                <FaArrowLeft />
              </button>
              <h1>My Account</h1>
            </div>
            <FaBars />
          </nav>
        </div>
        {/* Profile */}
        <div className="px-6 flex flex-row items-center justify-between">
          <div className="flex flex-row gap-6 text-white items-center justify-between">
            <img src={user.imgProfile} className="w-12" alt="" />
            <div id="title">
              <h1 className="text-white text-sm">{user.username}</h1>
              <p className="text-white/60 text-xs">{user.number}</p>
              <p className="text-white/60 text-xs">{user.email}</p>
            </div>
          </div>
          <FaPen className="text-white" />
        </div>
        {/* Mitra Coins */}
        <div className="text-white flex flex-row justify-between items-center px-6">
          <h1>MitraCoins</h1>
          <p className="flex gap-4 items-center text-yellow-400">
            {user.coin}
            <FaCoins />
          </p>
        </div>
        {/* Pengaturan Akun */}
        <div className="text-white px-4">
          <h1 className="text-white/70">Account Setting</h1>
          <ul className="mt-3 space-y-4">
            <Link
              to="/daftarTransaksi"
              className="flex flex-row gap-4 items-center"
            >
              <FaStore className="text-2xl" />
              <div>
                <h1>Daftar Transaksi</h1>
                <p className="text-white/60 text-xs">
                  Transaksi yang sudah kamu lakukan
                </p>
              </div>
            </Link>
            <Link to="/pembayaran" className="flex flex-row gap-4 items-center">
              <FaWallet className="text-2xl" />
              <div>
                <h1>Pembayaran</h1>
                <p className="text-white/60 text-xs">Pilihan pembayaran</p>
              </div>
            </Link>
            <Link to="/topup" className="flex flex-row gap-4 items-center">
              <FaCoins className="text-2xl" />
              <div>
                <h1>Top Up</h1>
                <p className="text-white/60 text-xs">
                  Menu untuk Top Up MitraCoins
                </p>
              </div>
            </Link>
            <Link to="/notifikasi" className="flex flex-row gap-4 items-center">
              <LuBellRing className="text-2xl" />
              <div>
                <h1>Notifikasi</h1>
                <p className="text-white/60 text-xs">Segala jenis notifikasi</p>
              </div>
            </Link>
            <Link to="keamanan" className="flex flex-row gap-4 items-center">
              <FaShield className="text-2xl" />
              <div>
                <h1>Keamanan</h1>
                <p className="text-white/60 text-xs">
                  Atur semua keamanan untuk akun mu
                </p>
              </div>
            </Link>
            <Link
              onClick={handleLogout}
              className="flex flex-row gap-4 items-center"
            >
              <RiLogoutBoxLine className="text-2xl" />
              <div>
                <h1>Logout</h1>
                <p className="text-white/60 text-xs">Keluar dari akunmu</p>
              </div>
            </Link>
          </ul>
        </div>
      </main>
    </>
  );
};

export default ProfileSetting;
