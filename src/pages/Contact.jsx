import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Contact() {
  const [message, setMessage] = useState("");
  const [landlord, setLandlord] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useParams();

  useEffect(() => {});
  return <div>Contact</div>;
}

export default Contact;
