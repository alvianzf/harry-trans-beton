function WhatsappButton({ text }: { text: boolean }) {
    return (
      <div className="whatsapp-link">
        <a
          href="https://wa.me/62812170459803"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
          {text && "WhatsApp"}
        </a>
      </div>
    );
  }
  
  export default WhatsappButton;
  