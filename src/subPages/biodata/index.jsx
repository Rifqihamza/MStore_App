const Biodata = () => {
  const user = {
    imgProfile: "/avatar.svg",
    username: "Muhammad Rifqi Hamza",
    born: "27 December 2100",
    gender: "Laki-laki",
    angkatan: 11,
    coin: 1000,
  };
  return (
    <>
      <section id="desktopView">
        <div className="sm:block hidden">
          <div className="flex flex-row gap-8 mx-4 p-5 ">
            <div
              id="containerImage"
              className="rounded-lg shadow-inner shadow-zinc-600 p-4 w-1/4 h-fit"
            >
              {/* Image */}
              <img
                src={user.imgProfile}
                className="aspect-square w-full h-full mx-auto object-contain rounded-lg p-4"
                alt=""
              />
              {/* Button Change Picture */}
              <button className="text-sm py-2 text-white w-full mx-auto border rounded-md hover:bg-white hover:text-black uppercase tracking-wide">
                Change Picture
              </button>
              {/* Subtitle Card */}
              <div id="subtitle">
                <p className="text-sm text-white/80 py-4">
                  Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi
                  file yang diperbolehkan: .JPG .JPEG .PNG
                </p>
              </div>
            </div>
            {/* Information Data */}
            <div id="title">
              <h1 className="text-white/80 text-2xl">Ubah Biodata Diri</h1>
              <table className="text-white flex flex-row justify-center items-center gap-10 mt-4">
                <tbody>
                  <tr>Nama</tr>
                  <tr>Tanggal Lahir</tr>
                  <tr>Jenis Kelamin</tr>
                  <tr>Angkatan</tr>
                </tbody>
                <tbody>
                  <tr>{user.username}</tr>
                  <tr>{user.born}</tr>
                  <tr>{user.gender}</tr>
                  <tr>{user.angkatan}</tr>
                </tbody>
                <tbody>
                  <tr>
                    <button className="text-white/70 hover:text-white">
                      Change
                    </button>
                  </tr>
                  <tr>
                    <button className="text-white/70 hover:text-white">
                      Change
                    </button>
                  </tr>
                  <tr>
                    <button className="text-white/70 hover:text-white">
                      Change
                    </button>
                  </tr>
                  <tr>
                    <button className="text-white/70 hover:text-white">
                      Change
                    </button>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="mobileViews">
        <div className="block sm:hidden">
        <div className="flex flex-col gap-8 mx-4 p-5 ">
            <div
              id="containerImage"
              className="rounded-lg shadow-inner shadow-zinc-600 p-4 w-full h-fit"
            >
              {/* Image */}
              <img
                src={user.imgProfile}
                className="aspect-square w-full h-full mx-auto object-contain rounded-lg p-4"
                alt=""
              />
              {/* Button Change Picture */}
              <button className="text-sm py-2 text-white w-full mx-auto border rounded-md hover:bg-white hover:text-black uppercase tracking-wide">
                Change Picture
              </button>
              {/* Subtitle Card */}
              <div id="subtitle">
                <p className="text-sm text-white/80 py-4">
                  Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi
                  file yang diperbolehkan: .JPG .JPEG .PNG
                </p>
              </div>
            </div>
            {/* Information Data */}
            <div id="title">
              <h1 className="text-white/80 text-2xl">Ubah Biodata Diri</h1>
              <table className="text-white flex flex-row justify-center items-center gap-10 mt-4">
                <tbody>
                  <tr>Nama</tr>
                  <tr>Tanggal Lahir</tr>
                  <tr>Jenis Kelamin</tr>
                  <tr>Angkatan</tr>
                </tbody>
                <tbody>
                  <tr>{user.username}</tr>
                  <tr>{user.born}</tr>
                  <tr>{user.gender}</tr>
                  <tr>{user.angkatan}</tr>
                </tbody>
                <tbody>
 
 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Biodata;
