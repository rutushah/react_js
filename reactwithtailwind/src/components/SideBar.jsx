import { SideBarToggle } from "./icons/sideBarToggle";

export function SideBar({ sidebarOpen, setSidebarOpen }) {
  if (!sidebarOpen) {
    return (
      <div className="fixed top-0 left-0">
        <div
          className="cursor-pointer bg-white hover:bg-slate-200"
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        >
          <SideBarToggle />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex">
        <div className="transition-all ease-in-out duration-150 bg-yellow-200 hover:bg-green-200 w-72 md:w-96 h-screen fixed top-0 left-0 md:relative">
          <div
            className="cursor-pointer hover:bg-slate-200"
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}
          >
            <SideBarToggle />
          </div>
        </div>
      </div>
    );
  }
}