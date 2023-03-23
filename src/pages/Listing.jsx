import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import shareIcon from "../assets/svg/shareIcon.svg";

function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const auth = getAuth();
  return <div>Listing</div>;
}

export default Listing;
