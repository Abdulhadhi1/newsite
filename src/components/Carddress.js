import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardGroup,
  MDBBtn,
  MDBTooltip,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Color from "./Color";

const Carddress = ({
  imageFile,
  description,
  title,
  tags,
  _id,

}) => {
  const { user } = useSelector((state) => ({ ...state.auth }));


  const dispatch = useDispatch();
  const excerpt = (str) => {
    if (str.length > 45) {
      str = str.substring(0, 45) + " ...";
    }
    return str;
  };

  return (
   <>
  
    <MDBCardGroup>

      <MDBCard className="h-100 mt-2 d-sm-flex" style={{ maxWidth: "20rem" }}>
        <MDBCardImage
          src={imageFile}
          alt={title}
          position="top"
          style={{ maxWidth: "100%", height: "180px" }}
        />
        <div className="top-left">{""}</div>
        <span className="text-start tag-card">
          {tags.map((tag) => (
            <Link to={`/tours/tag/${tag}`}> #{tag}</Link>
          ))}
          {/* <MDBBtn
            style={{ float: "right" ,color:"orange"}}
            tag="a"
            color="none"

            onClick={!user?.result ? null :""}
          >
            {!user?.result ? (
              <MDBTooltip title="Please login to like tour" tag="a">
             
              </MDBTooltip>
            ) : (
            <></>
            )}
          </MDBBtn><h5 className="he5">Add Color:</h5> */}


        <Color />

          
        </span>
        <MDBCardBody>
          <MDBCardTitle className="text-start">{title}</MDBCardTitle>
          <MDBCardText className="text-start">
            {excerpt(description)}
            <Link to={`/tour/${_id}`}  style={{ color: "#EE4B2B" , }}>Read More</Link>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup></>
  );
};

export default Carddress;
