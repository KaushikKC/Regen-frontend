import React, { ReactNode, useState } from 'react'


const menus = [
    {
      label: "Dashboard",
      path: "/Dashboard",
    },
    {
      label: "",
      path: "/"
    },
    {
      label: "",
      path: "/"
    },
    {
      label: "",
      path:"/"
    },
    {
      label: "",
      path: "/",
    },
  ];

function DefaultLayout({content}:any) {
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const toggleSubMenu = (index: any) => {
      setActiveSubMenu(activeSubMenu === index ? null : index);
    };
  
    const handleLogout = () => {};
  
    return (
      <div className="w-full h-max flex relative">
        <div className="w-[200px] fixed h-[100vh] z-[100] bg-[#6BA865]">
          <div className="text-xl text-white">
            <p>REGEN</p>
          </div>
          <div className="mt-[50px]">
            {menus.map((data, index) => (
              <>
                <div key={index} className="flex items-center mr-[5px] mb-[15px] flex-col ml-[50px] text-left w-fit">
                  {data.path ? (
                    <a href={data.path} className="text-white flex items-center mb-[15px]">
                      <p className="mr-[3px] text-[16px] font-semibold text-white"> {data.label}</p>
                    </a>
                  ) : (
                    <div
                      className="text-white flex items-center mb-[15px]"
                      onClick={() => toggleSubMenu(index)}
                    >
                      <p className="mr-[3px] text-[16px] font-semibold text-white"> {data.label}</p>
                      <span className="ml-[5px] text-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                        >
                          <path
                            d="M0.428467 1.30078L5.6999 6.57221C5.73837 6.61321 5.78484 6.64588 5.83644 6.66822C5.88804 6.69056 5.94367 6.70208 5.9999 6.70208C6.05612 6.70208 6.11175 6.69056 6.16335 6.66822C6.21495 6.64588 6.26142 6.61321 6.2999 6.57221L11.5713 1.30078"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      {/* SVG and other elements */}
                    </div>
                  )}
                </div>
  
                {/* <div>
                  {activeSubMenu === index && data.submenu && (
                    <div>
                      {data.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.path}
                          className="flex justify-start items-center mr-[5px] mb-[15px] text-white text-left ml-[50px] w-fit"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div> */}
              </>
            ))}
  
            {/* <div className="mt-[40px]">
              <div>
                <p className="ml-[50px] text-lg font-bold text-white" onClick={handleLogout}>
                  {" "}
                  Logout
                </p>
                <span> </span>
              </div>
            </div> */}
          </div>
        </div>
  
        <div className="relative left-[204] w-[calc(100vw-204px)]  p-[58px 48px]">{content}</div>
      </div>
    );
  };
  

export default DefaultLayout