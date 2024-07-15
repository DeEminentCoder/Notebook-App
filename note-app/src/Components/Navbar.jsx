const Navbar = () => {
  return (
    <>
      <div className="top-nav rounded-3 border p-2 m-1 shadow">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo shadow p-2 rounded-5">
            <img src="sxx.png" alt="" width={30} />
          </div>
          <div className="top-nav-right-part d-flex gap-2">
            <button className="btn btn-sm btn-light p-0 shadow-sm border-0"><img src="eds.png" alt="" width={30}/></button>
            <button className="btn btn-sm border-0">Simeon Kenny</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
