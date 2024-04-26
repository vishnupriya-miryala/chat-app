import React from "react";
import "./HomeScreen.css";
import logo from "../../Assets/logo.png";
import file from "../../Assets/file-upload.png";
import { useState, useEffect } from "react";
import { FaSearch, FaArrowUp } from "react-icons/fa";
import crblm1 from "../../Assets/crblm1.png";
import tenable2 from "../../Assets/tenable2.png";
import Ellipse3 from "../../Assets/Ellipse3.png";
import splunk4 from "../../Assets/splunk4.png";
import Ellipse5 from "../../Assets/Ellipse5.png";
import mendeley6 from "../../Assets/mendeley6.png";
import playbook7 from "../../Assets/playbook7.png";
import crocoblock8 from "../../Assets/crocoblock8.png";
import crowdstrike9 from "../../Assets/crowdstrike9.png";
import rapidapi10 from "../../Assets/rapidapi10.png";
import { IoIosTimer } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BiSolidFile } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { BsFilePdf } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiText } from "react-icons/ci";
import { SlDoc } from "react-icons/sl";

const HomeScreen = () => {
  const images = [
    { id: 1, url: crblm1, name: "cribl" },
    { id: 2, url: tenable2, name: "tenable" },
    { id: 3, url: Ellipse3, name: "Ellipse" },
    { id: 4, url: splunk4, name: "splunk" },
    { id: 5, url: Ellipse5, name: "llipse" },
    { id: 6, url: mendeley6, name: "mendeley" },
    { id: 7, url: playbook7, name: "playbook" },
    { id: 8, url: crocoblock8, name: "crocoblock" },
    { id: 9, url: crowdstrike9, name: "crowdstrike" },
    { id: 10, url: rapidapi10, name: "rapidapi1" },
  ];

  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulating download progress with useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 70) {
        setProgress((prevProgress) => prevProgress + 10);
      } else {
        clearInterval(timer);
      }
    }, 500); // Change the interval to adjust the speed of progress
    return () => clearInterval(timer);
  }, [progress]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value !== "") {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Searching for:", searchText);
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <div className="projectName">
            <img src={logo} width={25} height={25} />
            <h3>Project Zysec</h3>
          </div>
        </div>
        <div className="middle">
          <div className="content">
            <div className="item-cont">
              <p className="cont">Document Manager</p>
              <p className="cont">Policies Manager</p>
              <p className="cont">procedure</p>
              <p className="cont">Announcement</p>
              <p className="cont">city guide</p>
            </div>
            <div className="item-cont">
              <p className="cont">file</p>
              <p className="cont">city guide</p>
              <p className="cont">content</p>
              <p className="cont"> knowledge</p>
              <p className="cont">checklist</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="uploadFile" onClick={() => setModalVisible(true)}>
            <img src={file}></img>
            <span>Upload File</span>
            <div className="circle">
              <span className="zero">0</span>
            </div>
          </div>
          {isModalVisible && (
            <div className="modal-up">
              <div className="modal-cont">
                <div className="head">
                  <BiSolidFile />
                  <h5 className="select">Select files</h5>
                  <div style={{ marginLeft: 250 }}>
                    <IoIosCloseCircleOutline
                      size={30}
                      onClick={() => setModalVisible(false)}
                    ></IoIosCloseCircleOutline>
                  </div>
                </div>
                <div className="file-cont">
                  <div className="upload-ic">
                    <IoCloudUploadOutline style={{ padding: 5 }} />
                    <p>Upload file</p>
                  </div>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  {/* <p className="formate">supported formates</p> */}
                  {/* <div className="docs">
                    <BsFilePdf className="doc-ic" />
                    <span>.pdf</span>
                    <IoDocumentTextOutline className="doc-ic" />
                    <span>.Doc</span>
                    <SlDoc className="doc-ic" />
                    <span>.md</span>
                    <CiText className="doc-ic" />
                    <span>.text</span>
                  </div> */}
                  <strong>progress:78/10 chunks embedded</strong>
                  <p className="formate">
                    Note:do not navigate from this screen as it may result in
                    uncompleted file embedded
                  </p>
                  {/* <input type="file" /> */}
                </div>
                <div className="apply">
                  <p className="apply-text">Apply</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="below-container">
          <h1>How can I help you Today?</h1>
          <form onSubmit={handleSubmit} className="search-bar">
            <div className="search-input">
              <CiSearch className="search-icon" />
              <input
                className="input"
                type="text"
                placeholder="Search here..."
                value={searchText}
                onChange={handleChange}
                style={{ paddingLeft: 40 }}
              />
              <FaArrowUp className="up-arrow-icon" />
            </div>
          </form>
          {showModal && (
            <div className="modal">
              <div className="modal-items">
                <CiSearch className="modal-icon" />
                <span className="recent">Recent Search</span>
              </div>
              <div className="modal-content">
                <div className="modal-item">
                  <IoIosTimer className="modal-icon" />
                  <span>cribl</span>
                </div>
                <div className="modal-item">
                  <IoIosTimer className="modal-icon" />
                  <span>tenable</span>
                </div>
                <div className="modal-item">
                  <IoIosTimer className="modal-icon" />
                  <span>Ellipse</span>
                </div>
                <div className="modal-item">
                  <IoIosTimer className="modal-icon" />
                  <span>Splunk</span>
                </div>
                <div className="modal-item">
                  <IoIosTimer className="modal-icon" />
                  <span>Ellipse</span>
                </div>
                <div className="modal-item">
                  <IoIosTimer className="modal-icon" />
                  <span>mendeley</span>
                </div>
                <div className="modal-item">
                  <IoIosTimer className="modal-icon" />
                  <span>playbook</span>
                </div>
                <div className="modal-item">
                  <IoIosTimer className="modal-icon" />
                  <span>crocoblock</span>
                </div>
              </div>
            </div>
          )}
          <div>
            <h4>Chat with an AI personnel</h4>
            <div className="image-grid">
              <div className="image-row">
                {images.slice(0, 5).map((image) => (
                  <div key={image.id} className="image-container">
                    <img src={image.url} alt={image.name} className="image" />
                    <div className="image-name">{image.name}</div>
                  </div>
                ))}
              </div>
              <div className="image-row">
                {images.slice(5).map((image) => (
                  <div key={image.id} className="image-container2">
                    <img src={image.url} alt={image.name} className="image" />
                    <div className="image-name">{image.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="containers">
            <div>
              <h5>why do all the websites looks same?</h5>
              <p>
                Ensure that all data stored in the cloud is encrypted both in
                transit and at rest.
                <span style={{ color: "blue" }}>...readmore</span>
              </p>
            </div>
            <div>
              <h5>why do all the websites looks same?</h5>
              <p>
                Ensure that all data stored in the cloud is encrypted both in
                transit and at rest,
                <span style={{ color: "blue" }}>...readmore</span>
              </p>
            </div>
            <div>
              <h5>why do all the websites looks same?</h5>
              <p>
                Ensure that all data stored in the cloud is encrypted both in
                transit and at rest
                <span style={{ color: "blue" }}>...readmore</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
