import "./App.css";
import { FiBriefcase } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { LiaCoinsSolid } from "react-icons/lia";
import { BsDot } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { RiUserFollowLine } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import { PiHandCoins } from "react-icons/pi";
import { RiNotification3Line } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import figma from "../src/assets/figma.jpg";
import profile from "../src/assets/profile.jpg";
import adobe from "../src/assets/adobe.jpg";
import adobeillu from "../src/assets/adobeillu.jpg";

function App() {
  return (
    <div className="App w-[1728px] h-[1326px] top-[-700px] left-[-390px] bg-[#ffffff]">
      <header className="App-header w-[1728px] h-[109px] bg-[#ffffff] shadow-custom-shadow">
        <div className="header-container flex w-[1664px] h-[61px] mx-auto my-auto top-[24px] left-[40px] gap-[400px]">
          <div className="logo w-[100px] h-[61px] py-[9px] px-[28px] bg-[#E7E7E7]">
            <span className="logo-span w-[47px] h-[27px] text-[#DC4A2D] leading-[27px] text-[20px] font-Satoshi font-[700]">
              Logo
            </span>
          </div>
          <div className="header-left font-general-sans flex w-[538px] h-[74px] top-[17px] left-[595px] rounded-[36px] border-[0.5px] bg-[#FFFFFF] border-[#D1D1D1] items-center ml-[20px]">
            <button className="header-button flex flex-row items-center justify-center w-[109px] h-[58px] top-[8px] left-[8px] rounded-[49px] border-[2px] bg-[#DC4A2D] border-[#FCB4A5] ml-[5px]">
              <FiBriefcase className="briefCase-icon w-[20px] h-[18px] mt-[3px] left-[2px] text-[#FFFFFF]" />
              <div className="job-text h-[27px] w-[47px] text-[#FFFFFF] leading-[27px] text-[20px] font-[500]">
                Jobs
              </div>
            </button>
            <button className="header-button flex flex-row  justify-center w-[128px] h-[27px] top-[24px] left-[182px] gap-[8px] mx-auto my-auto">
              <FiMessageSquare className="message-icon  w-[18px] h-[18.46px] mt-[6px] left-[3px]  text-[#B0B0B0]" />
              <div className="message-text h-[96px] w-[27px] text-[#B0B0B0] leading-[27px] text-[20px] font-[500]">
                Messages
              </div>
            </button>
            <button className="header-button flex w-[125px] h-[27px] top-[24px] left-[390px] gap-[8px] mx-auto my-auto">
              <PiHandCoins className="payment-icon h-[20px] w-[20px] mt-[6px] left-[3px]  text-[#B0B0B0]" />
              <div className="payments-text h-[93px] w-[27px] text-[#B0B0B0] leading-[27px] text-[20px] font-[500]">
                Payments
              </div>
            </button>
          </div>
          <div className="header-right w-[134px] h-[60px] gap-[16px] p-[10px] ml-[100px] flex flex-row">
            <button className="header-button h-[32px] w-[32px]">
              <RiNotification3Line className="notification-icon w-[32px] h-[32px] mt-[5px]" />
            </button>
            <button className="header-button h-[40px] w-[70px] mx-auto my-auto gap-[6px] flex flex-row">
              <div className="profile-icon h-[40px] w-[40px] rounded-[60px]">
                <img
                  src={profile}
                  alt="profile"
                  className="profile-icon h-[40px] w-[40px] rounded-[60px]"
                />
              </div>
              <div>
                <RiArrowDropDownLine className="drop-icon h-[40px] w-[25px]" />
              </div>
            </button>
          </div>
        </div>
      </header>
      <main className="main-content ml-[100px]">
        <div className="job-preview font-general-sans w-[1628px] h-[67px] top-[176px] border-[1px] bg-[#ffffff] border-[#E7E7E7]">
          <div className="job-preview-box w-[690px] h-[27px] top-[129px] left-[100px] gap-[72px] mt-3 flex flex-row">
            <div>
              <div className="job-preview-button h-[27px] w-[135px] text-[20px] font-[600] leading-[27px] text-[#DC4A2D] ">
                Job preview
              </div>
              <div className="w-[65px] h-[2px] ml-[20px] mt-[20px] bg-[#DC4A2D]"></div>
            </div>
            <div className="job-preview-button h-[27px] w-[101px] text-[20px] font-[500] leading-[27px] text-[#888888] ml-[25px]">
              Applicants
            </div>
            <div className="job-preview-button h-[27px] w-[60px] text-[20px] font-[500] leading-[27px] text-[#888888] ml-[25px]">
              Match
            </div>
            <div className="job-preview-button h-[27px] w-[96px] text-[20px] font-[500] leading-[27px] text-[#888888] ml-[25px]">
              Messages
            </div>
          </div>
        </div>
        <div className="job-details w-[1728px] h-[1152px] top-[176px] flex">
          <div className="left-part w-[1319px] h-[1152px] bg-[#ffffff]">
            <div className="job-title w-[1319px] h-[166px] ">
              <div className="info w-[623px] h-[98px] mt-[36px] left-[100px] gap-[24px] ">
                <div className="info-top w-[623px] h-[47px] gap-[12px] flex flex-row">
                  <div className="heading w-[412px] h-[47px] font-general-sans font-[600] text-[35px] leading-[47.25px] text-[#3D3D3D] ">
                    Senior Product Designer
                  </div>
                  <div className=" mt-[-105px] items-center">
                    <span className="posted w-[117px] h-[19px] font-[500] font-general-sans text-[14px] leading-[18.9] text-[#888888]">
                      <i className="far fa-clock"></i> posted 2 days ago
                    </span>
                    <span className="status text-sm w-[57px] h-[22px] border-[1px] bg-[#ECFDF3] border-[#ABEFC6] text-[#067647] font-[500] text-[12px] rounded-lg ml-8">
                      <i
                        className="fas fa-circle"
                        style={{ color: "green" }}
                      ></i>
                      Open
                    </span>
                  </div>
                </div>
                <div className="info-bottom w-[363px] h-[27px] gap-[16px] mt-[24px] flex flex-row">
                  <div className="location flex items-center justify-center w-[168px] h-[27px] gap-[8px] font-general-sans  font-[500] text-[20px] leading-[27px] text-[#5D5D5D]">
                    <GrLocation className="location-icon w-[16px] h-[20px] mt-[2px] left-[4px]  " />
                    Delaware, USA
                  </div>
                  <BsDot className="dot-icon w-[15px] h-[15px] text-[#D1D1D1] items-center mt-[10px] " />
                  <div className="salary w-[159px] flex items-center justify-center h-[27px]  font-general-sans gap-[12px] font-[500] text-[20px] leading-[27px] text-[#5D5D5D]">
                    <LiaCoinsSolid className="money-icon w-[20px] h-[18px] mt-[3px] left-[2px]" />
                    $300k-$400k
                  </div>
                </div>
              </div>
              <div className="line w-[1319px] h-[1px] ml-0 mt-[32px] bg-[#E7E7E7]"></div>

              <div class="job-info-table w-[872px] h-[115px] mt-[33px] left-[100px] gap-[64px] font-general-sans">
                <div class="flex">
                  <div class="w-[170px] h-[115px] gap-[8px]">
                    <p class="w-[96px] h-[19px] font-[500] text-[14px] leading-[18.9px] text-[#6E6D6D]">
                      Skills Required
                    </p>
                    <div className=" w-[126.41px] h-[88px] gap-[8px]">
                      <div class="flex items-center h-[24px] w-[66px] mt-[8px] rounded-md border-[1px] px-[6px] py-[4px] bg-[#FFFFFF] border-[#D0D5DD]">
                        <span class="mr-1">
                          <img src={figma} alt="figma" />
                        </span>
                        <p className="w-[34px] h-[16px] font-[500] text-[12px] leading-[16.2px] items-center text-[#344054]">
                          Figma
                        </p>
                      </div>
                      <div class="flex items-center h-[24px] w-[126.41px] rounded-md border-[1px] mt-[8px] px-[6px] py-[4px] gap-[3px] bg-[#FFFFFF] border-[#D0D5DD]">
                        <span class="w-[15px] h-[15px]">
                          <img src={adobeillu} alt="adobe illustrator" />
                        </span>
                        <p className="w-[94px] h-[16px] font-[500] text-[12px] leading-[16.2px] items-center text-[#344054]">
                          Adobe Illustrator
                        </p>
                      </div>
                      <div class="flex items-center h-[24px] w-[88.41px] rounded-md border-[1px] mt-[8px] px-[6px] py-[4px] gap-[3px] bg-[#FFFFFF] border-[#D0D5DD]">
                        <span class="w-[15px] h-[15px]">
                          <img src={adobe} alt="adobe" />
                        </span>
                        <p className="w-[56px] h-[16px] font-[500] text-[12px] leading-[16.2px] items-center text-[#344054]">
                          Adobe XD
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-[170px] h-[49px] gap-[8px]">
                    <div>
                      <p class="w-[129px] h-[19px] font-[500] text-[14px] leading-[18.9px] text-[#6E6D6D] ">
                        Preferred Language
                      </p>
                    </div>
                    <div>
                      <p class="h-[22px] font-[600] text-[16px] leading-[21.6px] text-[#3D3D3D] mt-[8px]">
                        English
                      </p>
                    </div>
                  </div>
                  <div class="w-[170px] h-[49px] gap-[8px]">
                    <div>
                      <p class="w-[32px] h-[19px] font-[500] text-[14px] leading-[18.9px] text-[#6E6D6D] ">
                        Type
                      </p>
                    </div>
                    <div>
                      <p class="h-[22px] font-[600] text-[16px] leading-[21.6px] text-[#3D3D3D] mt-[8px]">
                        Full time
                      </p>
                    </div>
                  </div>
                  <div class="w-[175px] h-[49px] gap-[8px]">
                    <div>
                      <p class="w-[128px] h-[19px] font-[500] text-[14px] leading-[18.9px] text-[#6E6D6D] ">
                        Years of Experience
                      </p>
                    </div>
                    <div>
                      <p class="h-[22px] font-[600] text-[16px] leading-[21.6px] text-[#3D3D3D] mt-[8px]">
                        3+ Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line w-[1319px] h-[1px] mt-[32px] bg-[#E7E7E7]"></div>
              <div className="job-description w-[526px] h-[401px] gap-[8px] mt-[33px]">
                <div className="h-[19px] w-[90px] gap-[8px] font-general-sans font-[500] text-[14px] leading-[18.9px] text-[#6E6D6D]">
                  <p>About the job</p>
                </div>
                <div className="w-[526px] h-[374px] font-general-sans font-[500] text-[16px] leading-[28px] text-[#3D3D3D]">
                  <ol className="list-decimal ml-4">
                    <li>Handle the UI/UX research design</li>
                    <li>
                      Work on researching on latest web applications designs &
                      trends
                    </li>
                    <li>Work on conceptualizing and visualizing</li>
                    <li>
                      Work on creating graphics content and other graphic
                      related works
                    </li>
                  </ol>
                  <h4>Benefits:</h4>
                  <ul className="list-disc ml-7">
                    <li>Health insurance</li>
                    <li>Provident Fund</li>
                  </ul>
                  <h4>Schedule:</h4>
                  <ul className="list-disc ml-7">
                    <li>Day shift</li>
                  </ul>
                  <h4>Supplemental pay types:</h4>
                  <ul className="list-disc ml-7">
                    <li>Performance bonus</li>
                    <li>Yearly bonus</li>
                  </ul>
                  <p>Work Location: In person</p>
                </div>
              </div>
              <div className="line w-[1319px] h-[1px] mt-[32px] bg-[#E7E7E7]"></div>
              <div className="company-info  font-general-sans w-[736px]  h-[271px] mt-[33px] left-[100px] gap-[16px] ">
                <div className="w-[148px] h-[60px] pt-[10px] pl-[10px] pb-[10px] pr-[0px] gap-[10px] flex">
                  <div className="company-logo h-[40px] w-[138px] p-0  gap-[12px] ">
                    <img
                      src={profile}
                      alt="profile"
                      className="w-[40px] h-[40px] rounded-[4px]"
                    />
                  </div>
                  <span className="company-name mt-[4px] w-[86px] h-[27px] font-sans font-[500] text-[20px] leading-[27px]  text-[#4F4F4F] ">
                    Atlassian
                  </span>
                </div>

                <div className="company-details w-[736px] h-[195px] mx-auto my-auto gap-[48px] ">
                  <div className="flex mt-[16px]">
                    <div className="detail w-[344px] h-[49px] gap-[8px] mx-auto ">
                      <div className="detail-label w-[92px] h-[19px] font-sans font-[500] text-[14px] leading-[18.9px] text-[#6E6D6D]">
                        Company size
                      </div>
                      <div className="detail-value w-[477px] h-[22px] font-sans font-[500] text-[16px] leading-[21.6px] text-[#3D3D3D] ">
                        1k - 2k Employees
                      </div>
                    </div>
                    <div className="detail w-[344px] h-[49px] gap-[8px] mx-auto">
                      <div className="detail-label w-[32px] h-[19px] font-sans font-[500] text-[14px] leading-[18.9px] text-[#6E6D6D] ">
                        Type
                      </div>
                      <div className="detail-value w-[477px] h-[22px] font-sans font-[500] text-[16px] leading-[21.6px] text-[#3D3D3D] ">
                        Private
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-[16px]">
                    <div className="detail w-[344px] h-[49px] gap-[8px] mx-auto ">
                      <div className="detail-label w-[92px] h-[19px] font-sans font-[500] text-[14px] leading-[18.9px] text-[#6E6D6D]">
                        Sector
                      </div>
                      <div className="detail-value w-[477px] h-[22px] font-sans font-[500] text-[16px] leading-[21.6px] text-[#3D3D3D] ">
                        Information Technology, Infrastructure
                      </div>
                    </div>
                    <div className="detail w-[344px] h-[49px] gap-[8px] mx-auto">
                      <div className="detail-label w-[32px] h-[19px] font-sans font-[500] text-[14px] leading-[18.9px] text-[#6E6D6D] ">
                        Funding
                      </div>
                      <div className="detail-value w-[477px] h-[22px] font-sans font-[500] text-[16px] leading-[21.6px] text-[#3D3D3D] ">
                        Bootstrapped
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-[16px]">
                    <div className="detail w-[344px] h-[49px] gap-[8px] mx-auto ">
                      <div className="detail-label w-[92px] h-[19px] font-sans font-[500] text-[14px] leading-[18.9px] text-[#6E6D6D]">
                        Founded In
                      </div>
                      <div className="detail-value w-[477px] h-[22px] font-sans font-[500] text-[16px] leading-[21.6px] text-[#3D3D3D] ">
                        2019
                      </div>
                    </div>
                    <div className="detail w-[344px] h-[49px] gap-[8px] mx-auto">
                      <div className="detail-label w-[76px] h-[19px] font-sans font-[500] text-[14px] leading-[18.9px] text-[#6E6D6D] ">
                        Founded By
                      </div>
                      <div className="detail-value w-[477px] h-[22px] font-sans font-[500] text-[16px] leading-[21.6px] text-[#3D3D3D] ">
                        Scott Farquhar, Mike Cannon-Brookes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main w-[409px] h-[1150px] border-t-[1px] ml-[-100px] border-l-[1px] border-b-[0px] border-r-[0px] gap-[10px] bg-[#FCFCFC] border-[#E7E7E7]   ">
            <div className="elements w-[360px] h-[361px] ml-[24.5px] mt-[36px] left-[1344px] gap-[24px] ">
              <div className="job-actions h-[46px] w-[360px] gap-[16px] flex justify-between font-general-sans">
                <button className="job-action-button flex flex-row w-[172px] h-[46px] rounded-[8px] border-[0.8px] gap-[10px] pl-[24px] pr-[24px] pt-[12px] pb-[12px] bg-[#FEF4F2] border-[#DC4A2D]">
                  <RiDeleteBin5Line className="delete-icon w-[20px] h-[20px] text-[#DC4A2D]" />
                  <div className="w-[75px] h-[22px] font-[500] text-[16px] leading-[21.6px] text-[#DC4A2D] ">
                    Delete job
                  </div>
                </button>
                <button className="job-action-button flex flex-row w-[172px] h-[46px] rounded-[8px] border-[2px] gap-[10px] pl-[24px] pr-[24px] pt-[12px] pb-[12px] bg-[#DC4A2D] border-[#FED3CA]">
                  <LuPencil className="edit-icon w-[20px] h-[20px] text-[#FFFFFF]" />
                  <span className="w-[56px] h-[22px] font-[500] text-[16px] leading-[21.6px] text-[#FFFFFF] ">
                    Edit job
                  </span>
                </button>
              </div>
              <div className="job-stats w-[360px] h-[291px]  p-[12px] rounded-[5px] gap-[16px] ">
                <div className="stat flex w-[336px] h-[42px] justify-between mt-[15px] mb-[15px]">
                  <div className="applicants w-[135px] h-[42px] p-[10px] gap-[10px] flex flex-row items-center">
                    <FiUsers className="user-icon w-[16.6px] h-[22px] mt-[2px] left-[100px] " />
                    <span className="w-[81px] h-[22px] font-general-sans font-[500] text-[16px] leading-[21.6px] text-[#4F4F4F] ">
                      Applicants
                    </span>
                  </div>
                  <div className="w-[57px] h-[39px]  pl-[10px] pr-[10px] pt-[6px] pb-[6px] gap-[10px] ">
                    <span className="stat-value w-[37px] h-[27px]  font-general-sans font-[600] text-[20px] leading-[27px] text-[#3D3D3D]  ">
                      400
                    </span>
                  </div>
                </div>

                <div className="w-[336px] h-[1px] bg-[#E7E7E7] "></div>

                <div className="stat flex w-[336px] h-[42px]  mt-[15px] mb-[15px] justify-between ">
                  <div className="matches w-[135px] h-[42px] p-[10px] gap-[10px] flex flex-row items-center">
                    <RiUserFollowLine className="matches-icon w-[16.6px] h-[22px] mt-[2px] left-[100px] " />
                    <span className="w-[81px] h-[22px] font-general-sans font-[500] text-[16px] leading-[21.6px] text-[#4F4F4F] ">
                      Matches
                    </span>
                  </div>
                  <div className="w-[57px] h-[39px] pl-[10px] pr-[10px] pt-[6px] pb-[6px] gap-[10px] ">
                    <span className="stat-value w-[37px] h-[27px] font-general-sans font-[600] text-[20px] leading-[27px] text-[#3D3D3D]  ">
                      100
                    </span>
                  </div>
                </div>

                <div className="w-[336px] h-[1px] bg-[#E7E7E7] "></div>

                <div className="stat flex w-[336px] h-[42px] justify-between mt-[15px] mb-[15px] ">
                  <div className="messages w-[135px] h-[42px] p-[10px] gap-[10px] flex flex-row items-center">
                    <FiMessageSquare className="message-icon w-[16.6px] h-[22px] mt-[2px] left-[100px] " />
                    <span className="w-[81px] h-[22px] font-general-sans font-[500] text-[16px] leading-[21.6px] text-[#4F4F4F] ">
                      Messages
                    </span>
                  </div>
                  <div className="w-[57px] h-[39px] pl-[10px] pr-[10px] pt-[6px] pb-[6px] gap-[10px] ">
                    <span className="stat-value w-[37px] h-[27px] font-general-sans font-[600] text-[20px] leading-[27px] text-[#3D3D3D]  ">
                      147
                    </span>
                  </div>
                </div>

                <div className="w-[336px] h-[1px] bg-[#E7E7E7] "></div>

                <div className="stat flex w-[336px] h-[42px] justify-between mt-[15px] mb-[15px]">
                  <div className="views w-[135px] h-[42px] p-[10px] gap-[10px] flex flex-row items-center">
                    <FiEye className="views-icon w-[16.41px] h-[22px] mt-[2px] left-[100px] " />
                    <span className="w-[81px] h-[22px] font-general-sans font-[500] text-[16px] leading-[21.6px] text-[#4F4F4F] ">
                      Views
                    </span>
                  </div>
                  <div className="w-[57px] h-[39px] pl-[10px] pr-[10px] pt-[6px] pb-[6px] gap-[10px] ">
                    <span className="stat-value w-[37px] h-[27px] font-general-sans font-[600] text-[20px] leading-[27px] text-[#3D3D3D]  ">
                      800
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
