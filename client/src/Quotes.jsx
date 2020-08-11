import React , {useRef, useState} from "react";
import axios from "axios";

function Quotes(){
  const [text,setText]=useState("");
  const [author,setAuthor]=useState("");
  const h1ref = useRef(null);

  function getQuote() {
    axios.get("/getQuote",  { crossdomain: true }).then(response => {
      const {text,author}=response.data;
      setText(text);
      setAuthor(author);
    });
  }

  function copyText() {
    var el = document.getElementsByClassName("quote")[0];
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand("copy");
    sel.removeAllRanges();
  };

  return(
    <div>
      <h1 className="quote" ref={h1ref}>{text}</h1>
      <h3 className="name">{author}</h3>
      <button className="btn" onClick={getQuote}>Generate Quote</button>
      <button class="btn" onClick={copyText}>
        <span class="material-icons">
          content_copy
        </span>
      </button>
    </div>
  )
}

export default Quotes;
