function WhatsappButton({ text }: { text: boolean }) {
    return (
      <div className="whatsapp-link">
        <a
          href="https://wa.me/6282170459803"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp info"></i>
          {text && "WhatsApp"}
        </a>
      </div>
    );
  }
  
  export default WhatsappButton;
  