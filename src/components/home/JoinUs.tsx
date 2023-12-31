const JoinUs = () => {
  return (
    <section className="max-container padding-container">
      <div className="flex flex-col items-center gap-6 bg-[#101010] rounded-[1.875rem] p-5 md:p-12 lg:p-20">
        <h4 className="text-[2.5rem] md:text-5xl lg:text-[3.5rem] text-center font-bold leading-[110%]">Join the community today</h4>
        <p className="text-lg text-center font-normal leading-[160%]">
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
          pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis
          ac turpis at amet. Purus malesuada placerat arcu at enim elit in
          accumsan.
        </p>
        <button className="flex justify-center items-center py-5 px-6 border-2 border-[#01302E] bg-[#01302E] rounded-lg">
          <span className="px-6">Join for free</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none">
            <path
              d="M15.586 11.157L11.636 7.20704C11.4538 7.01844 11.353 6.76584 11.3553 6.50364C11.3576 6.24144 11.4628 5.99063 11.6482 5.80522C11.8336 5.61981 12.0844 5.51465 12.3466 5.51237C12.6088 5.51009 12.8614 5.61088 13.05 5.79304L18.707 11.45C18.8002 11.5427 18.8741 11.6529 18.9246 11.7742C18.9751 11.8955 19.001 12.0256 19.001 12.157C19.001 12.2884 18.9751 12.4186 18.9246 12.5399C18.8741 12.6612 18.8002 12.7714 18.707 12.864L13.05 18.521C12.9578 18.6166 12.8474 18.6927 12.7254 18.7451C12.6034 18.7976 12.4722 18.8251 12.3394 18.8263C12.2066 18.8274 12.0749 18.8021 11.952 18.7519C11.8291 18.7016 11.7175 18.6273 11.6236 18.5334C11.5297 18.4395 11.4555 18.3279 11.4052 18.205C11.3549 18.0821 11.3296 17.9504 11.3307 17.8176C11.3319 17.6849 11.3595 17.5536 11.4119 17.4316C11.4643 17.3096 11.5405 17.1993 11.636 17.107L15.586 13.157H6C5.73478 13.157 5.48043 13.0517 5.29289 12.8641C5.10536 12.6766 5 12.4223 5 12.157C5 11.8918 5.10536 11.6375 5.29289 11.4499C5.48043 11.2624 5.73478 11.157 6 11.157H15.586Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default JoinUs;
