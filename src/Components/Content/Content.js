import React, { useState } from "react";
import "./Content.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaSearch, FaArrowUp } from "react-icons/fa";

const Content = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Employe Templates");
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value !== "") {
      // setShowModal(true);
    } else {
      // setShowModal(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchText);
  };
  function handleBlur(e) {
    console.log(e);
  }
  return (
    <>
      <div className="app">
        <div className="content">
          <h3 className="folder">Choose Folder</h3>

          <p className="files">This content will be saved in:</p>
          <div className="dropdown">
            <div
              onClick={(e) => {
                setIsActive(!isActive);
              }}
              className="dropdown-btn"
            >
              {selected}
              <span
                className={
                  isActive ? (
                    <MdArrowDropUp style={{ color: "red" }} />
                  ) : (
                    <MdOutlineArrowDropDown />
                  )
                }
              />
            </div>
            <div
              className="dropdown-content"
              style={{ display: isActive ? "block" : "none" }}
            >
              <div
                onClick={(e) => {
                  setIsSelected(e.target.textContent);
                  setIsActive(!isActive);
                }}
                className="item"
              >
                Sales folder
              </div>
              <div
                className="item"
                onClick={(e) => {
                  setIsSelected(e.target.textContent);
                  setIsActive(!isActive);
                }}
              >
                Copywritting Folder
              </div>
              <div
                className="item"
                onClick={(e) => {
                  setIsSelected(e.target.textContent);
                  setIsActive(!isActive);
                }}
              >
                Legal Folder
              </div>
              <div
                className="item"
                onClick={(e) => {
                  setIsSelected(e.target.textContent);
                  setIsActive(!isActive);
                }}
              >
                Cuboid folder
              </div>
              <div
                className="item"
                onClick={(e) => {
                  setIsSelected(e.target.textContent);
                  setIsActive(!isActive);
                }}
              >
                Employe Folder
              </div>
            </div>
          </div>
          <div className="cont-sc">
            <p className="cancel">Cancel</p>
            <p className="save">Save Content</p>
          </div>
        </div>
        <div className="container-two">
          <div className="back">
            <MdOutlineKeyboardBackspace className="modal-icon" />
            <span>Back</span>
            <p style={{ marginLeft: 900 }} className="pre">
              preview
            </p>
            <p className="draft">Draft</p>
          </div>
          <div className="divider"></div>
          <div className="title">
            <IoDocumentOutline className="icon" />
            <h3 className="head-title">
              How to create an invoice for the first time
            </h3>

            <p className="edit">
              Last edited 25 minutes ago by <span> Ahmed foil</span>
            </p>
          </div>
          <div className="divider"></div>
          <div>
            <p className="para">
              Start by placing the word "Invoice" at the top of the document,
              preferably in a bold and slightly larger font size to make it
              stand out. Below that, include your company name, address, contact
              information, and logo if you have one. Start by placing the word
              "Invoice" at the top of the document, preferably in a bold and
              slightly larger font size to make it stand out. Below that,
              include your company name, address, contact information, and logo
              if you have one.
            </p>
            <p className="para">
              Beneath your own details, include the client's name, address,
              contact information, and any other relevant details such as their
              email address or purchase order number Start by placing the word
              "Invoice" at the top of the document, preferably in a bold and
              slightly larger font size to make it stand out. Below that,
              include your company name, address, contact information, and logo
              if you have one.Start by placing the word "Invoice" at the top of
              the document, preferably in a bold and slightly larger font size
              to make it stand out. Below that, include your company name,
              address, contact information, and logo if you have one. Start by
              placing the word "Invoice" at the top of the document, preferably
              in a bold and slightly larger font size to make it stand out.
              Below that, include your company name, address, contact
              information, and logo if you have one. Start by placing the word
              "Invoice" at the top of the document, preferably in a bold and
              slightly larger font size to make it stand out. Below that,
              include your company name, address, contact information, and logo
              if you have one. "Invoice" at the top of the document, preferably
              in a bold and slightly larger font size to make it stand out.
              Below that, include your company name, address, contact
              information, and logo if you have one.
            </p>
            <p className="para">
              Start by placing the word "Invoice" at the top of the document,
              preferably in a bold and slightly larger font size to make it
              stand out. Below that, include your company name, address, contact
              information, and logo if you have one.
            </p>
          </div>
        </div>
        <div className="search-input">
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
      </div>
    </>
  );
};

export default Content;
