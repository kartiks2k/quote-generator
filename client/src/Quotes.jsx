import React , {useState} from "react";
import axios from "axios";

function Quotes(){
  const [text,setText]=useState("");
  const [author,setAuthor]=useState("");

  function getQuote() {
    axios.get("http://localhost:8000",  { crossdomain: true }).then(response => {
      const {text,author}=response.data;
      setText(text);
      setAuthor(author);
    });
  }

  return(
    <div>
      <h1 className="quote">{text}</h1>
      <h3 className="name">{author}</h3>
      <button className="btn" onClick={getQuote}>Generate Quote</button>
    </div>
  )
}

export default Quotes;
